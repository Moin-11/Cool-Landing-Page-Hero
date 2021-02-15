import React from "react";

const LandingMain = () => {
  return (
    <>
      <div className="content">
        <h1>Awesome Tagline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          delectus alias saepe, eveniet dolores laboriosam harum quod quidem
          quae facere. Ut iusto quos doloremque repellendus natus ex sequi
          voluptas aut?
        </p>
        <div className="btn-group">
          <a href="#" className="color-1">
            Do More
          </a>

          <a href="#">Learn More</a>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,32L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default LandingMain;
