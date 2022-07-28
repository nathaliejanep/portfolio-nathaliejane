import { Outlet } from 'react-router-dom';
import './layout.scss';
import Nav from '../nav/Nav';
import AnimatedPage from '../animatedPage/AnimatedPage';

const Layout = () => {
  return (
    <>
      <div className="App">
        <Nav />
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </div>
    </>
  );
};

export default Layout;
