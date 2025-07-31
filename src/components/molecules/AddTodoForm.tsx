import { Button } from '@mui/material'

import { InputField } from '../atmos/InputField'

type Props = {
  inputRef: React.RefObject<HTMLInputElement | null>
  handleSubmit: (event: React.FormEvent) => void
}

export const AddTodoForm = ({ inputRef, handleSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(event)
      }}
    >
      <div className="m-5 flex gap-5">
        <InputField ref={inputRef} className="w-2/3 p-5" />
        <Button variant="contained" type="submit" className="w-20">
          登録
        </Button>
      </div>
    </form>
  )
}
