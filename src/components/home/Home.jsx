import './home.scss';
import Typewriter from 'typewriter-effect';
import reactLogo from '../../assets/icons/react.svg';
import typescriptLogo from '../../assets/icons/typescript.svg';
import nodejsLogo from '../../assets/icons/nodejs.svg';
import cssLogo from '../../assets/icons/css.svg';
const Home = () => {
  return (
    <div className="home">
      <Typewriter
        options={{
          hideCursorafterText: true,
        }}
        onInit={(typewriter) => {
          typewriter.typeString("I'm Nathalie.").stop().start();
        }}
        delay={1}
      />

      <p className="home__description">
        Creative developer student with a passion for technology and design.
        <br />
        Developing attractive and and user-friendly webpages and applications.
        Eager to learn and looking for new challenges.
      </p>

      <ul className="home__icons">
        <li className="icon">
          <img src={reactLogo} alt="" />
        </li>
        <li className="icon">
          <img src={typescriptLogo} alt="" />
        </li>
        <li className="icon">
          <img src={nodejsLogo} alt="" />
        </li>
        <li className="icon">
          <img src={cssLogo} alt="css logo" />
        </li>
      </ul>
    </div>
  );
};

export default Home;
