import Link from "next/link";
import React from "react";

const BreadCrum = (props) => {
  return (
    <section className={`w3l-${props.cls}-breadcrum`} id={`${props.id}`}>
      <div className="breadcrum-bg">
        <div className="container py-5">
          <h2>{props.title}</h2>
          <p>
            <Link href="/">Home</Link> &nbsp; / &nbsp; {props.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BreadCrum;
