import './home.scss';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faJs,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
const Home = () => {
  return (
    <div className="home">
      <Typewriter
        options={{
          hideCursorafterText: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("I'm a <br/> Frontend Developer.")
            .stop()
            .start();
        }}
      />

      <p className="home__description">
        Creative developer student with a passion for technology and design.
        <br />
        Developing attractive and and user-friendly webpages and applications.
        Eager to learn and looking for new challenges.
      </p>

      <div className="home__icons">
        <div className="icon">
          <FontAwesomeIcon icon={faJs} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faReact} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faAngular} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faNode} />
        </div>
      </div>
    </div>
  );
};

export default Home;
