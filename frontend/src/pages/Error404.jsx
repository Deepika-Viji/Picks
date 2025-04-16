import React from 'react'
import ErrorContent from '../components/error/ErrorContent'

const Error404 = () => {
  return (
    <ErrorContent imgSrc={"assets/images/error-404.png"} alt={'404'} subtitle={'Page Not Found'}/>
  )
}

export default Error404