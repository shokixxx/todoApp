import { Button } from '@mui/material'

import { InputField } from '../atmos/InputField'

type Props = {
  inputRef: React.RefObject<HTMLInputElement | null>
}

export const AddTodoForm = ({ inputRef }: Props) => {
  return (
    <>
      <InputField ref={inputRef} />
      <Button variant="contained" type="submit">
        登録
      </Button>
    </>
  )
}
