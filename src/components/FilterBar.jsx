import { useState, useEffect } from 'react'
// IMPORTAR LA LISTA DE TAREAS DENTRO DE ESE COMPONENTE PARA HACER LOS FILTROS
import { tasks } from '../data/tasks'

function FilterBar({ onFilter, onFilterChange }) {
  // Un mismo estado para el input que busca tanto por docente como por materia
  const [busqueda, setBusqueda] = useState('')
  // Estado para el elemento Select de los estados
  const [estado, setEstado] = useState('')

  const estados = ['Pendiente', 'En progreso', 'En pausa', 'Completado']

  useEffect(() => {
    // SE DEBE FILTRAR LOS TASKS POR: NOMBRE DOCENTE, MATERIA, ESTADO
    // ACLARACION: Para filtrar por nombre de materia y nombre de docente se debe hacer a traves de un mismo input,
    // y se debe utilizar un elemento de tipo Select para filtrar los estados.
    const termino = busqueda.trim().toLowerCase()

    const tareasFiltradas = tasks.filter(task => {
      const coincideMateriaODocente =
        termino === '' ||
        task.nombre_materia.toLowerCase().includes(termino) ||
        task.docente.toLowerCase().includes(termino)

      const coincideEstado = estado === '' || task.estado === estado

      return coincideMateriaODocente && coincideEstado
    })

    const callback = onFilter || onFilterChange
    if (callback) {
      callback(tareasFiltradas)
    }
  }, [busqueda, estado, onFilter, onFilterChange])

  const handleReset = () => {
    setBusqueda('')
    setEstado('')
  }

  const hayFiltrosActivos = busqueda !== '' || estado !== ''

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <h3 className="font-bold text-gray-800 text-base">Filtros de Tareas</h3>
        </div>
        {hayFiltrosActivos && (
          <button
            onClick={handleReset}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline self-start sm:self-auto cursor-pointer"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* UN MISMO INPUT PARA DOCENTE Y MATERIA */}
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            Buscar por Materia o Docente
          </label>
          <div className="relative">
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Ej: IHC, Calculo, Bryana Ojopi, Juan..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* SELECT PARA FILTRAR LOS ESTADOS */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
            Estado
          </label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer"
          >
            <option value="">Todos los estados</option>
            {estados.map((est, idx) => (
              <option key={idx} value={est}>{est}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
