export default function Lista({ itens }) {
  return (
    <ul className="lista">
      {itens.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}