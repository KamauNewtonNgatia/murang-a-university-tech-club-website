import React from "react";
import Event1 from "../../../../../assets/cybersecurity.jpeg";
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
      div.{" "}
      <event-details>
        <p>{dayAndTime}</p>
        <p>{venue}</p>
        <p>{facilitator}</p>
      </event-details>
    </div>
  );
}

function Events() {
  return (
    <div className="event-container">
      <h3 className="event-name">cybersecurity</h3>
      <img src={Event1} alt="cybersecurity" className="event-avatar" />
      <div className="event-details">
        <p>Time: monday from 4pm tp 7pm</p>
        <p>Venue: computer lab F04</p>
        <p>led by: Webster Ifedha.</p>
      </div>
    </div>
  );
}

export default Events;
