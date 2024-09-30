import React from "react";
import Title from "../Title/Title";
import "./Form.css";
import trackData from "../../data/Tracks";

function Form() {
  return (
    <div>
      <Title mainTitle="Application Form" />
      <form className="form" id="form">
        <div className="form-group">
          <label htmlFor="first-name" className="form-group-label">
            first name
          </label>
          <input
            type="text"
            id="first-name"
            className="form-group-input"
            placeholder=" first name eg newton"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name" className="form-group-label">
            last name
          </label>
          <input
            type="text"
            id="last-name"
            className="form-group-input"
            placeholder=" last name eg kamau"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            email address
          </label>
          <input
            type="email"
            id="email"
            className="form-group-input"
            placeholder=" email address eg newtonkamau@gmail.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-group-label">
            phone number
          </label>
          <input
            type="number"
            id="phone"
            className="form-group-input"
            placeholder="  eg +254712345678"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="about" className="form-group-label">
            about you
          </label>
          <textarea
            id="about"
            className="form-group-input"
            placeholder=" tell us more about yourself and why you've chosen this course"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="select" className="form-group-label">
            select a track
          </label>
          <select id="select" className="form-group-input">
            <option>--select a track--</option>
            {trackData.map((track, index) => (
              <option value={track.trackName}>{track.trackName}</option>
            ))}
          </select>
        </div>
        <button className="submit-btn">submit</button>
      </form>
    </div>
  );
}

export default Form;
