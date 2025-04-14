import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error408 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-408.png"} alt={'408'} subtitle={'Request Time-Out'}/>
  )
}

export default Error408