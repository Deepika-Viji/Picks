import React from 'react'
import EmailContentHeader from '../../header/EmailContentHeader'
import EmailBodyHeader from '../../header/EmailBodyHeader'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'

const TrashPane = () => {
  return (
    <>
        <EmailContentHeader title={"Trash"}/>
        <div className="panel-body">
            <EmailBodyHeader/>
            <div className="table-wrapper">
                <div className="mail-list">
                    <EmailDataContentTable start={3}/>
                </div>
                <MailDetails/>
            </div>
        </div>
    </>
  )
}

export default TrashPane