import React, { useContext } from 'react';
import { DigiContext } from '../../context/DigiContext';

const UpcomingEvents = () => {
  const {currentEvents} = useContext(DigiContext)
  return (
    <div className="panel">
      <div className="panel-header">
        <h5>Upcoming Events</h5>
      </div>
      <div className="panel-body">
        <div className="upcoming-event-list sidebar-event-list">
          {currentEvents.map((event, index) => (
            <div
            className={`fc-day-grid-event fc-h-event fc-event fc-start fc-end ${event.classNames} fc-draggable`} key={index}>
              <div className="fc-content">
                <span className="fc-title">
                  {event.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
