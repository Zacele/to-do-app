import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TTodo } from '../../types/todo'

export const toDoApisSlice = createApi({
  reducerPath: 'toDoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getAll: builder.query<TTodo[], void>({
      query: () => 'todos',
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    createTodo: builder.mutation<string, string>({
      query(text) {
        return {
          url: `todos`,
          method: 'POST',
          body: {
            text,
          },
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    updateTodo: builder.mutation<TTodo, TTodo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<TTodo, TTodo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'DELETE',
          body: todo,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetAllQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = toDoApisSlice
