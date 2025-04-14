import React from 'react'

const ContactForm2 = () => {
  return (
    <div className="col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Contact Form Two</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                            <input type="text" className="form-control form-control-sm" placeholder="Your Name*"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text"><i className="fa-solid fa-at"></i></span>
                            <input type="email" className="form-control form-control-sm" placeholder="Your Email*"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                            <input type="tel" className="form-control form-control-sm" placeholder="Your Phone*"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <span className="input-group-text"><i className="fa-solid fa-globe"></i></span>
                            <input type="text" className="form-control form-control-sm" placeholder="Your Website*"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-group">
                            <span className="input-group-text"><i className="fa-solid fa-pen"></i></span>
                            <input type="text" className="form-control form-control-sm" placeholder="Subject*"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <textarea className="form-control form-control-sm" rows="8"
                            placeholder="Your Message*"></textarea>
                    </div>
                    <div className="col-12 text-end">
                        <button className="btn btn-sm btn-primary">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm2