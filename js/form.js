import { addProduct } from './api.js';

const form = document.querySelector('[data-form]');
const nameInput = document.querySelector('[data-form-name]');
const priceInput = document.querySelector('[data-form-price]');
const imageInput = document.querySelector('[data-form-image]');
const submitButton = document.querySelector('.submit__btn');
const message = document.querySelector('.message');

// Função para formatar o valor como moeda brasileira
function formatCurrency(value) {
    const numberValue = parseInt(value.replace(/\D/g, '')) / 100;
    return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Evento para atualizar o campo de preço com a formatação correta
priceInput.addEventListener('input', () => {
    let value = priceInput.value.replace(/\D/g, '');
    if (value) {
        value = (parseInt(value) / 100).toFixed(2);
    } else {
        value = '0.00';
    }
    priceInput.value = formatCurrency(value);
    validateForm();
});

// Função para validar o formulário antes de enviar
function validateForm() {
    const isValid = nameInput.value.trim() && priceInput.value.trim() && imageInput.value.trim();
    message.textContent = isValid ? '' : 'Preencha todos os campos antes de enviar o formulário!';
}

// Evento para enviar o formulário
form.addEventListener('submit', async event => {
    event.preventDefault();
    if (nameInput.value.trim() && priceInput.value.trim() && imageInput.value.trim()) {
        const name = nameInput.value;
        const price = parseFloat(priceInput.value.replace(/[^\d,-]/g, '').replace(',', '.')).toFixed(2);
        const image = imageInput.value;
        await addProduct({ nome: name, preco: price, imagem: image });
        message.textContent = 'Produto adicionado com sucesso!';
        form.reset(); 
        
    } else {
        message.textContent = 'Preencha todos os campos antes de enviar o formulário.';
    }
});


form.addEventListener('input', validateForm);
