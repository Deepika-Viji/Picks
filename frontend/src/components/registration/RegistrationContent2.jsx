import React from 'react'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

const RegistrationContent2 = () => {
  return (
    <div className="main-content login-panel login-panel-2">
        <h3 className="panel-title">Registration </h3>
        <div className="login-body login-body-2">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="src/assets/images/pixfix-logo.png" alt="Logo"/>
                </div>
                <Link to="/"><i className="fa-duotone fa-house-chimney"></i></Link>
            </div>
            <div className="bottom">
                <form>
                    <div className="input-group mb-30">
                        <input type="text" className="form-control" placeholder="Username"/>
                        <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                    </div>
                    <div className="input-group mb-30">
                        <input type="email" className="form-control" placeholder="Email"/>
                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                    </div>
                    <div className="input-group mb-30">
                        <input type="password" className="form-control" placeholder="Password"/>
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                    </div>
                    <div className="input-group mb-20">
                        <input type="password" className="form-control" placeholder="Confirm Password"/>
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                    </div>
                    <div className="d-flex justify-content-end mb-30">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheckbox"/>
                            <label className="form-check-label text-white">
                                I agree <Link to="#" className="text-white text-decoration-underline">Terms & Policy</Link>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100 login-btn">Sign Up</button>
                </form>
                <div className="other-option">
                    <p className="mb-0">Already have an account? <Link to="/login2" className="text-white text-decoration-underline">Login</Link></p>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default RegistrationContent2