import type { TodoItem } from '../../type/TodoItem'

type TodoStatusListProps = {
  statusTitle: string
  todoItems: TodoItem[]
}
export const TodoStatusList = ({ statusTitle, todoItems }: TodoStatusListProps) => {
  return (
    <>
      <h2 className="m-5 text-center text-2xl font-bold">{statusTitle}</h2>
      <ul>
        {todoItems.map((todoItem) => (
          <li
            key={todoItem.id}
            className="m-5 cursor-grab rounded border bg-gray-600 p-4 hover:bg-gray-700"
            draggable
            onDragStart={(event) => event.dataTransfer.setData('text/plain', `${todoItem.id}`)}
          >
            {todoItem.name}
          </li>
        ))}
      </ul>
    </>
  )
}
