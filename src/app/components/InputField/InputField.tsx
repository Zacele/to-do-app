import React from 'react'
import { useCreateTodoMutation } from '../../../features/api/toDoApiSlice'

const InputField: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [inputString, setInputString] = React.useState('')

  const [createTodo] = useCreateTodoMutation()

  const onCreateTodo = React.useCallback(() => {
    createTodo(inputString)
    setInputString('')
  }, [createTodo, inputString])

  return (
    <React.Fragment>
      <div className="flex justify-between mt-4">
        <input
          className="w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker"
          placeholder="Add Todo"
          maxLength={50}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button
          className="text-white btn btn-info disabled:pointer-events-none"
          disabled={!inputString || isLoading}
          onClick={() => onCreateTodo()}
        >
          Add
        </button>
      </div>
      <div className="flex justify-between mt-2">{inputString.length} /50</div>
    </React.Fragment>
  )
}

export default InputField
