import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error504 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-504.png"} alt={'504'} subtitle={'Gateway Timeout'}/>
  )
}

export default Error504