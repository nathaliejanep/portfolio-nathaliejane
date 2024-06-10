import React from 'react';
import './projects.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import ShedProject from '../../assets/images/shed-hotel.png';
import ReactIcon from '../../assets/icons/react.svg';
import JsIcon from '../../assets/icons/typescript.svg';

export const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>Selected works</h1>

        <p>*Hover over any project to learn more</p>
        <div className="projects__wrapper">
          <ProjectItem
            image={ShedProject}
            iconPaths={[ReactIcon, JsIcon]}
            linkLive="https://shedhotels.com/"
            linkGithub="https://github.com/nathaliejanep/ShedHOTEL"
            title="Shed Hotel Website"
            description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                          voluptatem, eius possimus quod assumenda culpa minima. Velit molestias
                          dolorem deleniti dolorum aliquam tempora vitae odit! Repudiandae ducimus
                          quae dolore animi!"
          />
        </div>
      </div>
    </>
  );
};
