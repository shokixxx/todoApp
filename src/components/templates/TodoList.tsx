import { useRef } from 'react'

import { Button } from '@mui/material'

import { InputField } from '../atmos/InputField'

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
        <h1>TODOList</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <InputField ref={inputRef} />
          <Button variant="contained">登録する</Button>
        </form>
      </main>
    </>
  )
}
