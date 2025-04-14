import React from 'react'
import EmailBodyHeader from '../../header/EmailBodyHeader'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'
import EmailContentHeader from '../../header/EmailContentHeader'

const DraftPane = () => {
  return (
    <>
    <EmailContentHeader title={"Draft"}/>
    <div className="panel-body">
        <EmailBodyHeader/>
        <div className="table-wrapper">
            <div className="mail-list">
                <EmailDataContentTable start={3} end={15}/>
            </div>
            <MailDetails/>
        </div>
    </div>
    </>
  )
}

export default DraftPane