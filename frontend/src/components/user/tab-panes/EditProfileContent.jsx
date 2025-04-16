import React from 'react';

const EditProfileContent = () => {
  return (
    <form>
      <div className="profile-edit-tab-title">
        <h6>Public Information</h6>
      </div>
      <div className="public-information mb-30">
        <div className="row g-4">
          <div className="col-md-3">
            <div className="admin-profile">
              <div className="image-wrap">
                <div className="part-img rounded-circle overflow-hidden">
                  <img src="src/assets/images/admin.png" alt="admin" />
                </div>
                <button className="image-change">
                  <i className="fa-light fa-camera" />
                </button>
              </div>
              <span className="admin-name">Mitchell C. Shay</span>
              <span className="admin-role">Graphic Designer</span>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-light fa-user" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value="Mitchell C. Shay"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-light fa-at" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value="@mitchellc"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                    className="form-control h-150-p"
                    placeholder="Biography"
                    value="It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
                    readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-edit-tab-title">
        <h6>Private Information</h6>
      </div>
      <div className="private-information mb-30">
        <div className="row g-3">
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-user" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Unique ID"
                value="1D233"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-light fa-user-tie" />
              </span>
              <select className="form-control select-search" defaultValue="">
                <option value="">Role</option>
                <option value="0">Admin</option>
                <option value="1">Manager</option>
                <option value="2">Project Manager</option>
                <option value="3">Managing Director</option>
                <option value="4">Chairman</option>
                <option value="5" defaultValue>
                  Graphic Designer
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group flex-nowrap">
              <span className="input-group-text">
                <i className="fa-light fa-circle-check" />
              </span>
              <select className="form-control" defaultValue="">
                <option value="">Status</option>
                <option value="0" defaultValue>
                  Enable
                </option>
                <option value="1">Disable</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-envelope" />
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value="example@mail.com"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-phone" />
              </span>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                value="+0 123 456 789"
                readOnly
              />
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-light fa-globe" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Website"
                value="https://themeforest.net/"
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <textarea className="form-control h-100-p" placeholder="Address" value="California, United States" readOnly/>
          </div>
        </div>
      </div>
      <div className="profile-edit-tab-title">
        <h6>Social Information</h6>
      </div>
      <div className="social-information">
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-facebook-f" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Facebook"
                value="https://www.facebook.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-twitter" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Twitter"
                value="https://twitter.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-linkedin-in" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Linkedin"
                value="https://www.linkedin.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-instagram" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Instagram"
                value="https://www.instagram.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-youtube" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Youtube"
                value="https://www.youtube.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa-brands fa-pinterest-p" />
              </span>
              <input
                type="url"
                className="form-control"
                placeholder="Pinterest"
                value="https://www.pinterest.com/"
                readOnly
              />
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditProfileContent;
