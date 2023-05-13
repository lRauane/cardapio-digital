<h1 align="center">
      <a href="#" alt=""> Menu Smart - Cardápio digital</a>
</h1>

<h3 align="center">
    🥣 App web de cardápio para restaurante que permite fazer pedidos, escolher comida por categoria, pesquisar e adicionar no carrinho.🍽️
</h3>

<h4 align="center">
	Concluído 🚀
</h4>

Tabela de conteúdos
=================

   * [Sobre o projeto](#sobre-o-projeto)
   * [Funcionalidades](#funcionalidades)
   * [Layout](#layout)
     * [Web](#layout-web)
   * [Como executar o projeto](#como-executar-o-projeto)
     * [Pré-requisitos](#pre-requisitos)
     * [Rodando a fake API](#rodando-o-backend)
     * [Rodando a aplicação web (Frontend)](#rodando-a-aplicacao-web-frontend)
   * [Tecnologias](#tecnologias)
     * [Website](#tecnologias-website)
     * [Utilitários](#utilitarios)
   * [Como contribuir no projeto](#como-contribuir)
   * [Autor](#autor)
   * [Licença](#licenca)



## 💻 Sobre o projeto <a name="sobre-o-projeto"></a>

🥣 O Menu Smart é um app de cardápio para restaurante com interface para web que permite o cliente ver produtos disponíveis, navegar entre as categorias, adicionar no carrinho e calcular os preços da sua escolha.

---

## ⚙️ Funcionalidades <a name="funcionalidades"></a>

  - [x] Adicionar no carrinho
  - [x] Calcular preços
  - [x] Listar os pratos de comida e categorias
  - [x] Filtrar pratos de comida por busca ou por categorias
  - [x] Listar seus pratos favoritos
  - [x] Realizar um pedido

---

## 🎨 Layout <a name="layout"></a>

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/yV8dAOolXTgZPv3eZpIhng/Trabalho-faculdade?type=design&t=WZR5vtOxSAe0t6az-0">
  <img alt="Layout web no Figma" src="https://img.shields.io/badge/Acessar%20Web%20-Figma-%2304D361">
</a>


### Web <a name="layout-web"></a>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Screenshot web 1" src="https://github.com/lRauane/cardapio-digital/assets/102835801/d335c5c2-294f-441f-9f24-7229007bd345">
</p>


---

## 🚀 Como executar o projeto <a name="como-executar-o-projeto"></a>

💡 O frontend utilizam uma fake API que roda na porta 3333

### Pré-requisitos <a name="pre-requisitos"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando a fake API <a name="rodando-o-backend"></a>

```bash

# Clone este repositório
$ git clone https://github.com/lRauane/cardapio-digital.git

# Instale as dependências
$ npm install

# Execute o script da fake API
$ json-server --watch db.json

# O servidor inciará na porta:3000 - acesse http://localhost:3000 

```


#### 🧭 Rodando a aplicação web (Frontend) <a name="rodando-a-aplicacao-web-frontend"></a>

```bash

# Clone este repositório
$ git clone https://github.com/lRauane/cardapio-digital.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```

## 🛠 Tecnologias <a name="tecnologias"></a>

As seguintes ferramentas foram usadas na construção do projeto:

-   **[EditorConfig](https://editorconfig.org/)**
-   **[ESLint](https://eslint.org/)**
-   **[Prettier](https://prettier.io/)**
-   **[json-server](https://github.com/typicode/json-server)**
-   **[axios](https://axios-http.com/ptbr/docs/intro)**

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/)) <a name="tecnologias-website"></a>

-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Radix UI](https://www.radix-ui.com/)**
-   **[Toastify](https://www.npmjs.com/package/react-toastify)**
-   **[TailwindCSS](https://tailwindcss.com/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/lRauane/cardapio-digital/blob/main/package.json)


#### **Utilitários** <a name="utilitarios"></a>

-   Protótipo:  **[Figma](https://www.figma.com/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Fontes:  **[Poppins](https://fonts.google.com/specimen/Poppins)**


---

## 💪 Como contribuir no projeto <a name="como-contribuir"></a>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor <a name="autor"></a>

<a href="https://github.com/lRauane">
 <br />
 <sub><b>Rauane Lima</b></sub></a>
 <br />

[linkedln](https://www.linkedin.com/in/rauanee/)

---

## 📝 Licença <a name="licenca"></a>

Este projeto esta sob a licença [MIT](./LICENSE).

Feito com ❤️ por Rauane Lima 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rauanee/)
