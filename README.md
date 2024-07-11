# Challenge: Alura Geek

Este repositório contém o projeto Alura Geek, desenvolvido como parte de um desafio da ALura no Projeto ONE. O projeto inclui funcionalidades para listar, adicionar e excluir produtos, além de um formulário para adicionar novos produtos. Além de introduzir a usabilidade de servidores locais, utilizando NODE.

## Estrutura do Projeto

O projeto é estruturado com os seguintes arquivos principais:

- `index.html`: Contém a estrutura HTML do projeto, incluindo cabeçalho, seções de produtos e formulário de adição.
- `css/styles.css`: Arquivo CSS que estiliza todos os elementos do projeto, incluindo cores, fontes e layout.
- `js/api.js`: Módulo JavaScript que contém funções para interagir com uma API fictícia de produtos.
- `js/products.js`: Módulo JavaScript que lida com a exibição e manipulação da lista de produtos.
- `js/form.js`: Módulo JavaScript que valida e envia dados do formulário de adição de produtos.
- `js/clearForm.js`: Módulo JavaScript que limpa o formulário de adição de produtos.

## Tecnologias Utilizadas

- HTML5
- CSS3 (incluindo variáveis CSS e media queries para responsividade)
- JavaScript (ES6+)

## Recursos e Funcionalidades

### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="shortcut icon" href="./assets/game.png" type="image/x-icon">
    <title>Challenge: Alura Geek</title>
</head>
<body>
    <!-- Estrutura HTML do cabeçalho, seções de produtos, formulário e rodapé -->
</body>
</html>
```
### CSS (`./css/styles.css`)

```css
/* Estilos CSS para o projeto Alura Geek */
/* Inclui variáveis CSS para cores e estilos específicos */

:root {
    --cor-base: #5300C8;
    --cor-titulo: #E5E5E5;
    --cor-card: #5D04D9;
    --cor-formulario: #03318C;
}

/* Estilos para cabeçalho, seções, formulário, botões, rodapé, etc. */
/* Exemplo de seletor: .produto__card, .submit__btn, .form__input */

/* Media queries para responsividade em diferentes tamanhos de tela */
@media screen and (min-width: 668px) {
    /* Estilos para tablet */
}

@media screen and (min-width: 1024px) {
    /* Estilos para desktop */
}
```

### JavaScript (`./js`)

## Funcionalidades JavaScript

### Funções de API (`js/api.js`)

- **listProducts()**: Obtém a lista de produtos da API.
- **addProduct(product)**: Adiciona um novo produto à API.
- **deleteProduct(productId)**: Deleta um produto da API.

### Manipulação de Produtos (`js/products.js`)

- **displayProducts()**: Exibe a lista de produtos na página.

### Formulário (`js/form.js`)

- Validação de dados do formulário antes de enviar.
- Submissão dos dados para adicionar um novo produto.

### Limpar Formulário (`js/clearForm.js`)

- Limpa os campos do formulário de adição de produtos.

## Autor

- Desenvolvido por Vanderson A Santos
- ALURA LATAM - 2024



