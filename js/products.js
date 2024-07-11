import { listProducts, deleteProduct } from './api.js';

const productsContainer = document.querySelector('[data-products]');

function createProductElement({ id, nome, preco, imagem }) {
    const card = document.createElement('ul');
    card.className = 'produto__card';
    card.innerHTML = `
        <div class="produto__card__top">
            <li class="product__img"><img src="${imagem}" alt="${nome}"></li>
            <li class="product__name">${nome}</li>
        </div>
        <div class="produto__card__bottom">
            <li class="product__price">R$ ${preco}</li>
            <li><button class="produto__card__delete" data-id="${id}"><img src="./assets/lixeira.svg" alt="icone de lixeira"></button></li>
        </div>`
    ;
    return card;
}

async function displayProducts() {
    try {
        const products = await listProducts();
        productsContainer.innerHTML = '';
        if (products.length > 0) {
            products.forEach(product => {
                const productElement = createProductElement(product);
                productsContainer.appendChild(productElement);
            });
            document.querySelectorAll('.produto__card__delete').forEach(button => {
                button.addEventListener('click', async () => {
                    await deleteProduct(button.dataset.id);
                    displayProducts();
                });
            });
        } else {
            productsContainer.innerHTML = '<h1 class="__produto">SEM PRODUTOS PARA SEREM MOSTRADOS!!! UTILIZE O MENU PARA CADASTRO.</h1>';
        }
    } catch (error) {
        productsContainer.innerHTML = '<h1 class="__produto">NÃO FOI POSSÍVEL CARREGAR OS PRODUTOS</h1>';
        console.error('Erro ao listar produtos:', error);
    }
}

displayProducts();