import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
