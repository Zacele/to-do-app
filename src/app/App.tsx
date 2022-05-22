import { useGetAllQuery } from '../features/api/toDoApiSlice'
import { TTodo } from '../types/todo'
import InputField from './components/InputField'
import TodoItem from './components/TodoItem'
import Loading from './components/Loading'

function App(): JSX.Element {
  const { data: todos, error, isLoading } = useGetAllQuery()

  if (error) {
    return (
      <div className="container mx-auto">
        <div className="shadow-lg alert alert-error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Uh Oh! Something when wrong.</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="w-full p-6 bg-transparent rounded">
        <div className="mb-4">
          <h1 className="italic font-bold">Todo List</h1>
          <InputField isLoading={isLoading} />
        </div>
        <div className="mt-6">
          {isLoading && <Loading />}
          {todos?.map((todo: TTodo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
