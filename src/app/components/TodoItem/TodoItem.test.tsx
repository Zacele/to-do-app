import { render, screen } from '@testing-library/react'
import TodoItem from './TodoItem'
import { TTodo } from '../../../types/todo'
import { Provider } from 'react-redux'
import { store } from '../../store'

it('To do item render properly', () => {
  const mockTodoItem: TTodo = {
    id: 1,
    text: 'test',
    done: false,
    active: true,
  }
  render(
    <Provider store={store}>
      <TodoItem todo={mockTodoItem} />
    </Provider>
  )
  const todoItemElement = screen.getByText('test')
  expect(todoItemElement.textContent).toBe('test')
})
