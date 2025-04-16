import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const MessageArea = () => {
  return (
    <div className="panel-body msg-area">
            <OverlayScrollbarsComponent
                className="main-menu"
                options={{
                    className: "os-theme-light",
                    scrollbars: {
                        autoHide: 'scroll',
                    },
                }}
            >
                <div className="scrollable main-chat-area">
                    <div className="single-message outgoing">
                        <div className="msg-box">
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status seen" title="seen">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                            </div>
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status seen" title="seen">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                            </div>
                        </div>
                        <div className="avatar">
                            <img src="src/assets/images/admin.png" alt="Image"/>
                        </div>
                    </div>
                    <div className="single-message">
                        <div className="avatar">
                            <img src="src/assets/images/avatar-2.png" alt="Image"/>
                        </div>
                        <div className="msg-box">
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                            </div>
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-message outgoing">
                        <div className="msg-box">
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status seen" title="seen">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                            </div>
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 day.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status seen" title="seen">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                            </div>
                        </div>
                        <div className="avatar">
                            <img src="src/assets/images/admin.png" alt="Image"/>
                        </div>
                    </div>
                    <div className="day-divider"><span>Today</span></div>
                    <div className="single-message">
                        <div className="avatar">
                            <img src="src/assets/images/avatar-2.png" alt="Image"/>
                        </div>
                        <div className="msg-box">
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 hr.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                            </div>
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 hr.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-message outgoing">
                        <div className="msg-box">
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 hr.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status" title="sent">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis dolorum rerum odit esse sunt quisquam pariatur nesciunt nihil amet!</p>
                            </div>
                            <div className="msg-box-inner">
                                <div className="msg-option">
                                    <span className="msg-time">1 hr.</span>
                                    <button className="btn-flush"><i className="fa-light fa-ellipsis-vertical"></i></button>
                                </div>
                                <span className="sent-status" title="sent">
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <p>Omnis distinctio eaque voluptatibus. Reiciendis natus harum ea ipsam, et facere?</p>
                            </div>
                        </div>
                        <div className="avatar">
                            <img src="src/assets/images/admin.png" alt="Image"/>
                        </div>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
        </div>
  )
}

export default MessageArea