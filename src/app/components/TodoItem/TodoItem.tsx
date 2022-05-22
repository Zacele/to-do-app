import React from 'react'
import { TTodo } from '../../../types/todo'
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../../features/api/toDoApiSlice'

interface ITodoItem {
  todo: TTodo
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const onToggle = React.useCallback(
    (todoItem: TTodo) => {
      updateTodo({ ...todo, done: !todo.done })
    },
    [todo, updateTodo]
  )

  const onDelete = React.useCallback(
    (todoItem: TTodo) => {
      deleteTodo({ ...todo, done: !todo.done })
    },
    [deleteTodo, todo]
  )

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default TodoItem
