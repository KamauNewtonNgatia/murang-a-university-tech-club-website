import React from "react";
import "./Events.css";
import eventData from "../../../../../data/Events";
import Title from "../../../../../components/Title/Title";
function EventsCard({
  eventName,
  eventAvatar,
  dayAndTime,
  venue,
  facilitator,
}) {
  return (
    <div className="event-card">
      <h3 className="event-name">{eventName}</h3>
      <img src={eventAvatar} alt={eventName} className="event-avatar" />
      <div className="event-details">
        <p>Time: {dayAndTime}</p>
        <p>Venue: {venue}</p>
        <p>{facilitator}</p>
      </div>
    </div>
  );
}

function Events() {
  return (
    <>
      <Title mainTitle="Weekly Schedule" />
      <div className="event-container">
        {eventData.map((event, index) => (
          <EventsCard
            key={index}
            eventName={event.eventName}
            eventAvatar={event.eventAvatar}
            dayAndTime={event.dayAndTime}
            venue={event.venue}
            facilitator={event.facilitator}
          />
        ))}
      </div>
    </>
  );
}

// function Events() {
//   return (
//     <div className="event-container">
//        <div className="event-card">
//       <h3 className="event-name">cybersecurity</h3>
//       <img src={Event1} alt="cybersecurity" className="event-avatar" />
//       <div className="event-details">
//         <p>Time: monday from 4pm to 7pm</p>
//         <p>Venue: computer lab F04</p>
//         <p>led by: Webster Ifedha.</p>
//       </div>
//     </div>
//     </div>

//   );
// }

export default Events;
