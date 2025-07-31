import { fireEvent, render, screen, within } from '@testing-library/react'

import { TodoStatusList } from '../../molecules/TodoStatusList'

import type { TodoItem } from '../../../type/TodoItem'

const todoItems: TodoItem[] = [
  { id: 1, name: '本を買う', status: 'notStarted' },
  { id: 2, name: '課題を終わらせる', status: 'doing' },
  { id: 3, name: '健康診断を受ける', status: 'done' },
]

const mockFn = jest.fn()

// 参考: https://testing-library.com/docs/queries/byrole/#level
test('h2タグが渡されたステータスタイトルで表示されている', () => {
  render(<TodoStatusList statusTitle="未着手" todoItems={todoItems} handleDelete={mockFn} />)
  expect(screen.getByRole('heading', { level: 2, name: '未着手' })).toBeInTheDocument()
})

test('todoItems の数だけ一覧表示される', () => {
  render(<TodoStatusList statusTitle="未着手" todoItems={todoItems} handleDelete={mockFn} />)
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  expect(within(list).getAllByRole('listitem')).toHaveLength(3)
})

test('Snapshot: todoItemsの数だけ一覧表示される', () => {
  const { container } = render(<TodoStatusList statusTitle="未着手" todoItems={todoItems} handleDelete={mockFn} />)
  expect(container).toMatchSnapshot()
})

test('削除ボタンがtodoItemsの数だけ表示される', () => {
  render(<TodoStatusList statusTitle="未着手" todoItems={todoItems} handleDelete={mockFn} />)
  expect(screen.getAllByLabelText('delete').length).toBe(3)
})

test('一番目の削除ボタンを押下すると、イベントハンドラーが呼ばれる', () => {
  render(<TodoStatusList statusTitle="未着手" todoItems={todoItems} handleDelete={mockFn} />)
  const deleteButtons = screen.getAllByLabelText('delete')
  fireEvent.click(deleteButtons[0])
  expect(mockFn).toHaveBeenCalled()
})
