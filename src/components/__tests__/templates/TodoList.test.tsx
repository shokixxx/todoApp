import { render, screen, within } from '@testing-library/react'

import { TodoList } from '../../templates/TodoList'

test('headerタグが存在していること', () => {
  render(<TodoList />)
  expect(screen.getByRole('banner')).toBeInTheDocument()
})

// 参考: https://testing-library.com/docs/queries/byrole/#level
test('h1タグがTODOListで表示されている', () => {
  render(<TodoList />)
  expect(screen.getByRole('heading', { level: 1, name: 'TODOList' })).toBeInTheDocument()
})

test('mainタグが存在していること', () => {
  render(<TodoList />)
  expect(screen.getByRole('main')).toBeInTheDocument()
})

test('todoItems の数だけ一覧表示される', () => {
  render(<TodoList />)
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  expect(within(list).getAllByRole('listitem')).toHaveLength(3)
})
