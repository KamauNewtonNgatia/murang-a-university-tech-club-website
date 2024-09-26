import React from 'react'
import "./Testimonials.css"
import student1 from '../../assets/student1.jpg'
import student2 from '../../assets/student2.jpg'
import student3 from '../../assets/student3.jpg'
import student4 from '../../assets/student4.jpg'

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

      <TestimonyCard
        studentAvatar={student2}
        studentName="leah wambui"
        text="Joining MUTC boosted my confidence in UI/UX design, and the supportive community has been amazing for learning."
        />

      <TestimonyCard
        studentAvatar={student3}
        studentName="fidelis miriam"
        text="Through MUTC, I’ve learned cybersecurity techniques that have truly expanded my knowledge and career opportunities."
        />

       <TestimonyCard
        studentAvatar={student4}
        studentName="peterson chege"
        text="The collaborative environment at MUTC helped me grow in cloud engineering, while networking with like-minded tech enthusiasts."
        />
    </div>
  )
}

export default Testimonials