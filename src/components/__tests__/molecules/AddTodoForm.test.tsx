import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import { AddTodoForm } from '../../molecules/AddTodoForm'

// gpt先生に聞いてinputRef作成
const inputRef = React.createRef<HTMLInputElement>()

const mockFn = jest.fn()

test('InputFieldが表示されている', () => {
  render(<AddTodoForm inputRef={inputRef} handleSubmit={mockFn} />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('登録ボタンが表示されている', () => {
  render(<AddTodoForm inputRef={inputRef} handleSubmit={mockFn} />)
  expect(screen.getByRole('button', { name: '登録' })).toBeInTheDocument()
})

test('ボタンを押下すると、イベントハンドラーが呼ばれる', () => {
  render(<AddTodoForm inputRef={inputRef} handleSubmit={mockFn} />)
  fireEvent.click(screen.getByRole('button'))
  expect(mockFn).toHaveBeenCalled()
})
