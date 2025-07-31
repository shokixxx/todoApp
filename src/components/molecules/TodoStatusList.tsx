import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import type { TodoItem } from '../../type/TodoItem'

type TodoStatusListProps = {
  statusTitle: '未着手' | '進行中' | '完了'
  todoItems: TodoItem[]
  handleDelete: (deleteId: number) => void
}
export const TodoStatusList = ({ statusTitle, todoItems, handleDelete }: TodoStatusListProps) => {
  return (
    <>
      <h2 className="m-5 text-center text-2xl font-bold">{statusTitle}</h2>
      <ul>
        {todoItems.map((todoItem) => (
          <li
            key={todoItem.id}
            className="m-5 flex cursor-grab items-center justify-between rounded border bg-gray-600 p-4 hover:bg-gray-700"
            draggable
            onDragStart={(event) => event.dataTransfer.setData('text/plain', `${todoItem.id}`)}
          >
            {todoItem.name}
            <IconButton aria-label="delete" onClick={() => handleDelete(todoItem.id)}>
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </>
  )
}
