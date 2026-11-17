export default function Card({ titulo, descricao, numero }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <span className="text-sm font-extrabold tracking-widest text-violet-600">{numero}</span>
      <h3 className="mb-2 mt-5 text-lg font-bold text-slate-900">{titulo}</h3>
      <p className="text-sm leading-6 text-slate-600">{descricao}</p>
    </article>
  )
}