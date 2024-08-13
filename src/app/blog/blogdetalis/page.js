import React from "react";
// import NewBlogCard from "../../components/blog/NewBlogCard";
// import MetaData from "../../layout/MetaData";
import Breadcrum from "../../../components/breadCrum";

const BlogDetalis = () => {
  return (
    <>
      {/* <MetaData title="Find our Knowledge Sharing Blog | Mobile App Development Company" /> */}
      <Breadcrum title="Blog" cls="about" />

      <div>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <div className="container">
          <div className="col-md-12">
            <h1>MongoDB:</h1>
            <p>
              Overview: MongoDB is a widely-used NoSQL document database known
              for its flexibility and scalability. It stores data in a flexible
              JSON-like format called BSON, making it suitable for a variety of
              use cases.
            </p>
            <ul>
              <li className="blogdetalis">Features</li>
              <ul className="blogdetalis1">
                <li className="blogdetalis2">
                  Rich querying capabilities with support for complex queries
                  and indexing.
                </li>
                <li className="blogdetalis2">
                  Horizontal scalability through sharding, allowing efficient
                  distribution of data across multiple servers.
                </li>
                <li className="blogdetalis2">
                  Flexible schema design, enabling easy modifications and
                  accommodating evolving data structures.
                </li>
                <li className="blogdetalis2">
                  Powerful aggregation framework for performing advanced data
                  analysis and reporting.
                </li>
              </ul>
            </ul>
            <div>
              <span className="badge">Posted 2023-06-10 20:47:04</span>
            </div>
            <hr />
            <h1>Firebase</h1>
            <p>
              Firebase is a comprehensive platform offered by Google that
              includes a variety of tools for building web and mobile
              applications. It provides a real-time database and various backend
              services, making it ideal for rapid application development.
            </p>
            <ul>
              <li className="blogdetalis">Features</li>
              <ul className="blogdetalis1">
                <li className="blogdetalis2">
                  Real-time data synchronization across clients, enabling
                  collaborative and responsive applications.
                </li>
                <li className="blogdetalis2">
                  Serverless architecture, eliminating the need for server-side
                  code management.
                </li>
                <li className="blogdetalis2">
                  Authentication and authorization services for secure user
                  management.
                </li>
                <li className="blogdetalis2">
                  Cloud Functions for serverless computing and executing custom
                  backend logic.
                </li>
                <li className="blogdetalis2">
                  Easy integration with other Firebase services like hosting,
                  storage, and analytics.
                </li>
              </ul>
            </ul>
            <div>
              <span className="badge">Posted 2023-06-004 20:47:04</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetalis;
