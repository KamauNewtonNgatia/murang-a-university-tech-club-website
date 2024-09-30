import React from "react";
import "./Tracks.css";
import trackData from "../../../../data/Tracks";
import { Link } from "react-router-dom";
import Title from "../../../../components/Title/Title";
import Form from "../../../../components/Form/Form";

function TrackCard({ trackAvatar, trackName, trackDescription }) {
  return (
    <div className="tracks-card">
      <div className="tracks-details">
        <h3 className="track-title">{trackName}</h3>
        <img src={trackAvatar} alt={trackName} className="track-avatar" />
        <div className="track-description">
          <p className="description">{trackDescription}</p>
          <button
            className="button"
            onClick={() => (window.location.href = "#form")}
          >
            <a href="#form">Apply</a>
          </button>
        </div>
      </div>
    </div>
  );
}

function Tracks() {
  return (
    <>
      <Title mainTitle="Tracks Offered at MUTC" />
      <div className="tracks-container">
        {trackData.map((track, index) => (
          <TrackCard
            key={index}
            trackAvatar={track.trackAvatar}
            trackName={track.trackName}
            trackDescription={track.trackDescription}
          />
        ))}
      </div>
      <Form />
    </>
  );
}

export default Tracks;
