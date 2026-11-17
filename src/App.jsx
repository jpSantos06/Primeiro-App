import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Lista from './components/Lista'
import Button from './components/Button'
import Badge from './components/Badge'
import Input from './components/Input'
import Alert from './components/Alert'
import { useState } from 'react'

const tecnologias = ['Tailwind CSS', 'Componentes reutilizáveis', 'Props', 'React']

export default function App() {
  const [nome, setNome] = useState('')

  return (
    <>
      <Header titulo="Biblioteca de componentes UI" />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <section className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">React + Tailwind CSS</p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Componentes flexíveis para construir interfaces</h2>
          <p className="leading-7 text-slate-600">Uma pequena biblioteca de interface. Cada componente recebe props para alterar conteúdo e aparência, mantendo o código organizado e reutilizável.</p>
        </section>

        <section className="mb-12 grid gap-5 md:grid-cols-3" aria-label="Exemplos de cards">
          <Card titulo="Componentização" descricao="Peças independentes que podem ser reutilizadas em diferentes telas." numero="01" />
          <Card titulo="Variações por props" descricao="As propriedades controlam estilos e conteúdos sem duplicar componentes." numero="02" />
          <Card titulo="Tailwind CSS" descricao="Classes utilitárias ajudam a estilizar diretamente no JSX." numero="03" />
        </section>

        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-bold text-slate-900">Button e Badge</h2>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="primary" disabled>Desabilitado</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Ativo</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Badge variant="error">Erro</Badge>
            <Badge variant="info">Informação</Badge>
          </div>
        </section>

        <section className="mb-12 grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-xl font-bold text-slate-900">Input com props</h2>
            <Input label="Seu nome" placeholder="Digite seu nome" value={nome} onChange={(event) => setNome(event.target.value)} helperText="O componente recebe label, placeholder e eventos por props." />
            {nome && <p className="mt-3 text-sm text-slate-600">Olá, <strong>{nome}</strong>!</p>}
          </div>
          <div>
            <h2 className="mb-5 text-xl font-bold text-slate-900">Alert com variantes</h2>
            <div className="space-y-3">
              <Alert variant="success" title="Tudo certo">Seus dados foram salvos com sucesso.</Alert>
              <Alert variant="warning" title="Atenção">Confira as informações antes de continuar.</Alert>
              <Alert variant="error" title="Ocorreu um erro">Não foi possível concluir a operação.</Alert>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-slate-900">Tecnologias utilizadas</h2>
          <Lista itens={tecnologias} />
        </section>
      </main>
      <Footer texto="Biblioteca UI desenvolvida como atividade prática de React e Tailwind CSS." />
    </>
  )
}