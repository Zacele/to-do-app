import { render, screen, fireEvent } from '@testing-library/react'
import InputField from './InputField'
import { Provider } from 'react-redux'
import { store } from '../../store'

it('Button inside input field cannot be clicked if is loading', () => {
  const onClick = jest.fn()
  render(
    <Provider store={store}>
      <InputField isLoading={true} />
    </Provider>
  )
  const buttonElement = screen.getByText('Add')
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(0)
})

it('Button inside input field cannot be clicked if input field is empty', () => {
  const onClick = jest.fn()
  render(
    <Provider store={store}>
      <InputField isLoading={false} />
    </Provider>
  )
  const buttonElement = screen.getByText('Add')
  fireEvent.click(buttonElement)
  expect(onClick).toHaveBeenCalledTimes(0)
})
