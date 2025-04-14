import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploaderSection = () => {
  const onDropSingle = useCallback((acceptedFiles) => {
    // Handle the single file upload
    console.log(acceptedFiles);
  }, []);

  const onDropMultiple = useCallback((acceptedFiles) => {
    // Handle the multiple file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps: getSingleRootProps, getInputProps: getSingleInputProps, isDragActive: isSingleDragActive } = useDropzone({ onDrop: onDropSingle });
  const { getRootProps: getMultipleRootProps, getInputProps: getMultipleInputProps, isDragActive: isMultipleDragActive } = useDropzone({ onDrop: onDropMultiple, multiple: true });

  return (
    <div className="col-12">
      <div className="panel">
        <div className="panel-header">
          <h5>File Uploader</h5>
        </div>
        <div className="panel-body">
          <div className="row g-3">
            <div className="col-lg-8 col-md-7">
              <div className="card component-jquery-uploader">
                <div className="card-header">File Uploader</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xxl-3 col-sm-4">
                      <div className="add-thumbnail product-image-upload product-image-upload-2">
                        <div className="part-txt">
                          <h5>Single Upload</h5>
                        </div>
                        <div {...getSingleRootProps()}>
                          <input type="file" id="singleUpload" {...getSingleInputProps()} />
                          {isSingleDragActive ? (
                            <div className="jquery-uploader">
                                <div className="jquery-uploader-preview-container">
                                    <div className="jquery-uploader-select-card">
                                        <div className="jquery-uploader-select">
                                            <div className="upload-button">
                                                <i className="fa fa-plus"></i><br/>
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
                                                <i className="fa fa-plus"></i><br/>
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
                    <div className="col-xxl-9 col-sm-8">
                      <div className="add-gallery-img product-image-upload product-image-upload-2">
                        <div className="part-txt">
                          <h5>Multiple Upload</h5>
                        </div>
                        <div {...getMultipleRootProps()}>
                          <input type="file" id="multipleUpload" {...getMultipleInputProps()} />
                          {isMultipleDragActive ?(
                            <div className="jquery-uploader">
                                <div className="jquery-uploader-preview-container">
                                    <div className="jquery-uploader-select-card">
                                        <div className="jquery-uploader-select">
                                            <div className="upload-button">
                                                <i className="fa fa-plus"></i><br/>
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
                                                <i className="fa fa-plus"></i><br/>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="card">
                <div className="card-header">Dropzone</div>
                <div className={`card-body ${isMultipleDragActive ? 'dropzone-active' : ''}`} {...getMultipleRootProps()}>
                  <form action="/file-upload" className="dropzone dz-component" id="file-manager-upload">
                    <input {...getMultipleInputProps()} />
                    {isMultipleDragActive ? (
                      <div className="dz-default dz-message"><button className="dz-button" type="button"><i className="fa-light fa-cloud-arrow-up"></i><span>Drop a file here or click to upload</span></button></div>
                    ) : (
                        <div className="dz-default dz-message"><button className="dz-button" type="button"><i className="fa-light fa-cloud-arrow-up"></i><span>Drop a file here or click to upload</span></button></div>
                        )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploaderSection;
