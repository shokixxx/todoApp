import { Button } from '@mui/material'

import { InputField } from '../atmos/InputField'

type Props = {
  inputRef: React.RefObject<HTMLInputElement | null>
}

export const AddTodoForm = ({ inputRef }: Props) => {
  return (
    <div className="m-5 flex gap-5">
      <InputField ref={inputRef} className="w-2/3 p-5" />
      <Button variant="contained" type="submit" className="w-20">
        登録
      </Button>
    </div>
  )
}
