import React from "react";
import "../App.css";

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
    <div className="testimonial-inner">
      {/* Left: Testimonials */}
      <div className="testimonial-left">
        <div className="testimonial-frame"></div>

        <div className="testimonial1">
          <div className="testimonial-content1">
            <p className="testimonial-text1">
              This is a great course. It helped me a lot. Thank you :)
            </p>
          </div>
          <div className="testimonial-name-image1">
            <div className="author-info1">
              <p className="testimonial-author1">Jane Cooper</p>
              <p className="testimonial-info1">Developer, Sony</p>
            </div>
            <div className="testimonial-image1">
              <img src="/author1.png" alt="author" className="author-image1" />
            </div>
          </div>
        </div>

        <div className="testimonial2">
          <div className="testimonial-content2">
            <p className="testimonial-text2">Amazing Work! Well done!</p>
          </div>
          <div className="testimonial-name-image2">
            <div className="author-info2">
              <p className="testimonial-author2">Jacob Jones</p>
              <p className="testimonial-info2">Designer, Facebook</p>
            </div>
            <div className="testimonial-image2">
              <img src="/author2.png" alt="author" className="author-image2" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="testimonial-right">
        <div className="testimonial-heading">
          <h2 className="testimonial-title">What our students say</h2>
        </div>

        <p className="testimonial-description">
          All students get access to all the videos and also the source code of
          the projects.<br/> You will also have access to a private Discord channel
          where you can discuss your doubts.
        </p>

        <a className="learn-more-btn" href="/learn-more">
          Learn More
        </a>
      </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
