import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskCard from './components/TaskCard'
import Footer from './components/Footer'
import FilterBar from './components/FilterBar'

//datos
import { tasks } from './data/tasks'

function App() {
  //SE DEBE CREAR UN COMPONENTE UTILIZANDO TAILWIND PARA LOS ESTILOS, QUE ME SIRVA COMO FILTRO
  //SE DEBE FILTRAR LOS TASKS POR: NOMBRE DOCENTE, MATERIA, ESTADO
  //EL COMPONENTE SE DEBE CREAR Y GUARDAR DENTRO DE LA CARPETA COMPONENTS
  //IMPORTAR LA LISTA DE TAREAS DENTRO DE ESE COMPONENTE PARA HACER LOS FILTROS
  //EL COMPONENTE SE DEBE IMPORTAR EN EL ARCHIVO DE APP.JSX

  const [tareasFiltradas, setTareasFiltradas] = useState(tasks)

  return (
    <>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-between'>
        <div>
          <Header />
          <main className='max-w-4xl mx-auto px-6 py-8'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6'>Mis tareas</h2>

            {/* Componente Filtro */}
            <FilterBar onFilter={setTareasFiltradas} />

            {/* Listado de tareas */}
            {tareasFiltradas.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                {
                  tareasFiltradas.map(task => (
                    //SPREAD OPERATOR
                    <TaskCard
                      key={task.id}
                      {...task}
                    />
                  ))
                }
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center text-gray-500 border border-gray-200">
                <p className="text-base font-semibold text-gray-700">No se encontraron tareas</p>
                <p className="text-sm text-gray-500 mt-1">No hay tareas que coincidan con los filtros seleccionados.</p>
              </div>
            )}
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
