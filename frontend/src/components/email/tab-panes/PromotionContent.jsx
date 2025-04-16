import React from 'react'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'

const PromotionContent = () => {
  return (
    <div className="table-wrapper">
        <div className="mail-list">
            <EmailDataContentTable start={4} end={15}/>
        </div>
        <MailDetails/>
    </div>
  )
}

export default PromotionContent