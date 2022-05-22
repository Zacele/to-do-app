/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react'
import { TTodo } from '../../../types/todo'
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from '../../../features/api/toDoApiSlice'

const TodoItem: React.FC<{
  todo: TTodo
}> = ({ todo }) => {
  const [updateTodo, { isLoading: isToggleing }] = useUpdateTodoMutation()
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation()

  const onToggle = React.useCallback(
    (todo: TTodo) => {
      updateTodo({ ...todo, done: !todo.done })
    },
    [updateTodo]
  )

  const onDelete = React.useCallback(
    (todo: TTodo) => {
      deleteTodo({ ...todo, done: !todo.done })
    },
    [deleteTodo]
  )

  return (
    <React.Fragment>
      <div className="flex items-center mb-4" key={todo.id}>
        <input
          type="checkbox"
          className="checkbox"
          disabled={isToggleing}
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
          className={`btn btn-sm btn-outline btn-error ${
            isDeleting ? 'loading btn-disabled' : ''
          }`}
          onClick={() => onDelete(todo)}
        >
          Remove
        </button>
      </div>
    </React.Fragment>
  )
}

export default TodoItem
