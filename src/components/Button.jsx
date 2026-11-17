const variants = {
  primary: 'bg-violet-600 text-white hover:bg-violet-700 focus-visible:ring-violet-500',
  secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  outline: 'border border-violet-600 text-violet-700 hover:bg-violet-50 focus-visible:ring-violet-500',
}

export default function Button({ children, variant = 'primary', size = 'md', disabled = false, type = 'button', onClick }) {
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md}`}
    >
      {children}
    </button>
  )
}