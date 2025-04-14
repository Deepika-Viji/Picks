import React, { useEffect } from 'react';
import Sortable from 'sortablejs';

const NestableTeam = () => {
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
          <h5>Team Nested List</h5>
        </div>
        <div className="panel-body">
          <p className="fs-14 pb-1 mb-10">
            Use <code>nested-sortable</code> className to list-group className to set a nested list with sortable items where images are attached within a list-group-item div element.
          </p>
          <div id="nestableList3" className="list-group nested-sortable">
            <div className="list-group-item">
              <span className="team-list">
                <span className="avatar"><img src="assets/images/admin.png" alt="Image" /></span>
                <span className="part-txt">
                  <span className="name">Shaikh Abu Dardah</span>
                  <span className="position">Managing Director</span>
                </span>
              </span>
              <div className="list-group nested-sortable">
                <div className="list-group-item">
                  <span className="team-list">
                    <span className="avatar"><img src="src/assets/images/avatar-2.png" alt="Image" /></span>
                    <span className="part-txt">
                      <span className="name">Leo Sims</span>
                      <span className="position">Project Manager</span>
                    </span>
                  </span>
                  <div className="list-group nested-sortable">
                    <div className="list-group-item">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-4.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Jasmine Fletcher</span>
                          <span className="position">UI/UX Designer</span>
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-5.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Lilly Ford</span>
                          <span className="position">UI/UX Designer</span>
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-6.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Dylan Parkin</span>
                          <span className="position">Front End Developer</span>
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-3.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Megan Hawkins</span>
                          <span className="position">Front End Developer</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <span className="team-list">
                    <span className="avatar"><img src="src/assets/images/avatar-3.png" alt="Image" /></span>
                    <span className="part-txt">
                      <span className="name">Naomi Jennings</span>
                      <span className="position">Project Manager</span>
                    </span>
                  </span>
                  <div className="list-group nested-sortable">
                    <div className="list-group-item nested-3">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-2.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Michael Morgan</span>
                          <span className="position">Laravel Developer</span>
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item nested-3">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-4.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Ryan Chapman</span>
                          <span className="position">PHP Developer</span>
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item nested-3">
                      <span className="team-list">
                        <span className="avatar"><img src="src/assets/images/avatar-5.png" alt="Image" /></span>
                        <span className="part-txt">
                          <span className="name">Hayden Bull</span>
                          <span className="position">Wordpress Developer</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestableTeam;
