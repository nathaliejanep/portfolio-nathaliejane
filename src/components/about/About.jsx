import './about.scss';
import Me from '../../assets/images/nathalie.jpeg';

const About = () => {
  return (
    <div className="container about">
      <div className="left">
        <h2>Hello.</h2>
        <p>
          I'm Nathalie Persson Enriquez, 28 years old. Originally from Sweden,
          Gothenburg. I decided to move to the mountains in Switzerland, Verbier
          where I am currently based.
        </p>
        <p>
          I've been working as a Restaurant Manager here for 5 years. One of the
          many reasons I moved to Verbier is that I've always wanted to learn
          how to ski. Today, I'm proud to say that I'm great at skiing. It
          taught me that any skill can be learned if you put some effort into
          it.
        </p>

        <p>
          My aim today is to become a great Developer. I have always had an
          interest for technology and coding. A couple of years ago I started
          studying some basic courses and learned HTML, CSS, JavaScript and C#.
          I'm currently studying Frontend Development remotely at Medieinstituet
          where I am deepening my knowledge of coding. I like to do versatile
          work and really enjoy the borders between design, frontend and
          backend.
        </p>
      </div>
      <div className="right">
        <img src={Me} alt="Nathalie" className="img" />
      </div>
    </div>
  );
};

export default About;
