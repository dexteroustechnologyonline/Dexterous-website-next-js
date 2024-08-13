import React from "react";

const ClientCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <img className="card-img-top img-responsive" src={`${props.img}`} alt />
        <h3 className="card-title mt-2">{`${props.Name}`}</h3>
        <p className="sub-title mb-3">{`${props.Profile}`}</p>
        <p className="card-text"> {`${props.review}`}</p>
      </div>
    </div>
  );
};

export default ClientCard;
