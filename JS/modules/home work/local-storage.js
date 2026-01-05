let todoArray = [];
console.log(localStorage);
export async function getTodoList(owner) {
    let response = JSON.parse(localStorage.getItem(owner));
    if (response) {
        todoArray = response;
        return response;
    }
    response = [];
};

export async function createTodoItem({ owner, name }) {
    todoArray.push({ owner, name, done: false, id: todoArray.length + 1 });
    localStorage.setItem(owner, JSON.stringify(todoArray));
    location.reload();
};

export function switchTodoItemDone({ todoItem }) {
    todoItem.done = !todoItem.done;
    localStorage.setItem(todoItem.owner, JSON.stringify(todoArray));
};

export function deleteTodoItem({ element, todoItem }) {
    if (!confirm('Вы уверены?')) {
        return;
    };
    element.remove();

    for (let i = 0; i < todoArray.length; i++) {
        if (todoArray[i].id === todoItem.id) {
            todoArray.splice(i, 1)
        }
    };

    localStorage.setItem(todoItem.owner, JSON.stringify(todoArray));
};
