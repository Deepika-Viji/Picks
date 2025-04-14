import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

const NestedSortableList = () => {
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
          <h5>Nested Sortables List</h5>
        </div>
        <div className="panel-body">
          <p className="fs-14 pb-1 mb-10">
            Use <code>nested-sortable</code> className to list-group className to set a nested list with sortable items.
          </p>
          <div id="nestableList" className="list-group nested-sortable">
            <div className="list-group-item">Item 1.1
              <div className="list-group nested-sortable">
                <div className="list-group-item">Item 2.1</div>
                <div className="list-group-item">Item 2.3</div>
              </div>
            </div>
            <div className="list-group-item">Item 1.2
              <div className="list-group nested-sortable">
                <div className="list-group-item">Item 2.1</div>
                <div className="list-group-item">Item 2.2</div>
                <div className="list-group-item">Item 2.3</div>
              </div>
            </div>
            <div className="list-group-item">Item 1.3
              <div className="list-group nested-sortable">
                <div className="list-group-item nested-3">Item 3.1</div>
                <div className="list-group-item nested-3">Item 3.2</div>
                <div className="list-group-item nested-3">Item 3.3</div>
              </div>
            </div>
            <div className="list-group-item">Item 1.4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedSortableList;
