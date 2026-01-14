export function deleteClient() {
    const deleteModal = document.createElement('div');
    const closeModal = document.createElement('button');
    const deleteH2 = document.createElement('h2');
    const deleteP = document.createElement('p');
    const deleteModalDark = document.createElement('div');
    const deleteButton = document.createElement('button');
    const cancellationdeleteButton = document.createElement('button');


    deleteModal.classList.add('modal__content', 'modal-active', 'modal-delete');
    closeModal.classList.add('popup__close');
    deleteH2.classList.add('delete__h2');
    deleteP.classList.add('delete__p');
    deleteModalDark.classList.add('modal', 'modal-active');
    deleteButton.classList.add('btn-violet');
    cancellationdeleteButton.classList.add('btn-cancel');


    deleteH2.textContent = 'Удалить клиента';
    deleteP.textContent = 'Вы действительно хотите удалить данного клиента?';
    deleteButton.textContent = 'Удалить';
    cancellationdeleteButton.textContent = 'Отмена';

    deleteModal.append(closeModal, deleteH2, deleteP, deleteButton, cancellationdeleteButton);
    deleteModalDark.append(deleteModal);

    document.addEventListener('click', (event) => {
        const target = event.target;

        if (target === deleteModalDark || target.closest('.popup__close') || target === cancellationdeleteButton) {
            deleteModalDark.remove();
        };
    });


    return {
        deleteModalDark,
        deleteButton,
        cancellationdeleteButton,
    };

}
