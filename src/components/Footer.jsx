function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6 text-center text-sm text-gray-500 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>Proyecto a cargo de <span className="font-semibold text-gray-700">Bryana Ojopi</span></p>
        <p className="text-gray-400">Gestor de Tareas Académicas &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer