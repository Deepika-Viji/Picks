import React from 'react'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'

const SocialContent = () => {
  return (
<div className="table-wrapper">
    <div className="mail-list">
        <EmailDataContentTable start={3} end={14}/>
    </div>
    <MailDetails/>
</div>  
)
}

export default SocialContent