import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error403 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-403.png"} alt={'403'} subtitle={'Access Forbidden'}/>
  )
}

export default Error403