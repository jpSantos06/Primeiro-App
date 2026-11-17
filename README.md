# Primeiro App React

Primeira aplicação React desenvolvida com Vite para praticar JSX, componentização, props e renderização de listas.

## Tecnologias
- React
- Vite
- JavaScript (JSX)
- CSS

## Estrutura do projeto

```text
Primeiro-App/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Footer.jsx
        ├── Card.jsx
        └── Lista.jsx
```

## Componentes
- **Header:** recebe o título por props e apresenta o cabeçalho.
- **Footer:** recebe por props o texto do rodapé.
- **Card:** recebe título, descrição e número por props.
- **Lista:** recebe um array de strings pela prop `itens` e utiliza `.map()` para criar os elementos `<li>`, cada um com uma `key` única.
- **App:** importa e organiza os componentes. Utiliza Fragment (`<>`) para agrupar os elementos sem criar uma tag extra no DOM.

## Como executar localmente

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Reflexão: abordagem imperativa e declarativa

Na abordagem imperativa, usada no JavaScript puro, o desenvolvedor descreve passo a passo como a interface deve ser modificada, selecionando elementos do DOM e alterando seu conteúdo, atributos ou estilos manualmente. Já na abordagem declarativa do React, o desenvolvedor descreve como a interface deve aparecer de acordo com os dados e estados atuais. Quando esses dados mudam, o React atualiza a interface para refletir o novo resultado, reduzindo a necessidade de manipular o DOM diretamente.

O Virtual DOM é uma representação leve da estrutura da interface. Quando ocorre uma atualização, o React compara a nova representação com a anterior (processo conhecido como reconciliação) e calcula quais mudanças são necessárias no DOM real. Assim, evita alterações manuais e desnecessárias em toda a página, aplicando apenas as atualizações pertinentes. Isso pode melhorar a eficiência e tornar a manutenção da interface mais simples.

## Objetivo da atividade

Compreender os fundamentos do React, a sintaxe JSX, a reutilização de componentes funcionais, a passagem de dados por props e a renderização de listas com `.map()`.
