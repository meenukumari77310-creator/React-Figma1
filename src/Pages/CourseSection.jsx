import React from "react";
import "../App.css";

const CourseSection = () => {
  return (
    <div className="course-section">
      <div className="outer-div">
        <div className="title">
          <span>Our Courses</span>
        </div>

        <div className="course-cards-container">

          {/* Card 1 */}
          <div className="course-card1">
            <img src="/course1.jpg" alt="course1" className="course-img" />
            <div className="course-title">
              <div className="title-text">Game Design Essentials</div>
              <div className="course-duration">
                <img src="/Clock.png" alt="clock" />
                <span className="duration">8 HRS</span>
              </div>
            </div>
            <div className="course-frame"></div>
          </div>

          {/* Card 2 */}
          <div className="course-card2">
            <img src="/course2.jpg" alt="course2" className="course-img" />
            <div className="course-title">
              <div className="title-text">Unity Game Engine<br/>Fundamentals</div>
              <div className="course-duration">
                <img src="/Clock.png" alt="clock" />
                <span className="duration">8 HRS</span>
              </div>
            </div>
            <div className="course-frame"></div>
          </div>

        </div>
        <div className="course-btn"><span className="course-btn-text">All Courses</span></div>
      </div>
      
    </div>
  );
};

export default CourseSection;
