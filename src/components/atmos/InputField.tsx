import { forwardRef } from 'react'

import { TextField } from '@mui/material'

type Props = React.ComponentProps<typeof TextField>

export const InputField = forwardRef<HTMLInputElement, Props>(function InputField(props, ref) {
  return <TextField {...props} inputRef={ref} />
})
