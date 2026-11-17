export default function Card({ titulo, descricao, numero }) {
  return (
    <article className="card">
      <span className="card-number">{numero}</span>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </article>
  )
}