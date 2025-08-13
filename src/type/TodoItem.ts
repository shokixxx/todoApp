export const TODO_STATUS = {
  NOT_STARTED: 'notStarted',
  DOING: 'doing',
  DONE: 'done',
} as const

export type TodoStatus = (typeof TODO_STATUS)[keyof typeof TODO_STATUS]

export type TodoItem = {
  id: number
  name: string
  status: TodoStatus
}
