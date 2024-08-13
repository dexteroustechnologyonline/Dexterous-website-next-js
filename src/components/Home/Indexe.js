import Link from "next/link";
import React from "react";

const Indexe = () => {
  return (
    <section className="w3l-index6 py-5">
      <div className="container py-md-3 text-center">
        <div className="heading text-center mx-auto">
          <h3 className="head text-white">
            Want to know more about our App Development Service?
          </h3>
          <p className="my-3 head text-white">
            {" "}
            Let’s discuss your idea and see what our team can do for you. Hire
            the best web & app developer, who can help accelerate your idea into
            reality.
          </p>
        </div>
        <div className="buttons mt-5">
          <Link
            href="/contact"
            className="btn btn-outline-primary mr-2 theme-button lft-btn"
          >
            Contact Us
          </Link>
          <Link href="/contact" className="btn btn-primary theme-button ml-2">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Indexe;
