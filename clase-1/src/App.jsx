import './App.css'
import { API_URL, NUMBER_OF_TODOS } from './config'
import { useQuery } from 'react-query'

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchTodos = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  data.splice(NUMBER_OF_TODOS)
  return data
}

function App() {
  const { data: todos, isLoading, error } = useQuery('todos', fetchTodos)

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-8 gap-12">
      <h1 className="font-bold text-3xl">Tutorial React Nivel Medio</h1>

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
      {todos && (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {todos.map((todo) => (
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
