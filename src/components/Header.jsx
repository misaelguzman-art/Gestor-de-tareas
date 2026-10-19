function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 text-white py-8 px-6 shadow-md">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
            Plataforma Universitaria
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Gestor de Tareas y Actividades</h1>
          <p className="text-indigo-100 text-sm mt-1">Organiza tus tareas académicas de forma eficiente</p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Semestre Académico 2026</span>
        </div>
      </div>
    </header>
  )
}

export default Header