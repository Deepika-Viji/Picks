import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error500 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-500.png"} alt={'500'} subtitle={'Internal Server Error'}/>
  )
}

export default Error500