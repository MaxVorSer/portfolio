<?php







abstract class View
{
    public $storage;

    public function __construct(Storage $obj)
    {
        $this->storage = $obj;
    }

    /**
     * @param string $slug
     *
     * @return void
     */
    abstract function displayTextById(string $slug): void;

    /**
     * @param string $url
     *
     * @return void
     */
    abstract function displayTextByUrl(string $url): void;
}










$telegraphText = new TelegraphText('123', 'some_slug');
$telegraphText->editText('qwe', 'wqedf');
var_dump($telegraphText);
$telegraphText->text;



