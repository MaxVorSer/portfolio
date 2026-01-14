<?php

class TelegraphText
{
    private string $text;
    private string $title;
    private string $author;
    private string $published;
    private string $slug;

    /**
     * @param string $author
     */
    public function setAuthor(string $author)
    {
        if (strlen($author) > 120){
            echo 'Недопустимая длина строки' . PHP_EOL;
        }
        $this->author= $author;
    }

    /**
     * @return string $this->author
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @param string $slug
     */
    public function setSlug(string $slug)
    {
        if (preg_match("/^[a-zA-Z0-9\-_]+$/", $slug)){
            $this->slug = $slug;
        } else{
            echo 'Строка должна содержать только буквы латинского алфавита, цифры и символы "—_"' . PHP_EOL;
        }
    }

    /**
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * @param string $published
     */
    public function setPublished(string $published)
    {
        if (date('d.m.y' <= $published)){
            $this->published = $published;
        } else{
            echo 'Не соответствующая дата';
        }
    }

    /**
     * @return string
     */
    public function getPublished(): string
    {
        return $this->published;
    }

    /**
     * @param string $name
     * @param string $value
     */
    public function __set(string $name, string $value)
    {
        switch ($name){
            case 'published':
                $this->setPublished($value);
                break;
            case 'slug':
                $this->setSlug($value);
                break;
            case 'author':
                $this->setAuthor($value);
                break;
            case 'text':
                $this->storeText();
                break;
        }
    }

    /**
     * @param string $name
     *
     * return string
     */
    public function __get(string $name): string
    {
        switch ($name){
            case 'published':
                return $this->getPublished();
            case 'slug':
                return $this->getSlug();
            case 'author':
                return $this->getAuthor();
            case 'text':
                return $this->loadText();
        }
        return "Такого параметра нет";
    }

    /**
     * @param string $authorName
     * @param string $slug
     */
    public function __construct(string $authorName, string $slug)
    {
        $this->author = $authorName;
        $this->slug = $slug;
        $this->published = date('r');
    }

    /**
     * @return void
     */
    private function storeText(): void
    {
        $array = [
            "title" => $this->title,
            "text" => $this->text,
            "author" => $this->author,
            "published" => $this->published
        ];
        $serialize = serialize($array);
        file_put_contents($this->slug, $serialize);
    }

    /**
     * @return string
     */
    private function loadText(): string
    {
        if (file_exists($this->slug)) {
            $file = file_get_contents($this->slug);
            $unserialize = unserialize($file);
            $title = $unserialize["title"];
            $text = $unserialize["text"];
            $author = $unserialize["author"];
            $published = $unserialize["published"];
        }
        return $text;
    }

    /**
     * @param string $text
     * @param string $title
     *
     * @return void
     */
    public function editText(string $text, string $title): void
    {
        $this->text = $text;
        $this->title = $title;
    }
}