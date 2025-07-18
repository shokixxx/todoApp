import { useRef, useState } from 'react'

import { AddTodoForm } from '../molecules/AddTodoForm'

type TodoItem = {
  id: number
  name: string
}

// TODO: ここで管理せずUUIDなどを採番して管理すること
let nextId = 0

export const TodoList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputRef.current) {
      const newTodoName = inputRef.current.value
      if (newTodoName !== '') {
        setTodoItems([...todoItems, { id: ++nextId, name: newTodoName }])
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
          <AddTodoForm inputRef={inputRef} />
        </form>
        <ul>
          {todoItems.map((todoItem) => (
            <li key={todoItem.id}>{todoItem.name}</li>
          ))}
        </ul>
      </main>
    </>
  )
}
