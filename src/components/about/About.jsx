import './about.scss';
import Me from '../../assets/images/nathalie.jpeg';
import CV from '../../assets/files/Nathalie_CV.pdf';

const About = () => {
  return (
    <div className="container about">
      <div className="left">
        <h2>Hello.</h2>
        <p>
          I'm Nathalie, born in Sweden, Gothenburg. I decided to move to the
          mountains in Switzerland, Verbier where I am currently based.
        </p>
        <p>
          I've been working as a Restaurant Manager for 5 years. One of the many
          reasons I moved to Verbier is that I've always wanted to learn how to
          ski. Today, I'm proud to say that I'm great at skiing. It taught me
          that any skill can be learned if you put some effort into it.
        </p>

        <p>
          My aim today is to become a great Developer. I have always had an
          interest for technology and coding. I'm currently studying Frontend
          Development remotely at Medieinstituet where I am deepening my
          knowledge of coding. I like to do versatile work and really enjoy the
          borders between design and frontend.
        </p>
        <p>
          Check out my{' '}
          <a href={CV} className="cv" target="blank">
            CV
          </a>{' '}
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
