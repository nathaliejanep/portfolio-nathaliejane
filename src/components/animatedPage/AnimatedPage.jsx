import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

const Layout = () => {


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
