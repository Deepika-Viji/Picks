import React, { useContext } from 'react'
import { DigiContext } from '../../context/DigiContext'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import PaginationSection from './PaginationSection'

const EmailDataContentTable = ({start,end}) => {
    const {currentEmailData,totalEmailPages,emailPageNumbers,paginateEmail,currentEmailPage,handleMailDetailsBtn} = useContext(DigiContext)
  return (
    <>
    <OverlayScrollbarsComponent>
    <table className="table table-dashed table-hover digi-dataTable email-table">
        <thead>
            <tr>
                <th className="no-sort">
                    <div className="form-check">
                        <input className="form-check-input markAllMail" type="checkbox"/>
                    </div>
                </th>
                <th className="no-sort"><i className="fa-light fa-star"></i></th>
                <th>Sender</th>
                <th>Subject</th>
                <th className="no-sort"><i className="fa-light fa-paperclip"></i></th>
                <th className="no-sort">Action</th>
            </tr>
        </thead>
        <tbody>
            {currentEmailData.slice(start,end).map((data) => (
               <tr className="unread" key={data.id}>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"/>
                        </div>
                    </td>
                    <td><button className="btn-star starred"><i className="fa-solid fa-star"></i></button></td>
                    <td><span className="table-txt" role='button' onClick={handleMailDetailsBtn}>{data.name}</span></td>
                    <td><span className="table-txt" role='button' onClick={handleMailDetailsBtn}>{data.email_content}</span></td>
                    <td><i className="fa-light fa-paperclip"></i></td>
                    <td>
                        <div className="btn-box ms-0">
                            <button className="btn-flush"><i className="fa-light fa-box-archive"></i></button>
                            <button className="btn-flush"><i className="fa-light fa-circle-exclamation"></i></button>
                            <button className="btn-flush"><i className="fa-light fa-envelope"></i></button>
                            <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                        </div>
                    </td>
                </tr>  
            ))}
            
        </tbody>
    </table>
    </OverlayScrollbarsComponent>
    <PaginationSection currentPage={currentEmailPage} totalPages={totalEmailPages} paginate={paginateEmail} pageNumbers={emailPageNumbers}/>
    </>
    
  )
}

export default EmailDataContentTable