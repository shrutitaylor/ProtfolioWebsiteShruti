import React from "react";

const GetInTouch = (props) => {
  return (
    <section className="main get_in_touch" id={props.id}>
      <div className="get_in_touche title">
        <h3>Get in touch</h3>
      </div>
      <p>
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <a href="mailto:shruti128770@gmail.com">Shoot me an Email</a>
    </section>
  );
};

export default GetInTouch;
