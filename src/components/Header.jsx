export default function Header({ titulo }) {
  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">React<span>.</span></span>
        <h1>{titulo}</h1>
      </div>
    </header>
  )
}