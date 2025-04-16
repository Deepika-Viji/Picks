import React from 'react'

const OtherSettingsContent = () => {
  return (
    <div className="row">
        <div className="col-sm-6">
            <div className="profile-edit-tab-title">
                <h6>Activity Email Settings</h6>
            </div>
            <div className="activity-email-settings">
                <form>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="activity-email-settings-1"/>
                        <label className="form-check-label" htmlFor="activity-email-settings-1">
                            Someone adds you as a connection
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="activity-email-settings-2"/>
                        <label className="form-check-label" htmlFor="activity-email-settings-2">
                            you're sent a direct message
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="activity-email-settings-3"/>
                        <label className="form-check-label" htmlFor="activity-email-settings-3">
                            New membership approval
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="activity-email-settings-4"/>
                        <label className="form-check-label" htmlFor="activity-email-settings-4">
                            Send Copy To Personal Email
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="activity-email-settings-5"/>
                        <label className="form-check-label" htmlFor="activity-email-settings-5">
                            Tips on getting more out of PCT-themes
                        </label>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="profile-edit-tab-title">
                <h6>Product Email Settings</h6>
            </div>
            <div className="product-email-settings">
                <form>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="product-email-settings-1"/>
                        <label className="form-check-label" htmlFor="product-email-settings-1">
                            Someone adds you as a connection
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="product-email-settings-2"/>
                        <label className="form-check-label" htmlFor="product-email-settings-2">
                            you're sent a direct message
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="product-email-settings-3"/>
                        <label className="form-check-label" htmlFor="product-email-settings-3">
                            New membership approval
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="product-email-settings-4"/>
                        <label className="form-check-label" htmlFor="product-email-settings-4">
                            Send Copy To Personal Email
                        </label>
                    </div>
                    <div className="form-check mb-15">
                        <input className="form-check-input" type="checkbox" value="" id="product-email-settings-5"/>
                        <label className="form-check-label" htmlFor="product-email-settings-5">
                            Tips on getting more out of PCT-themes
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OtherSettingsContent