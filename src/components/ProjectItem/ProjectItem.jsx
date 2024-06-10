import React from 'react';
import './projectsItem.scss';

const ProjectItem = ({
  image,
  title,
  iconPaths,
  linkLive,
  linkGithub,
  description,
}) => {
  console.log(iconPaths);
  return (
    <div className="projects__item">
      <div className="projects__item-container">
        <img src={image} alt="shed-project" className="projects__item-image" />
        <div className="projects__item-overlay">
          <div className="projects__item-info">
            <div className="projects__item-icons">
              {iconPaths.map((iconPath, index) => (
                <img key={index} src={iconPath} alt="icon" className="icon" />
              ))}
            </div>

            <a
              href={linkLive}
              target="_blank"
              rel="noreferrer"
              className="projects__item-button"
            >
              Live Demo
            </a>

            <a
              href={linkGithub}
              target="_blank"
              rel="noreferrer"
              className="projects__item-button"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <h3>{title}</h3>
      <p className="projects__item-description">{description}</p>
    </div>
  );
};

export default ProjectItem;
