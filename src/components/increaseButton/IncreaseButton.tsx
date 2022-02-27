import { FC } from 'react'
import './increaseButton.css'
interface IncreaseProps {
    increase: (values: any) => void
}
const IncreaseButton: FC<IncreaseProps> = ({increase}) => {
  return (
    <button onClick={increase} className='increaseBtn'>Increase</button>
  )
}

export default IncreaseButton