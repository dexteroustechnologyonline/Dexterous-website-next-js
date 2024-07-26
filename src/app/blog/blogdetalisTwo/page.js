import BreadCrum from "@/components/breadCrum";
import React from "react";
// import MetaData from "../../layout/MetaData";
const BlogDetalisTwo = () => {
  return (
    <>
      {/* <MetaData title="Find our Knowledge Sharing Blog | Mobile App Development Company" /> */}
      <BreadCrum title="Blog" cls="about" />

      <div>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <div className="container">
          <div className="col-md-12">
            <h1> Awareness Stage :-</h1>
            <ul>
              <li className="blogdetalis mt-lg-5">
                App Store Optimization (ASO):
              </li>
              <p className="digitalmarketing">
                Optimize your app store listing with relevant keywords,
                compelling descriptions, appealing screenshots, and positive
                reviews to improve visibility and increase downloads. Social
                Media Advertising: Run targeted ad campaigns on platforms like
                Facebook, Instagram, and Twitter to reach your target audience
                and generate awareness about your app.
              </p>
              <li className="blogdetalis">Influencer Marketing : </li>
              <p className="digitalmarketing">
                Collaborate with popular social media influencers or bloggers in
                your niche to promote your app and reach a wider audience.
              </p>
            </ul>
            <div>
              <span className="badge">Posted 2023-06-004 20:47:04</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <h1> Consideration Stage :-</h1>
            <ul>
              <li className="blogdetalis mt-lg-5">Content Marketing :</li>
              <p className="digitalmarketing">
                Create high-quality blog posts, videos, and tutorials related to
                your app's features or industry. Share this content on your
                website, social media channels, and relevant platforms to
                educate and engage potential users.
              </p>
              <li className="blogdetalis">Email Marketing : </li>
              <p className="digitalmarketing">
                Build an email list of interested users and send them regular
                updates, exclusive content, and special offers to keep them
                engaged and interested in your app.
              </p>
              <li className="blogdetalis">App Demo Videos: </li>
              <p className="digitalmarketing">
                Create engaging videos that showcase the key features and
                benefits of your app. Share these videos on your website, social
                media, and video-sharing platforms like YouTube to provide a
                hands-on experience to potential users.
              </p>
            </ul>
            <div>
              <span className="badge">Posted 2023-06-10 20:47:04</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetalisTwo;
