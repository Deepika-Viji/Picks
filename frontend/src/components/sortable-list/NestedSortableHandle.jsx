import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

const NestedSortableHandle = () => {
  useEffect(() => {
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
          <h5>Nested Sortables List With Handle</h5>
        </div>
        <div className="panel-body">
          <p className="fs-14 pb-1 mb-10">
            Use <code>nested-sortable-handle</code> className to list-group className to set a nested list with sortable items.
          </p>
          <div id="nestableListWithHandle" className="list-group nested-sortable-handle">
            <div className="list-group-item">
              <span className="handle">
                <i className="fa-light fa-bars"></i>
              </span>
              Item 1.1
              <div className="list-group nested-sortable-handle">
                <div className="list-group-item">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 2.1
                </div>
                <div className="list-group-item">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 2.3
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="handle">
                <i className="fa-light fa-bars"></i>
              </span>
              Item 1.2
              <div className="list-group nested-sortable-handle">
                <div className="list-group-item">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 2.1
                </div>
                <div className="list-group-item">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 2.2
                </div>
                <div className="list-group-item">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 2.3
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="handle">
                <i className="fa-light fa-bars"></i>
              </span>
              Item 1.3
              <div className="list-group nested-sortable-handle">
                <div className="list-group-item nested-3">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 3.1
                </div>
                <div className="list-group-item nested-3">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 3.2
                </div>
                <div className="list-group-item nested-3">
                  <span className="handle">
                    <i className="fa-light fa-bars"></i>
                  </span>
                  Item 3.3
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <span className="handle">
                <i className="fa-light fa-bars"></i>
              </span>
              Item 1.4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedSortableHandle;
