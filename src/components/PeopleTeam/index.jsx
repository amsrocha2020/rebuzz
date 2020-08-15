import React from 'react';

import './style.css';

const PeopleTeam = ({ photoPath, title, subTitle, text, link }) => {
  return (
    <div className="team-player">
      <img src={photoPath} alt={title} />
      <h3>{title}</h3>
      <p className="team-position">{subTitle}</p>
      <p>{text}</p>
      <a href={link}><i className="fa fa-linkedin fa-1x"></i></a>
    </div>
  )
}

export default PeopleTeam;