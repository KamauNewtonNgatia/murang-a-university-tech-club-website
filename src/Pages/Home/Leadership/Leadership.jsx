import React from "react";
import "./Leadership.css";

import leadership from "../../../data/leadership";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Title from "../../../components/Title/Title";

function LeadershipCard({
  leaderAvatar,
  leaderName,
  leaderTitle,
  leaderBiography,
  LinkedIn,
  Twitter,
  Facebook,
}) {
  return (
    <div className="leader-card">
      <div className="leader-details">
        <img src={leaderAvatar} alt={leaderName} className="leader-avatar" />
        <h3 className="leader-name">{leaderName}</h3>
      </div>
      <h4 className="leader-title">{leaderTitle}</h4>
      <p className="leader-biography">{leaderBiography}</p>
      <div className="social-contact">
        {Twitter && (
          <a href={Twitter}>
            <FaXTwitter />
          </a>
        )}
        {Facebook && (
          <a href={Facebook}>
            <FaFacebook />
          </a>
        )}
        {LinkedIn && (
          <a href={LinkedIn}>
            <IoLogoLinkedin />
          </a>
        )}
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <>
      <Title mainTitle="MUTC Leaders" />
      <div className="leadership-container">
        {leadership.map((leader, index) => (
          <LeadershipCard
            key={index}
            leaderAvatar={leader.leaderAvatar}
            leaderName={leader.leaderName}
            leaderTitle={leader.leaderTitle}
            leaderBiography={leader.leaderBiography}
            LinkedIn={leader.LinkedIn}
            Twitter={leader.Twitter}
            Facebook={leader.Facebook}
          />
        ))}
      </div>
    </>
  );
}

export default Leadership;
