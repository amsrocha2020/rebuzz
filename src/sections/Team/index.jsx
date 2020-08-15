import React from "react";

import PeopleTeam from "../../components/PeopleTeam";

import photo1 from "../../assets/team-images/lorena-headshot.png";
import photo2 from "../../assets/team-images/michelle-CFO.png";
import photo3 from "../../assets/team-images/nick-brands.png";
import photo4 from "../../assets/team-images/adam-headshot.png";
import photo5 from "../../assets/team-images/kristina-headshot-1.png";
import photo6 from "../../assets/team-images/maro-cs.png";
import photo7 from "../../assets/team-images/tania.png";
import photo8 from "../../assets/team-images/christina-cmo.png";

import "./style.css";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="icon-team">
          <i className="widget_icon_1 fa fa-star fa-2x"></i>
        </div>
        <h1>The Team</h1>
        <div className="team-wrapper">
          <PeopleTeam
            photoPath={photo1}
            title="Lorena Valencia"
            subTitle="Chief Executive Officer / Co-Founder"
            text="Lorena is a technologist and seasoned business executive with a proven track record in building successful businesses."
            link="https://www.linkedin.com/in/lorena-valencia-a7a206b/"
          />
          <PeopleTeam
            photoPath={photo2}
            title="Michelle Ruttle"
            subTitle="Chief Financial Officer"
            text="Michelle has 20 years of experience in financial management & reporting, compliance, & financial modeling for private entities."
            link="https://www.linkedin.com/in/michelle-ruttle-0731902/"
          />
          <PeopleTeam
            photoPath={photo3}
            title="Nick Robles"
            subTitle="Chief Experience Officer"
            text="Nick has a skill for quickly identifying, developing, and launching new products, brands, and services for organizations."
            link="https://www.linkedin.com/in/nick-robles-4488b090/"
          />
          <PeopleTeam
            photoPath={photo4}
            title="Adam Barlam"
            subTitle="Chief Technology Officer / Co-Founder"
            text="Adam is an experienced technology entrepreneur and architect with a passion for Linux and open source software."
            link="https://www.linkedin.com/in/adambarlam/"
          />
          <PeopleTeam
            photoPath={photo5}
            title="Kristina Stavroff"
            subTitle="Chief Legal Officer"
            text="Kristina is an attorney by trade but also shares a passion in blockchain technology and decentralization."
            link="https://www.linkedin.com/in/kristina-stavroff-esq-25b12782/"
          />
          <PeopleTeam
            photoPath={photo6}
            title="Maro Valencia"
            subTitle="VP Customer Support"
            text="Maro has over 20 years experience in the customer service industry & always has the best interest for the customer in mind."
            link="#"
          />
          <PeopleTeam
            photoPath={photo7}
            title="Tania Tare"
            subTitle="Chief Influencing Officer / Co-Founder"
            text="Tania is a professional golfer and trick shot master who loves to tackle challenges both on and off the green."
            link="https://www.linkedin.com/in/tania-tare-3ba81759/"
          />
          <PeopleTeam
            photoPath={photo8}
            title="Christina Howell"
            subTitle="Chief Marketing Officer"
            text="Christina is a marketing whiz with 15 years experience in marketing and building diverse communities for a Fortune 500."
            link="https://www.linkedin.com/in/christina-howell-8386811/"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
