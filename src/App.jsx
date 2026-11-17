import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Lista from './components/Lista'
import './App.css'

const tecnologias = ['JSX', 'Componentes funcionais', 'Props', 'Virtual DOM']

export default function App() {
  return (
    <>
      <Header titulo="Minha primeira aplicação React" />
      <main className="container">
        <section className="intro">
          <p className="eyebrow">Aprendendo React + Vite</p>
          <h2>Componentes que podem ser reutilizados</h2>
          <p>
            Este projeto demonstra como dividir uma interface em pequenas partes,
            compartilhar informações por props e renderizar listas com segurança.
          </p>
        </section>

        <section className="cards" aria-label="Conceitos do React">
          <Card
            titulo="Componentização"
            descricao="A interface é dividida em componentes independentes e reutilizáveis."
            numero="01"
          />
          <Card
            titulo="Propriedades (props)"
            descricao="Os componentes recebem dados do componente pai para personalizar seu conteúdo."
            numero="02"
          />
          <Card
            titulo="Renderização de listas"
            descricao="O método map transforma cada elemento de um array em um item da interface."
            numero="03"
          />
        </section>

        <section className="lista-section">
          <h2>O que estou estudando</h2>
          <Lista itens={tecnologias} />
        </section>
      </main>
      <Footer texto="Desenvolvido como atividade introdutória de React." />
    </>
  )
}