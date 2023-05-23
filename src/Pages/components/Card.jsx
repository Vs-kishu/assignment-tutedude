import React from "react";
import "./Card.css";

const CardData = [
  {
    id: 1,
    name: "Dhiraj Saxena",
    date: "14 Sep, 2022",
    EnrolledCourses: "Courses Enrolled(6)",
    course: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
    amount: "₹185",
  },
  {
    id: 2,
    name: "Subhash Mishra",
    date: "15 Sep, 2022",
    EnrolledCourses: "Courses Enrolled(23)",
    course: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    amount: "₹485",
  },
  {
    id: 3,
    name: "Prafull Kumar",
    date: "16 Sep, 2022",
    EnrolledCourses: "Courses Enrolled(23)",
    course: [
      "UI/UX",
      "Photoshop",
      "Illustrator",
      "Python",
      "MERN",
      "Java",
      "C++",
    ],
    amount: "₹485",
  },
];

const Card = () => {
  return (
    <div className="stds-cards">
      {CardData.map((std) => (
        <div key={std.id} className="std-card">
          <div className="std-name">
            <h2 className="bold-medium">{std.name}</h2>
            <p className="medium">{std.date}</p>
          </div>
          <section>
            <p className="medium">{std.EnrolledCourses}</p>

            <div class="enroll-courses">
              {std.course.map((c, index) => (
                <span key={index} className="course">
                  {c}
                </span>
              ))}
            </div>
          </section>
          <div className="amount">
            <p className="medium-light">Referral Amount</p>
            <span className="large-bold">{std.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
