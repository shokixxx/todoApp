import { useRef, useState } from 'react'

import { AddTodoForm } from '../molecules/AddTodoForm'
import { TodoStatusList } from '../molecules/TodoStatusList'

import type { TodoItem } from '../../type/TodoItem'

// TODO: ここで管理せずUUIDなどを採番して管理すること
let nextId = 0

export const TodoList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [todoItems, setTodoItems] = useState<TodoItem[]>([])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (inputRef.current) {
      const newTodoName = inputRef.current.value
      if (newTodoName !== '') {
        setTodoItems([...todoItems, { id: ++nextId, name: newTodoName, status: 'notStarted' }])
        inputRef.current.value = ''
      }
    }
  }

  const handleDelete = (deleteId: number) => {
    setTodoItems((todoItem) => todoItem.filter((todoItem) => todoItem.id !== deleteId))
  }

  return (
    <>
      <header>
        <h1 className="m-12 text-3xl">TODOList</h1>
      </header>
      <main>
        <AddTodoForm inputRef={inputRef} handleSubmit={handleSubmit} />
        <div className="mx-5 flex min-w-xl gap-4 overflow-auto">
          <div
            className="w-1/3 min-w-[200px] rounded bg-blue-400 p-2"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              const dropItemId = event.dataTransfer.getData('text/plain')
              setTodoItems(
                todoItems.map((todoItem) =>
                  todoItem.id === Number(dropItemId) ? { ...todoItem, status: 'notStarted' } : todoItem
                )
              )
            }}
          >
            <TodoStatusList
              statusTitle="未着手"
              todoItems={todoItems.filter((todoItem) => todoItem.status === 'notStarted')}
              handleDelete={handleDelete}
            />
          </div>
          <div
            className="w-1/3 min-w-[200px] rounded bg-pink-400 p-2"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              const dropItemId = event.dataTransfer.getData('text/plain')
              setTodoItems(
                todoItems.map((todoItem) =>
                  todoItem.id === Number(dropItemId) ? { ...todoItem, status: 'doing' } : todoItem
                )
              )
            }}
          >
            <TodoStatusList
              statusTitle="進行中"
              todoItems={todoItems.filter((todoItem) => todoItem.status === 'doing')}
              handleDelete={handleDelete}
            />
          </div>
          <div
            className="w-1/3 min-w-[200px] rounded bg-green-400 p-2"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              const dropItemId = event.dataTransfer.getData('text/plain')
              setTodoItems(
                todoItems.map((todoItem) =>
                  todoItem.id === Number(dropItemId) ? { ...todoItem, status: 'done' } : todoItem
                )
              )
            }}
          >
            <TodoStatusList
              statusTitle="完了"
              todoItems={todoItems.filter((todoItem) => todoItem.status === 'done')}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  )
}
