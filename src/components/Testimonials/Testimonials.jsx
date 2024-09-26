import React from 'react'
import "./Testimonials.css"
import student1 from '../../assets/student1.jpg'

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
        <TestimonyCard
        studentAvatar={student1}
        studentName="john oduor"
        text="MUTC has been a game-changer, helping me gain practical coding skills and hands-on experience in web development."
        />
    </div>
  )
}

export default Testimonials