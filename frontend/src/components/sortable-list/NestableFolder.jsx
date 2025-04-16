import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

const NestableFolder = () => {
  useEffect(() => {
    const nestedSortables = Array.from(document.querySelectorAll('.nested-sortable'));
    nestedSortables.forEach((element) => {
      new Sortable(element, {
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
      });
    });

    const nestedSortablesHandles = Array.from(document.querySelectorAll('.nested-sortable-handle'));
    nestedSortablesHandles.forEach((element) => {
      new Sortable(element, {
        handle: '.handle',
        group: 'nested',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65
      });
    });
  }, []);

  return (
    <div className="col-md-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Folder Structure Nested List</h5>
        </div>
        <div className="panel-body">
          <p className="fs-14 pb-1 mb-10">
            Use <code>nested-sortable</code> className to list-group className to set a nested list with sortable items where icons are given within list-group-item.
          </p>
          <div id="nestableList2" className="list-group nested-sortable">
            <div className="list-group-item">
              <span className="text-warning">
                <i className="fa-solid fa-folder-open"></i>
              </span>
              css
              <div className="list-group nested-sortable">
                <div className="list-group-item">
                  <span className="text-primary">
                    <i className="fa-brands fa-css3"></i>
                  </span>
                  style.css
                </div>
                <div className="list-group-item">
                  <span className="text-primary">
                    <i className="fa-brands fa-css3"></i>
                  </span>
                  style.min.css
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="text-warning">
                <i className="fa-solid fa-folder-open"></i>
              </span>
              images
              <div className="list-group nested-sortable">
                <div className="list-group-item">
                  <span className="text-info">
                    <i className="fa-regular fa-image"></i>
                  </span>
                  logo.png
                </div>
                <div className="list-group-item">
                  <span className="text-info">
                    <i className="fa-regular fa-image"></i>
                  </span>
                  avatar.png
                </div>
                <div className="list-group-item">
                  <span className="text-info">
                    <i className="fa-regular fa-image"></i>
                  </span>
                  product.jpg
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="text-warning">
                <i className="fa-solid fa-folder-open"></i>
              </span>
              js
              <div className="list-group nested-sortable">
                <div className="list-group-item nested-3">
                  <span className="text-warning">
                    <i className="fa-brands fa-square-js"></i>
                  </span>
                  main.js
                </div>
                <div className="list-group-item nested-3">
                  <span className="text-warning">
                    <i className="fa-brands fa-square-js"></i>
                  </span>
                  main.min.js
                </div>
                <div className="list-group-item nested-3">
                  <span className="text-warning">
                    <i className="fa-brands fa-square-js"></i>
                  </span>
                  plugin.js
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="text-danger">
                <i className="fa-brands fa-html5"></i>
              </span>
              index.html
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestableFolder;
