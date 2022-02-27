import { FC } from 'react'
import './decreaseButton.css'

interface DecreaseProps {
    decrease: (values: any) => void
}
const DecreaseButton: FC<DecreaseProps> = ({decrease}) => {
  return (
    <button onClick={decrease} className='decreaseBtn'>Decrease</button>
  )
}

export default DecreaseButton