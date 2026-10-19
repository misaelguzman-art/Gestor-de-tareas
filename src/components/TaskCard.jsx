import { useState } from "react"

function TaskCard({
  nombre_materia,
  docente,
  fecha,
  estado,
  descripcion
}) {
  // ESTABLECER LOS USESTATES PARA TODOS LOS PROPS QUE SE RECIBEN
  const [materia] = useState(nombre_materia)
  const [profesor] = useState(docente)
  const [fechaEntrega] = useState(fecha)
  const [estadoActual, setEstadoActual] = useState(estado)
  const [detalle] = useState(descripcion || "Sin descripción adicional.")

  // ESTABLECER UNA UNICA FUNCION PARA VALIDAR Y CAMBIAR LOS ESTADOS UTILIZANDO:
  // SWITCH/CASE
  // Estados a trabajar: Pendiente, En progreso, En pausa y Completado
  function cambiarEstado(nuevoEstado) {
    switch (nuevoEstado) {
      case "Pendiente":
        setEstadoActual("Pendiente")
        break
      case "En progreso":
        setEstadoActual("En progreso")
        break
      case "En pausa":
        setEstadoActual("En pausa")
        break
      case "Completado":
        setEstadoActual("Completado")
        break
      default:
        console.warn(`Estado desconocido: ${nuevoEstado}`)
        break
    }
  }

  // Estilos de badge según el estado
  const getBadgeClass = () => {
    switch (estadoActual) {
      case "Completado":
        return "bg-emerald-100 text-emerald-800 border-emerald-300"
      case "En progreso":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "En pausa":
        return "bg-amber-100 text-amber-800 border-amber-300"
      case "Pendiente":
      default:
        return "bg-rose-100 text-rose-800 border-rose-300"
    }
  }

  return (
    <div className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-gray-800 leading-snug">{materia}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold whitespace-nowrap ${getBadgeClass()}`}>
            {estadoActual}
          </span>
        </div>

        <p className="text-sm font-medium text-indigo-700 mb-2">
          Docente: <span className="font-normal text-gray-700">{profesor}</span>
        </p>

        {/* AGREGAR LA INFORMACION DE LA TAREA CON SU DESCRIPCION */}
        <p className="text-sm text-gray-600 mb-4 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
          {detalle}
        </p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Entrega: <strong className="text-gray-700">{fechaEntrega}</strong></span>
        </div>

        {/* Selector y botones para cambiar estado con la función de switch/case */}
        <div className="flex items-center gap-2">
          <select
            value={estadoActual}
            onChange={(e) => cambiarEstado(e.target.value)}
            className="text-xs border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En progreso">En progreso</option>
            <option value="En pausa">En pausa</option>
            <option value="Completado">Completado</option>
          </select>

          {estadoActual !== "Completado" ? (
            <button
              className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-2.5 py-1 text-xs transition-colors cursor-pointer"
              onClick={() => cambiarEstado("Completado")}
            >
              Completar
            </button>
          ) : (
            <button
              className="rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-2.5 py-1 text-xs transition-colors cursor-pointer"
              onClick={() => cambiarEstado("Pendiente")}
            >
              Pendiente
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskCard