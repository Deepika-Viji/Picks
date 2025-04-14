import { useEffect } from "react";
import { Draggable } from "@fullcalendar/interaction";

const ReservedEvents = () => {
  useEffect(() => {
    const externalEventsContainer = document.getElementById("external-events");

    new Draggable(externalEventsContainer, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        const title = eventEl.innerText;
        return {
          title,
        };
      },
    });
  }, []);

  return (
    <div className="panel mb-30">
      <div className="panel-header">
        <h5>Reserved Event</h5>
      </div>
      <div className="panel-body">
        <div id="external-events" className="sidebar-event-list">
          <div className="fc-event">My Event 1</div>
          <div className="fc-event">My Event 2</div>
          <div className="fc-event">My Event 3</div>
          <div className="fc-event">My Event 4</div>
          <div className="fc-event">My Event 5</div>
        </div>
      </div>
    </div>
  );
};

export default ReservedEvents;
