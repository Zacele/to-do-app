import { useCallback, useRef, useState } from 'react'
import {
  useGetAllQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} from '../features/api/toDoApiSlice'
import { TTodo } from '../types/todo'

function App(): JSX.Element {
  const { data: todos, error, isLoading } = useGetAllQuery()
  const [inputString, setInputString] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const [createTodo] = useCreateTodoMutation()

  const onCreateTodo = useCallback(() => {
    createTodo(inputString)
    setInputString('')
  }, [createTodo, inputString])

  const onToggle = useCallback(
    (todo: TTodo) => {
      updateTodo({ ...todo, done: !todo.done })
    },
    [updateTodo]
  )

  const onDelete = useCallback(
    (todo: TTodo) => {
      deleteTodo({ ...todo, done: !todo.done })
    },
    [deleteTodo]
  )

  return (
    <div className="w-full p-6 m-4 bg-white rounded shadow">
      <div className="mb-4">
        <h1 className="italic font-bold">Todo List</h1>
        <div className="flex justify-between mt-4">
          <input
            className="w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker"
            placeholder="Add Todo"
            maxLength={50}
            onChange={(e) => setInputString(e.target.value)}
          />
          <button
            className="text-white btn btn-info"
            disabled={!inputString}
            onClick={() => onCreateTodo()}
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-10">
        {todos?.map((todo: TTodo) => (
          <div className="flex items-center mb-4" key={todo.id}>
            <input
              type="checkbox"
              className="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo)}
            />
            <p
              className={`w-full ml-4 text-grey-darkest ${
                todo.done ? 'line-through' : 'no-underline'
              }`}
            >
              {todo.text}
            </p>
            <button
              className="btn btn-sm btn-outline btn-error"
              onClick={() => onDelete(todo)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
