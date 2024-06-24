import './about.scss';
import Me from '../../assets/images/nathalie.jpg';
import CV from '../../assets/files/Nathalie_CV.pdf';

const About = () => {
  return (
    <div className="container about">
      <div className="left">
        <h2>Hello.</h2>
        <p>
          I am a blockchain developer based in Switzerland, blending my
          vocational degree in Frontend Development with a growing passion for
          Backend Development and Blockchain technology.
          <br />
          <br />
          Outside of coding, I find inspiration in outdoor adventures like
          skiing and hiking, complemented by a love for movies.
          <br />
          <br />
          My goal is to leverage blockchain's transformative potential to drive
          innovation, I am driven by a commitment to continuous learning and
          following advancing technologies.
        </p>

        <p>
          Want to know more about my experiences?
          <br />
          <br />
          <a href={CV} className="cv" target="blank">
            Detailed CV
          </a>
        </p>
      </div>
      <div className="right">
        <img src={Me} alt="Nathalie" className="img" />
      </div>
    </div>
  );
};

export default About;
