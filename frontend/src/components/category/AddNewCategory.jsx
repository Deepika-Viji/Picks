import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AddNewCategory = () => {
    const [showThumbnail,setShowThumbnail] = useState(false)
    const handleShowThumbnail = () => {
        setShowThumbnail(!showThumbnail)
    }
  const onDropSingle = useCallback((acceptedFiles) => {
    // Handle the single file upload
    console.log(acceptedFiles);
  }, []);
  const { getRootProps: getSingleRootProps, getInputProps: getSingleInputProps, isDragActive: isSingleDragActive } = useDropzone({ onDrop: onDropSingle });

  return (
    <div className="col-xxl-4 col-md-5">
      <div className="panel">
        <div className="panel-header">
          <h5>Add New Category</h5>
        </div>
        <div className="panel-body">
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Category Name</label>
              <input type="text" className="form-control form-control-sm" id="categoryTitle" />
              <p className="perma-txt" hidden>
                Permalink: <span data-link="https://example.com/" className="site-link text-primary" id="categoryPermalink">https://example.com/</span><input type="text" className="form-control form-control-sm" hidden="" id="editPermalink" />
                <button className="btn-flush bg-primary" id="editPermaBtn">Edit</button>
                <button className="btn-flush bg-success" id="createPerma" hidden="">OK</button>
                <button className="btn-flush bg-danger" id="cancelPerma" hidden="">Cancel</button>
              </p>
            </div>
            <div className="col-sm-6">
              <label className="form-label">Main Category</label>
              <select className="form-control form-control-sm" data-placeholder="Select">
                <option value="">Select</option>
                <option value="0">Cloth</option>
                <option value="1">-Fashion</option>
                <option value="2">--Jewellery</option>
                <option value="3">---Bag</option>
                <option value="4">----Smart Phone</option>
                <option value="5">Watch</option>
                <option value="6">Sunglass</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label className="form-label">Custom Category Icon</label>
              <input type="text" className="form-control form-control-sm" placeholder="Fontawesome 6 pro icon name" />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea rows="5" className="form-control form-control-sm"></textarea>
            </div>
            <div className="col-12">
              <label className="form-label">Display Type</label>
              <select className="form-control form-control-sm">
                <option value="0">Default</option>
                <option value="1">Products</option>
                <option value="2">Subcategories</option>
                <option value="3">Both</option>
              </select>
            </div>
            <div className="col-12">
              <div className="upload-category-thumbnail">
                <label className="form-label mb-0" role='button' onClick={handleShowThumbnail}>Add Category Thumbnail</label>
                <div {...getSingleRootProps()} className={`${showThumbnail?'':'d-none'}`}>
                  <input type="file" id="singleUpload" {...getSingleInputProps()} />
                  {isSingleDragActive ? (
                    <div className="jquery-uploader">
                      <div className="jquery-uploader-preview-container">
                        <div className="jquery-uploader-select-card">
                          <div className="jquery-uploader-select">
                            <div className="upload-button">
                              <i className="fa fa-plus"></i><br />
                              <a>Upload</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="jquery-uploader">
                      <div className="jquery-uploader-preview-container">
                        <div className="jquery-uploader-select-card">
                          <div className="jquery-uploader-select">
                            <div className="upload-button">
                              <i className="fa fa-plus"></i><br />
                              <a>Upload</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end">
              <div className="btn-box">
                <button className="btn btn-sm btn-primary">Save Category</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
