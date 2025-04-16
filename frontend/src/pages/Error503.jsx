import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error503 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-503.png"} alt={'503'} subtitle={'Service Unavailable'}/>
  )
}

export default Error503