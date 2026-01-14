(function() {

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.disabled = true;

        input.addEventListener('input', () => {
            button.disabled = !input.value;
        })



        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');

        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
        }
    }

    function createTodoApp(container, title = 'Список дел', affairs) {

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let storage = [];

        console.log(localStorage);

        if (localStorage.getItem(title)) {
            storage = JSON.parse(localStorage.getItem(title));
        }



        const addTodo = function(todo, todoItem) {
            if (todo.done) {
                todoItem.item.classList.toggle('list-group-item-success');
            }

            todoItem.doneButton.addEventListener('click', function() {
                todo.done = !todo.done;
                todoItem.item.classList.toggle('list-group-item-success');
                localStorage.setItem(title, JSON.stringify(storage));
            });

            todoItem.deleteButton.addEventListener('click', function() {
                localStorage.removeItem(title);
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    let id = storage.findIndex(function(item) {
                        return item === todo;
                    });
                    storage.splice(id, 1);
                }
                localStorage.setItem(title, JSON.stringify(storage));

            });

            todoList.append(todoItem.item);
        }

        storage.forEach(todo => {
            let todoItem = createTodoItem(todo.name);
            addTodo(todo, todoItem);

        });


        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        function renderCard(name) {
            let todoItem = createTodoItem(name);

            const todo = {
                name,
                done: false
            };

            storage.push(todo);
            localStorage.setItem(title, JSON.stringify(storage));
            addTodo(todo, todoItem);


            //todoList.append(createTodoItem(todoItemForm.input.value).item);

            storage.forEach(function(todo) {
                let todoItem = createTodoItem(todo.name);


            });
        }




        todoItemForm.form.addEventListener('submit', function(e) {

            e.preventDefault();

            if (!todoItemForm.input.value) {
                return;
            }

            renderCard(todoItemForm.input.value);
            todoItemForm.input.value = '';





        });

    }


    window.createTodoApp = createTodoApp;
})();
