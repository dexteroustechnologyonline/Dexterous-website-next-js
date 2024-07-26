import React from "react";

const Contacts = () => {
  return (
    <>
      <section className="w3l-contacts-12" id>
        <div className="contact-top">
          {/* map */}
          <div className="map map mt-md-0 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.297712094542!2d78.4328128!3d17.4441794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x772b0f37fd3f8dc9!2sDexterous%20Technology!5e0!3m2!1sen!2sin!4v1644393821110!5m2!1sen!2sin"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          {/* //map */}
        </div>
      </section>
    </>
  );
};

export default Contacts;
