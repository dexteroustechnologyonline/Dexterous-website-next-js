import React from "react";

const WhatsappIcon = () => {
  const phoneNumber = "+919908516950";

  return (
    <>
      <div className="whatsapp_float d-grid">
        <a href={`tel:${phoneNumber}`} target="_blank">
          <img
            src="/styles/assets/images/calling.png"
            // width="50px"
            className="whatsapp_float_btn"
            style={{
              height: "60px",
              width: "60px",
              backgroundColor: "#2e5deb",
              padding: "15px",
              color: "#fff",
            }}
          />
        </a>
        <a href="https://wa.me/919908516950" target="_blank" className="mt-2">
          <img
            src="/styles/assets/images/WhatsappLogo.png"
            width="50px"
            className="whatsapp_float_btn"
          />
        </a>
        {/* <div className="wp-icon" style={{}}>
          <Link to="/contact">
            <img src="/assets/images/massages.png" alt="" />
          </Link>
        </div> */}
        {/* <ul className="icon">
          <li>
            <div className="wp-icon">
              <Link to="/contact">
                <img src="/assets/images/massages.png" alt />
              </Link>
            </div>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default WhatsappIcon;
