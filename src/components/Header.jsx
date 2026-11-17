export default function Header({ titulo }) {
  return (
    <header className="bg-slate-950 px-5 py-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4">
        <span className="text-2xl font-extrabold tracking-tight">UI<span className="text-violet-400">.</span></span>
        <h1 className="border-l border-slate-700 pl-4 text-sm font-semibold sm:text-base">{titulo}</h1>
      </div>
    </header>
  )
}