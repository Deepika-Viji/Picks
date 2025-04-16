import React from 'react'
import EmailBodyHeader from '../../header/EmailBodyHeader'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'
import EmailContentHeader from '../../header/EmailContentHeader'

const ImportantPane = () => {
  return (
    <>
        <EmailContentHeader title={"Important"}/>
        <div className="panel-body">
            <EmailBodyHeader/>
            <div className="table-wrapper">
                <div className="mail-list">
                    <EmailDataContentTable start={2}/>
                </div>
                <MailDetails/>
            </div>
        </div>
    </>
  )
}

export default ImportantPane