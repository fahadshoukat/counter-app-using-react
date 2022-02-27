import { FC } from 'react'
import './counterValue.css'
interface ValueProps {
    value: number
}

const CounterValue: FC<ValueProps> = ({value}) => {

  return (
    <h1 className='value'>{value}</h1>
  )
}

export default CounterValue