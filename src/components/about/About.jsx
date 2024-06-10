import './about.scss';
import Me from '../../assets/images/nathalie.png';
import CV from '../../assets/files/Nathalie_CV.pdf';

const About = () => {
  return (
    <div className="container about">
      <div className="left">
        <h2>Hello.</h2>
        <p>
          {/* I'm Nathalie, born in Sweden, Gothenburg. I decided to move to the
          mountains in Switzerland, Verbier where I am currently based. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore
          dolore distinctio cumque cupiditate asperiores deserunt! Inventore
          dolore impedit excepturi ex molestias, repellendus perferendis
          nesciunt deserunt reprehenderit eos, quisquam tempora provident.
          Voluptate ex dolores commodi corrupti magnam similique, autem quaerat
          optio natus asperiores fuga minima perferendis officia facere
          perspiciatis quos.
        </p>

        <p>
          Check out my
          <a href={CV} className="cv" target="blank">
            CV
          </a>
          and let's get in touch!
        </p>
      </div>
      <div className="right">
        <img src={Me} alt="Nathalie" className="img" />
      </div>
    </div>
  );
};

export default About;
