import React from 'react'
import EmailDataContentTable from '../../tables/EmailDataContentTable'
import EmailContentHeader from '../../header/EmailContentHeader'
import MailDetails from '../MailDetails'
import EmailBodyHeader from '../../header/EmailBodyHeader'

const StarredPane = () => {
  return (
    <>
        <EmailContentHeader title={"Starred"}/>
        <div className="panel-body">
            <EmailBodyHeader/>
            <div className="table-wrapper">
                <div className="mail-list">
                    <EmailDataContentTable start={2} end={15}/>
                </div>
                <MailDetails/>
            </div>
        </div>
    </>
  )
}

export default StarredPane