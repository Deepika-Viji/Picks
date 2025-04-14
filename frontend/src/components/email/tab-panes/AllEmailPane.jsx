import React from 'react'
import EmailContentHeader from '../../header/EmailContentHeader'
import EmailBodyHeader from '../../header/EmailBodyHeader'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import MailDetails from '../MailDetails'

const AllEmailPane = () => {
  return (
    <>
        <EmailContentHeader title={"All Email"}/>
        <div className="panel-body">
            <EmailBodyHeader/>
            <div className="table-wrapper">
                <div className="mail-list">
                    <EmailDataContentTable start={0}/>
                </div>
                <MailDetails/>
            </div>
        </div>
    </>
  )
}

export default AllEmailPane