export default function Lista({ itens }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {itens.map((item, index) => (
        <li key={`${item}-${index}`} className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-800">
          {item}
        </li>
      ))}
    </ul>
  )
}