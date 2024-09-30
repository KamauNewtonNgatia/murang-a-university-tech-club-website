import React from "react";
import "./Tracks.css";
import trackData from "../../../../data/Tracks";

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
          <button className="button">Apply</button>
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

// // function Tracks() {
// //   return (
// //     <div className="tracks-container">
// //        <div className="tracks-details">
// //        <h3 className="track-title">Cyber security</h3>
// //         <img src= {Track1}  alt= "Cyber security" className="track-avatar" />

// //         <div className="track-description">
// //           <p className="description">Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.</p>
// //           <button className='button'>Apply</button>
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }

// export default Tracks
