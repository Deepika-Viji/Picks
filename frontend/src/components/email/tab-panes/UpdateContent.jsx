import React from 'react'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'

const UpdateContent = () => {
  return (
    <div className="table-wrapper">
        <div className="mail-list">
            <EmailDataContentTable start={1} end={8}/>
        </div>
        <MailDetails/>
    </div>
  )
}

export default UpdateContent