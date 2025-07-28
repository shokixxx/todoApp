import { useRef } from 'react'

import { AddTodoForm } from '../molecules/AddTodoForm'

export const TodoList = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current) {
      const newTodo = inputRef.current.value
      if (newTodo !== '') {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <>
      <header>
        <h1 className="m-12 text-3xl">TODOList</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <AddTodoForm inputRef={inputRef} />
        </form>
      </main>
    </>
  )
}
