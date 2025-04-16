import React from 'react'

const ContactForm3 = () => {
  return (
    <div className="col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Contact Form Three</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-sm-6">
                        <div className="row g-3">
                            <div className="col-12">
                                <input type="text" className="form-control form-control-sm"
                                    placeholder="Your Name*"/>
                            </div>
                            <div className="col-12">
                                <input type="email" className="form-control form-control-sm"
                                    placeholder="Your Email*"/>
                            </div>
                            <div className="col-12">
                                <input type="tel" className="form-control form-control-sm"
                                    placeholder="Your Phone*"/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control form-control-sm"
                                    placeholder="Your Website*"/>
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control form-control-sm" placeholder="Subject*"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <textarea className="form-control form-control-sm h-100" rows="8"
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

export default ContactForm3