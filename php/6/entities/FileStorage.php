<?php

require_once 'C:\xampp\htdocs\php-developer-base\Module-11\entities\Storage.php';

class FileStorage extends Storage
{
    public string $directed = 'C:\xampp\htdocs\php-developer-base\untitled\php-developer-base\Module-11\storage';

    /**
     * @param TelegraphText $obj
     *
     * @return string
     */
    public function create(TelegraphText $obj): string
    {
        $i = 0; // создаю переменную к которой буду прибовлять при каждой проверки 1
        $id = $obj->slug . ' ' . date("d.m.y"); // создаю slug c датой
        if (file_exists("$this->directed" . "\\" . "$id")) {
            $id = $id . " $i";
            while (file_exists("$this->directed" . "\\" . "$id") === true) { // делаю проверку
                $id = str_replace(date("d.m.y") . " " . $i, date("d.m.y") . " " . ++$i, $id); // добовляю к названию файла номер $i
            }
        }
        $obj->slug = $id; // делаю слаг объекта как название id
        $serializeObj = serialize($obj); // сериализую его
        file_put_contents($this->directed . "//" . $obj->slug, $serializeObj); // сохраняю объект
        return $obj->slug; // возвращаю слаг по заданию
    }

    /**
     * @param TelegraphText $obj
     *
     * @return object
     */
    public function read(TelegraphText $obj): object
    {
        if (file_exists($obj->slug)) {
            $obj = unserialize(file_get_contents($obj->slug));
        }
        return $obj;
    }

    /**
     * @param TelegraphText $obj
     * @param TelegraphText $changeObj
     *
     * @return void
     */
    public function update(TelegraphText $obj, TelegraphText $changeObj): void
    {
        if (file_exists($obj->slug)) {
            file_put_contents($obj->slug, $changeObj);
        }
    }

    /**
     * @param TelegraphText $obj
     *
     * @return void
     */
    public function delete(TelegraphText $obj): void
    {
        unlink("$this->directed" . "\\" . "$obj->slug");
    }

    /**
     * @return array
     */
    public function list(): array
    {
        $arrayObjText = []; // создаю массив где будут хранится все объекты
        $search = scandir($this->directed); // сканирую дерикторию (получаю массив из файлов в директории)
        var_dump($search);
        $a = count($search); // создаю переменную с кол-вом элементов массива
        for ($i = 0; $i < $a; $i++) { // создаю цикл который проходит по массиву с файлами
            if (strpos($search[$i], '.' || '..')) {
                $file = file_get_contents('storage//' . $search[$i]); // читаю и записываю каждый объект в переменную file
                $obj = unserialize($file);
                if ($obj !== false) {
                    $arrayObjText[] = $obj; // и добавляю ее в массив
                }
            }
        }
        return $arrayObjText;
    }
    /**
     * @param string $textError
     */
    public function logMessage (string $textError)
    {
        echo $textError . PHP_EOL;
    }

    /**
     * @param int $countMessages
     *
     * @return array
     */
    public function lastMessage (int $countMessages): array
    {
        return $arrayMessages = [];
    }

    /**
     * @param string $nameMethodClass
     * @param callable $functionCallable
     */
    public function attachEvent(string $nameMethodClass,callable $functionCallable)
    {
        echo $nameMethodClass;
    }

    /**
     * @param string $nameMethodClass
     */
    public function detouchEvent(string $nameMethodClass)
    {
        echo $nameMethodClass;
    }

    public  function test ()
    {
        echo 'test';
    }
}