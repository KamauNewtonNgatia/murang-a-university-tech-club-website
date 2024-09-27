import React from 'react'
import "./Testimonials.css";
import testimonies from '../../data/testimonials';

function TestimonyCard({studentAvatar, studentName, text}) {
    return (
        <div className="testimony-card">
            <div className="card-customer-details">
            <img src= {studentAvatar} alt= {studentName} className="student-avatar" />
            <h3 className="student-name">{studentName}</h3>
        </div>
        <p className="testimony-text">{text}</p>
        </div>
        
    )
}


function Testimonials() {
  return (
    <div className="testimonies-container">
       {
        testimonies.map((student, i) => (
          <TestimonyCard
          key = {i}
          studentAvatar={student.studentAvatar}
          studentName={student.studentName}
          text={student.text}
          />
        ))
       }
    </div>
  )
}

export default Testimonials