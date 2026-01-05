const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error-message');
const productList = document.getElementById('product-list');

loader.style.display = 'block';

fetch('/api/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayProducts(data);
        loader.style.display = 'none';
    })
    .catch(error => {
        handleFetchError();
        loader.style.display = 'none';
    });

function displayProducts(data) {
    if (data.length === 0) {
        const emptyListHeader = document.createElement('h2');
        emptyListHeader.textContent = 'Список товаров пуст';
        productList.appendChild(emptyListHeader);
    } else {
        data.forEach(product => {
            const productItem = document.createElement('li');
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            const productName = document.createElement('p');
            productName.textContent = product.name;
            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;
            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productList.appendChild(productItem);
        });
    }
}

function handleFetchError() {
    fetch('/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            errorMessage.textContent = 'Произошла ошибка, попробуйте обновить страницу позже';
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        });
}
