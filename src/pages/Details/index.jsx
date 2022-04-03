import React from 'react'
import { DetailsStyle } from './styled'
import { useSelector } from 'react-redux'
const Details = () => {
  const seila = useSelector(state => state.caseData)
  console.log(seila)
  return (
    <div>Details</div>
  )
}

export default Details