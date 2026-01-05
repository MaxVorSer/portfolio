import { useState } from "react";



export function useList() {

    let [list, setList] = useState(() => []);

    /** Создать новый элемент. */
    const createItem = () => {
        setList((list) => [
            ...list,
            { id: window.crypto.randomUUID(), title: '', done: false },
        ]);
    };

    /**
     * Установить заголовок элемента.
     *
     * @param id - ID элемента.
     * @param title - Заголовок элемента.
     */
    const setItemTitle = (id, title) => {
        setList((list) =>
            list.map((item) => (item.id === id ? {...item, title } : item))
        );
    };



    /**
     * Переключить выполненность элемента.
     *
     * @param id - ID элемента.
     */

    const toggleItem = (id) => {
        setList(() =>
            list.map((item) => (item.id === id ? {...item, done: !item.done } : item))
        );
    };

    /**
     * Удалить элемент.
     *
     * @param id - ID элемента.
     */
    const deleteItem = (id) => {

        setList((list) =>
            list.filter((item) => (item.id != id))
        );
    };



    return {
        list,
        createItem,
        setItemTitle,
        toggleItem,
        deleteItem,
    };
}