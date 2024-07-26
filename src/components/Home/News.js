import React from "react";
import NewBlogCard from "./NewBlogCard";
import NewBlogCardOne from "./NewBlogCardOne";
import NewBlogCardTwo from "./NewBlogCardTwo";
const News = () => {
  return (
    <section className="w3l-news" id="news">
      <section id="grids5-block" className="py-5">
        <div className="container py-lg-3">
          <div className="heading text-center mx-auto">
            <h3 className="head">Recent posts and updates</h3>

            <p className="my-3 head">
              {" "}
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </p>
          </div>
          <div className="grid-view">
            <div className="row">
              <div className="col-lg-4 col-md-6 mt-md-4 mt-5">
                <NewBlogCardTwo
                  img="/styles/assets/images/blog/blog3.webp"
                  catagory="Dexterous,"
                  subcatagory="Marketing"
                  date="jun 10, 2023"
                  title="Marketing Strategies for Mobile app Funnel"
                  description="Advertisers and marketers know about the traditional way of the mobile app marketing funnel and the strategies.."
                />
              </div>

              <div className="col-lg-4 col-md-6 mt-md-4 mt-4">
                <NewBlogCard
                  img="/styles/assets/images/blog/blog1.webp"
                  catagory="Dexterous,"
                  subcatagory="Technology"
                  date="jun 10, 2023"
                  title="MongoDB Vs Firebase Two Best Databases in 2023"
                  description="The argument between Firebase vs MongoDB has been fumed in the development business for a long time.."
                />
              </div>

              <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-md-4 mt-5">
                <NewBlogCardOne
                  img="/styles/assets/images/blog/blog2.webp"
                  catagory="Dexterous,"
                  subcatagory="Marketing"
                  date="jun 10, 2023"
                  title="Top Digital Marketing Trends In 2023"
                  description="The digital marketing landscape changes every year, and some years are more notable trends than others.."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default News;
