import React from "react";

const TeamCard = (props) => {
  return (
    <div className="col-lg-3 col-6 team-wrap">
      <div className="team-info text-center">
        <div className="column position-relative">
          <a to="#url">
            <img
              width={`${props.width}`}
              src={`${props.image}`}
              alt
              className="img-fluid team-image"
            />
          </a>
        </div>
        <div className="column">
          <h3 className="name-pos">
            <a to="#url">{`${props.name}`}</a>
          </h3>
          <p>{`${props.profile}`}</p>
          <div className="social">
            <div className="social-left">
              <a to={`${props.facebook}`} className="facebook">
                <span className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a to={`${props.twitter}`} className="twitter">
                <span className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a to={`${props.linkedin}`}>
                <span className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a to={`${props.google}`}>
                <span className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
