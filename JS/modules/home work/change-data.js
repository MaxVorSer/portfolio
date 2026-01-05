let isLocalStorage = JSON.parse(localStorage.getItem("isLocalStorage"));

if (isLocalStorage === null) {
  isLocalStorage = localStorage.setItem('isLocalStorage', true);
  isLocalStorage = JSON.parse(localStorage.isLocalStorage) === true;
}

const btnChangeData = document.querySelector('.change-storage');

const onClickChangeBtn = () => {
  isLocalStorage = !isLocalStorage;
  localStorage.setItem('isLocalStorage', isLocalStorage);
  location.reload();
};

btnChangeData.addEventListener('click', onClickChangeBtn);

export { isLocalStorage, onClickChangeBtn, btnChangeData }
