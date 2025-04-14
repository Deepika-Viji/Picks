import React from 'react'

const ChangePasswordContent = () => {
  return (
    <form>
        <div className="profile-edit-tab-title">
            <h6>Change Password</h6>
        </div>
        <div className="social-information">
            <div className="row g-3">
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                        <input type="password" className="form-control" placeholder="Current Password"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                        <input type="url" className="form-control" placeholder="New Password"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                        <input type="url" className="form-control" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default ChangePasswordContent