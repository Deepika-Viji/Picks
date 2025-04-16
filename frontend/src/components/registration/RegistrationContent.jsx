import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DigiContext } from '../../context/DigiContext'
import Footer from '../footer/Footer'

const RegistrationContent = () => {
    const {passwordVisible, togglePasswordVisibility} = useContext(DigiContext)
  return (
    <div className="main-content login-panel">
        <div className="-body">
            <div className="top d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="src/assets/images/white-pixfix-logo.png" alt="Logo"/>
                </div>
                <Link to="/"><i className="fa-duotone fa-house-chimney"></i></Link>
            </div>
            <div className="bottom">
                <h3 className="panel-title">Registration</h3>
                <form>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Full Name"/>
                    </div>
                    <div className="input-group mb-30">
                        <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="input-group mb-20">
                        <span className="input-group-text"><i className="fa-regular fa-lock"></i></span>
                        <input type={passwordVisible ? 'text' : 'password'}  className="form-control rounded-end" placeholder="Password"/>
                        <Link role="button" className="password-show" onClick={togglePasswordVisibility}><i className="fa-duotone fa-eye"></i></Link>
                    </div>
                    <div className="d-flex justify-content-between mb-30">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="Checkbox"/>
                            <label className="form-check-label text-white">
                                I agree <Link to="#" className="text-white text-decoration-underline">Terms & Policy</Link>
                            </label>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100 login-btn">Sign up</button>
                </form>
                <div className="other-option">
                    <p>Or continue with</p>
                    <div className="social-box d-flex justify-content-center gap-20">
                        <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                        <Link to="#"><i className="fa-brands fa-google"></i></Link>
                        <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default RegistrationContent