import { FC } from 'react'
import './reset.css'

interface ResetProps {
    reset: (values: any) => void
}

const Reset: FC<ResetProps> = ({reset}) => {
  return (
    <button onClick={reset} className='resetBtn'>Reset</button>
  )
}

export default Reset