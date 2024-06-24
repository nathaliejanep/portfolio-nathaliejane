import React from 'react';
import './projects.scss';
import ProjectItem from '../ProjectItem/ProjectItem';
import ShedProject from '../../assets/images/shed-hotel.png';
import MovieFlixProject from '../../assets/images/movieflix-db.png';
import Obscoin from '../../assets/images/obscoin.png';
import WestcoastEd from '../../assets/images/westcoast-education.png';
import ReactIcon from '../../assets/icons/react.svg';
import JsIcon from '../../assets/icons/javascript.svg';
import TsIcon from '../../assets/icons/typescript.svg';
import SassIcon from '../../assets/icons/sass.svg';
import PubnubIcon from '../../assets/icons/pubnub.svg';
import BootstrapIcon from '../../assets/icons/bootstrap.svg';

export const Projects = () => {
  const shedHotelDesc = `
  The Shed Hotel website showcases a hotel in Verbier, Switzerland, with an intuitive and visually appealing platform. <br />  <br />
  Built using React, it features dynamic components like theme picker, an image slider and interactive photo gallery. JavaScript enables dynamic content updates, while Sass ensures clean, modular, and maintainable CSS.  <br /> <br />
  This project highlights my skills in Frontend Development, UI/UX design, and deployment.
  `;

  const obscoinDesc = `
  Obscoin is a blockchain-based project developed as a group assignment in school. <br />  <br />
  It features intuitive functionalities for creating and retrieving transactions, mining and adding new blocks, and listing all blocks in the blockchain. Seamless synchronization across nodes is achieved through PubNub, ensuring consistency and reliability.  <br />  <br />
  This project highlights my skills in blockchain technology, network synchronization and teamwork.
  `;

  const westcoastEdDesc = `
  West Coast Education Platform is school project tailored for administrators and users, it allows course browsing, booking, and management.  <br />  <br />
  Built with Vanilla TypeScript and Bootstrap, it features a JSON server for data handling. Although purely Frontend-based, it includes login and signup forms for testing. <br />  <br />
  This project underscores my skills in creating a quick frontend design, and proficiency in Vanilla TypeScript without relying on a framework.
  `;

  const watchFlixDesc = `
  WatchFlix DB is a basic project designed to fetch and display movie details from an external API. <br />  <br />
  Users can search for movies and display information in real-time. <br />  <br />
  This projects highlights my skills in React, API integration and creating straightforward yet functional user interfacess for efficient data retrieval.
  `;
  return (
    <>
      <div className="projects">
        <h1>Selected works</h1>

        <p>*Hover over any project to learn more</p>
        <div className="projects__wrapper">
          <ProjectItem
            image={ShedProject}
            iconPaths={[ReactIcon, JsIcon, SassIcon]}
            linkLive="https://shedhotels.com/"
            linkGithub="https://github.com/nathaliejanep/ShedHOTEL"
            title="Shed Hotel Website"
            description={shedHotelDesc}
          />
          <ProjectItem
            image={Obscoin}
            iconPaths={[ReactIcon, JsIcon, PubnubIcon]}
            linkGithub="https://github.com/nathaliejanep/obscoin"
            title="Obscoin"
            description={obscoinDesc}
          />

          <ProjectItem
            image={WestcoastEd}
            iconPaths={[TsIcon, BootstrapIcon, ReactIcon]}
            linkGithub="https://github.com/nathaliejanep/WestcoastEducation"
            title="Westcoast Education"
            description={westcoastEdDesc}
          />

          <ProjectItem
            image={MovieFlixProject}
            iconPaths={[ReactIcon, JsIcon]}
            linkGithub="https://github.com/nathaliejanep/Movie-Search"
            title="WatchFlix DB"
            description={watchFlixDesc}
          />
        </div>
      </div>
    </>
  );
};
