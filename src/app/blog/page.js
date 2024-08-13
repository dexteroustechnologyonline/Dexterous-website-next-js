import React from "react";
import Breadcrum from "../../components/breadCrum";
import NewBlogCard from "../../components/Home/NewBlogCard";

import NewBlogCardOne from "../../components/Home/NewBlogCardOne";
import NewBlogCardTwo from "../../components/Home/NewBlogCardTwo";
import NewBlogCardFive from "../../components/Blog/NewBlogCardFive";
import NewBlogCardFour from "../../components/Blog/NewBlogCardFour";
import NewBlogCardThree from "../../components/Blog/NewBlogCardThree";
const Blog = () => {
  return (
    <>
      <Breadcrum title="Blog" cls="about" />
      <section className="w3l-news" id="news">
        <section id="grids5-block" className="py-5">
          <div className="container py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Recent posts and updates</h3>
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
                <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-md-4 mt-5">
                  <NewBlogCardThree
                    img="/styles/assets/images/blog/React Native.webp"
                    catagory="Dexterous,"
                    subcatagory="Technology"
                    date="jun 21, 2023"
                    title="React Native"
                    description="React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with."
                  />
                </div>
                <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-md-4 mt-5">
                  <NewBlogCardFour
                    img="/styles/assets/images/blog/Node.js.webp"
                    catagory="Dexterous,"
                    subcatagory="Technology"
                    date="jun 21, 2023"
                    title="Node.js"
                    description="Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser."
                  />
                </div>
                <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-md-4 mt-5">
                  <NewBlogCardFive
                    img="/styles/assets/images/blog/React.webp"
                    catagory="Dexterous,"
                    subcatagory="technology"
                    date="jun 21, 2023"
                    title="React"
                    description="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;
