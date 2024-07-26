'use client'
import React, { useState } from "react";
import emailjs from "@emailjs/browser"
const Contact2 = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setmail] = useState("");
  const [massages, setMassages] = useState("");

  const nameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const mobileChange = (e) => {
    const value = e.target.value;
    setMobile(value);
  };
  const mailChange = (e) => {
    const value = e.target.value;
    setmail(value);
  };
  const massagesChange = (e) => {
    const value = e.target.value;
    setMassages(value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oumku8k",
        "template_esy4tqm",
        "#myForm",
        "8i7i_APkS7sZ9CqPl"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          if (response.text === "OK") {
            setName("");
            setMobile("");
            setmail("");
            setMassages("");
          }
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="contact-infubd section-gap py-lg-5 py-md-4">
          <div className="container">
            <div className="contact-grids d-grid">
              <div className="contact-left">
                <h4>Leave us a Message</h4>
                <h6>
                  For more info or inquiry about our products project, and
                  pricing please feel free to get in touch with us.
                </h6>
                <div className="hours">
                  <h6 className="info mt-3">Email:</h6>
                  <p>
                    <a href="mailto:care@dexterous.in" target={"_blank"}>
                      care@dexterous.in
                    </a>
                    <a href="mailto:support@dexterous.in" target={"_blank"}>
                      , support@dexterous.in
                    </a>
                    <a
                      href="mailto:dexterous.website@gmail.com"
                      target={"_blank"}
                    >
                      , dexterous.website@gmail.com
                    </a>
                  </p>
                  <h6 className="info mt-3">Address:</h6>
                  <p>
                    Dexterous Technology, Flat No - 3, First Floor, Sharada
                    Complex, Plot No - 203, Vengal Rao Nagar Rd, Kalyan Nagar
                    Phase 1, Siddarth Nagar, Ameerpet, Hyderabad, Telangana
                    500038
                  </p>
                  <h6 className="info mt-3">Contact:</h6>

                  <p
                    className="margin-top "
                    // style={{ display: "inline-block" }}
                  >
                    <a href="tel:+91-9908516950" target={"_blank"}>
                      +91-9908516950
                    </a>
                    <a href="tel:+91-9515705570" target={"_blank"}>
                      , +91-9515705570
                    </a>
                    <a href="tel:+91-4035506831" target={"_blank"}>
                      , +91-4035506831
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-right">
                <form
                  onSubmit={sendEmail}
                  id="myForm"
                  action=""
                  method="post"
                  className="signin-form"
                >
                  <div className="input-grids">
                    <input
                      type="text"
                      name="from_name"
                      id="w3lName"
                      placeholder="Your Name*"
                      className="contact-input"
                      value={name}
                      onChange={(e) => nameChange(e)}
                    />
                    <input
                      type="number"
                      name="Your Phone"
                      id="w3lName"
                      placeholder="Number*"
                      className="contact-input"
                      value={mobile}
                      onChange={(e) => mobileChange(e)}
                    />
                    <input
                      type="user_ email"
                      name="mail"
                      id="w3lSender"
                      placeholder="Your Email*"
                      className="contact-input"
                      required
                      value={mail}
                      onChange={(e) => mailChange(e)}
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="message"
                      id="w3lMessage"
                      placeholder="Type your message here*"
                      required
                      defaultValue={""}
                      value={massages}
                      onChange={(e) => massagesChange(e)}
                    />
                  </div>
                  <button className="btn btn-secondary btn-theme2 submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact2;
