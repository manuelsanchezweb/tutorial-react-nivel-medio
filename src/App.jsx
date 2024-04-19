'use client'

import { useState, useEffect } from 'react'
import './App.css'
import { API_URL, NUMBER_OF_TODOS } from './config'
import { useQuery } from 'react-query'
import WindowChecker from './components/window-checker'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchTodos = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  data.splice(NUMBER_OF_TODOS)
  return data
}

function App() {
  const { data: originalData, isLoading, error } = useQuery('todos', fetchTodos)

  const [data, setData] = useState([])
  const [sortByTitle, setSortByTitle] = useState(false)

  // 3 variables para los todos
  // 1. originalData: los datos originales, sin modificar
  // 2. data: los datos que se van a mostrar en la UI al final
  // 3. sortedData: los datos ordenados tras title, tras fecha, etc. Esta es la que modificamos cuando los filtros son acumulativos

  useEffect(() => {
    if (!originalData) return

    let sortedData = [...originalData]

    if (sortByTitle) {
      sortedData.sort((a, b) => a.title.localeCompare(b.title))
    }

    setData(sortedData)
  }, [originalData, sortByTitle])

  const toggleSortByTitle = () => {
    setSortByTitle(!sortByTitle)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 gap-12">
      {/* <IconManager icon="react" classCustom="h-12" />
      <IconManager icon="angular" classCustom="h-12" />
      <IconManager icon="vue" classCustom="h-12" /> */}

      <WindowChecker />

      <h1 className="font-bold text-3xl">Tutorial React Nivel Medio</h1>

      <div className="flex gap-4 items-center">
        <button
          className={`border border-black hover:bg-gray-200 focus:bg-gray-200 py-2 px-4 ${
            sortByTitle ? 'bg-gray-400' : ''
          }`}
          onClick={() => toggleSortByTitle()}
        >
          Sort by title
        </button>
      </div>

      {error && <h2 className="text-2xl">Error: {error.message}</h2>}
      {isLoading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
          {Array.from({ length: NUMBER_OF_TODOS }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-200 h-[30px] w-full rounded-md"
            ></div>
          ))}
        </div>
      )}
      {data && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {data.map((todo) => (
            <li
              className="flex flex-col border border-1 border-black py-2 px-3"
              key={todo.id}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
