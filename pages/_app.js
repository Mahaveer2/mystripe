import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence,motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return <><NextNProgress color='#9010e0'/>
  <AnimatePresence>
  <motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={{
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  }}
>
    <Component {...pageProps} /></motion.div></AnimatePresence>
  </>
}

export default MyApp
