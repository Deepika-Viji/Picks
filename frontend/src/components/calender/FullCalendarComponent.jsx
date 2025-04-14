import React, { useContext, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from '../modal/EventModal';
import { DigiContext } from '../../context/DigiContext';
import DeleteConfirmationModal from '../modal/DeleteConfirmationModal';

const FullCalendarComponent = () => {
  const {
    INITIAL_EVENTS,
    handleDateSelect,
    renderEventContent,
    handleEventClick,
    handleEvents,
    handleAddNewModalHide,
    addNewEventModal,
    handleSaveEvent,
    selectedEvent,
    calendarRef,
    deleteConfirmationModal,
    handleCloseDeleteConfirmationModal,
    handleDelete,
  } = useContext(DigiContext);


  return (
    <div className="col-xxl-9 col-lg-8">
      <div className="panel">
        <div className="panel-body">
          <div id="calendar">
            <FullCalendar
              ref={calendarRef} // Set the ref to access the calendar instance
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              initialEvents={INITIAL_EVENTS}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
            />
          </div>
        </div>
      </div>

      <EventModal
        show={addNewEventModal}
        handleClose={handleAddNewModalHide}
        handleSaveEvent={handleSaveEvent}
        event={selectedEvent || {}}
      />
       <DeleteConfirmationModal
        show={deleteConfirmationModal}
        handleClose={handleCloseDeleteConfirmationModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FullCalendarComponent;
