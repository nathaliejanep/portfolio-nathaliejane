import { Outlet } from 'react-router-dom';
import './layout.scss';
import Nav from '../nav/Nav';

const Layout = () => {
  return (
    <div className="App">
      <Nav />

      <Outlet />
    </div>
  );
};

export default Layout;
