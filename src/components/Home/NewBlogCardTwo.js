

import Link from "next/link";
import React from "react";

const NewBlogCardTwo = (props) => {
  return (
    <div className="grids5-info">
      <a to="#" className="d-block zoom">
        <img src={`${props.img}`} alt className="img-fluid news-image" />
      </a>
      <div className="blog-info">
        <ul className="news-top">
          <li>
            <a to="#">{`${props.catagory}`}</a>
          </li>
          <li>
            <a to="#">{`${props.subcatagory}`}</a>
          </li>
        </ul>
        <p className="date">{`${props.date}`}</p>
        <h4>
          <a to="#">{`${props.title}`}</a>
        </h4>
        <p className="blog-text">{`${props.description}`}</p>
        <Link href="blog/blogdetalisTwo" className="btn btn-news">
          Read More <span className="fa fa-angle-right pl-1" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default NewBlogCardTwo;
