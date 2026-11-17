# Primeiro App React — Biblioteca UI com Tailwind CSS

Projeto desenvolvido com React + Vite para praticar a criação de componentes reutilizáveis e estilizados com Tailwind CSS.

## Tecnologias
- React 19
- Vite
- Tailwind CSS 3
- PostCSS e Autoprefixer
- JavaScript (JSX)

## Instalação e execução

Tenha Node.js e npm instalados. Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local para abrir no navegador (normalmente `http://localhost:5173`).

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Configuração do Tailwind

O arquivo `tailwind.config.js` contém a configuração de varredura:

```js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```

Assim, o Tailwind identifica as classes utilizadas nos arquivos da pasta `src`. O arquivo `postcss.config.js` habilita Tailwind e Autoprefixer. As diretivas `@tailwind base`, `@tailwind components` e `@tailwind utilities` estão em `src/index.css`, importado por `src/main.jsx`.

## Componentes da biblioteca

- **Button:** aceita `variant` (`primary`, `secondary`, `danger`, `outline`), `size`, `disabled`, `type` e `onClick`.
- **Badge:** aceita `variant` (`success`, `warning`, `error`, `info`, `neutral`).
- **Input:** aceita propriedades como `label`, `type`, `placeholder`, `value`, `onChange`, `helperText` e `error`.
- **Card:** refatorado para utilizar classes utilitárias do Tailwind.
- **Alert:** aceita `variant` (`success`, `error` ou `warning`), `title` e conteúdo via children.
- **Header**, **Footer** e **Lista:** componentes anteriores mantidos e adaptados ao Tailwind.

As classes para variações visuais são definidas em mapas de classes completos (por exemplo, `variants`) em vez de montar nomes de classes dinamicamente. Isso permite que o Tailwind detecte as classes durante a compilação.

## Estrutura principal

```text
Primeiro-App/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Footer.jsx
        ├── Card.jsx
        ├── Lista.jsx
        ├── Button.jsx
        ├── Badge.jsx
        ├── Input.jsx
        └── Alert.jsx
```

## Reflexão: vantagens e desvantagens do Tailwind CSS

Uma das principais vantagens do Tailwind CSS é permitir que a estilização seja feita diretamente no JSX por meio de classes utilitárias. Isso agiliza a criação de interfaces, facilita a padronização visual e reduz a necessidade de manter muitos arquivos CSS separados. Também torna simples criar variações de componentes usando props, pois podemos selecionar conjuntos de classes para cada variante.

Como desvantagens, o JSX pode ficar com muitas classes e parecer mais difícil de ler quando os componentes são grandes. A equipe também precisa aprender a lógica das classes utilitárias e manter padrões para evitar repetição. Além disso, estilos muito específicos ou complexos podem exigir configuração adicional ou CSS tradicional. Portanto, Tailwind oferece velocidade e consistência, mas precisa de organização para que os componentes continuem claros e reutilizáveis.

## Objetivo

Dominar a estilização com Tailwind CSS e compreender como criar componentes React flexíveis, reutilizáveis e configuráveis por props.
