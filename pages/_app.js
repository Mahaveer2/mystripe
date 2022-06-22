import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { AnimatePresence,motion } from 'framer-motion';
import {
  RecoilRoot,
} from 'recoil';

function MyApp({ Component, pageProps }) {
  return <div>
    <RecoilRoot>
    <NextNProgress color='#9010e0'/>

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

    <Component {...pageProps} />
    </motion.div>
    </RecoilRoot>
    </div>

}

export default MyApp
