import { motion } from 'framer-motion';

const animations = {
  intitial: { opacity: 0 },
  animate: { opacity: 1, x: '0' },
  exit: { opacity: 0, transition: { duration: 1 }, x: '300px' },
};
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      inital="intital"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
export default AnimatedPage;
