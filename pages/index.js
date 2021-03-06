import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
import { AnimatePresence,motion } from 'framer-motion';
import Modal from '../components/Modal'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cart } from '../store/store'

export default function Home() {
  const [cartData,setCart] = useRecoilState(cart);

  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("cartData"));
    setCart(existingEntries);
  },[])
  return (
    <div>
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
      <Head>
        <title>Ticktok Royal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Hero/>
      </motion.div>
      </div>    
  )
}
