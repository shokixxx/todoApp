import { render, screen } from '@testing-library/react'

import { InputField } from '../../atmos/InputField'

test('InputFieldが表示されている', () => {
  render(<InputField />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})
