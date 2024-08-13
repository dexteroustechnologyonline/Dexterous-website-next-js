import React from "react";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <section className="w3l-team-main" id="team">
      <div className="team py-5">
        <div className="container py-lg-4">
          <div className="heading text-center mx-auto">
            <h3 className="head">Our Team</h3>
            <p className="my-3 head ">
              {" "}
              Our team members respect, trust & care for each other. Our
              greatest strength is our team spirit & dedication towards the
              common goal of client satisfaction.
            </p>
          </div>
          <div className="row team-row pt-3 mt-5">
            <TeamCard
              width="400px"
              image="styles/assets/images/team/1.webp"
              name="Arun Sinha"
              profile="Honorary President"
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />

            {/* end team member */}

            <TeamCard
              width="400px"
              image="styles/assets/images/team/2.webp"
              name="Neha Sinha"
              profile="Finance Head"
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />

            {/* end team member */}

            <TeamCard
              width="400px"
              image="styles/assets/images/team/3.webp"
              name="Sharad Sinha"
              profile="Technical Head"
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />

            {/* end team member */}

            <TeamCard
              width="400px"
              image="styles/assets/images/team/4.webp"
              name="N. Manoj Kumar "
              profile="Senior Project Engineer "
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />

            <TeamCard
              width="400px"
              image="styles/assets/images/team/6.webp"
              name="Tejbhan Kushwaha"
              profile="Project Engineer"
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />
            <TeamCard
              width="400px"
              image="styles/assets/images/team/7.webp"
              name="Janmejaya Jena"
              profile="Senior Project Engineer "
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />
            <TeamCard
              width="400px"
              image="styles/assets/images/team/Darshanam Mahesh.webp"
              name="Darshanam Mahesh"
              profile="Project Engineer "
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />
            <TeamCard
              width="400px"
              image="styles/assets/images/team/Musku Nishitha.webp"
              name="Musku Nishitha"
              profile="Project Engineer"
              facebook="#"
              twitter="#"
              linkedin="#"
              google="#"
            />

            {/* <TeamCard
                width="400px"
                image="assets/images/team/5.jpeg"
                name="A. Mahesh"
                profile="Marketing Head "
                facebook="#"
                twitter="#"
                linkedin="#"
                google="#"
              />

              <TeamCard
                width="400px"
                height="400px"
                image="assets/images/team/8.jpg"
                name="P.Ravi Kumar"
                profile="Project Engineer"
                facebook="#"
                twitter="#"
                linkedin="#"
                google="#"
              />

              <TeamCard
                width="400px"
                image="assets/images/team/9.jpg"
                name="Lingala Krishna"
                profile="Project Engineer"
                facebook="#"
                twitter="#"
                linkedin="#"
                google="#"
              />

              <TeamCard
                width="400px"
                image="assets/images/team/10.jpeg"
                name="M.Madhusudhan"
                profile="Project Engineer"
                facebook="#"
                twitter="#"
                linkedin="#"
                google="#"
              />

              <TeamCard
                width="400px"
                image="assets/images/team/11.jpg"
                name="G.Prem Chand"
                profile="Project Engineer"
                facebook="#"
                twitter="#"
                linkedin="#"
                google="#"
              /> */}

            {/* end team member */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
