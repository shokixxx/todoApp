import type { TodoItem } from '../../type/TodoItem'

type TodoStatusListProps = {
  statusTitle: string
  todoItems: TodoItem[]
}
export const TodoStatusList = ({ statusTitle, todoItems }: TodoStatusListProps) => {
  return (
    <>
      <h2 className="m-5 text-2xl">{statusTitle}</h2>
      <ul>
        {todoItems.map((todoItem) => (
          <li className="m-5" key={todoItem.id}>
            {todoItem.name}
          </li>
        ))}
      </ul>
    </>
  )
}
