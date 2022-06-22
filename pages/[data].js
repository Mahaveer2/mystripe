import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import getStripe from '../lib/get_stripe';
import Nav from '../components/Nav';
import Link from 'next/link';
import { AnimatePresence,motion } from 'framer-motion';

function Cart() {
  
  const router = useRouter();

  // const redirectToCheckout = async () => {
  //   const {data:{id}}  = await axios.post('api/checkout_sessions/',{
  //    item:{
  //     price:data*2,
  //     follower:data*100
  //    }
  //   });

  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });

  // }

  const {data} = router.query;
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
      {(data == '0'||data > 100 || !!(data % 1)) ? (
        <div>
          <Nav></Nav>
          <h1 className='text-center text-2xl mt-5'>Invalid Value</h1>
          <Link href='/'>
          <a className='bg-green p-4 rounded-lg text-white m-20'>Go home</a>
          </Link>
        </div>
      ):(
        <div>
        <Nav/>
      <div className=''>
      
      <h1 className='text-3xl text-center mt-[60px]'>Confirm your payment <br/>Mr. {router.query.username}</h1>
      <div className='flex justify-center'>
      <div className='w-1/2 mt-4 p-3 shadow flex justify-center items-center gap-2 flex-col'>
        <h2 className='text-2xl'><span className='text-indigo-500'>{data * 100 }</span> Followers</h2>
        <h2 className='text-xl'>${data}</h2>
      <button className='w-full bg-indigo-500 text-white p-3 rounded-lg' onClick={() => alert('Need stripe details!')}>Checkout</button></div>
      </div>
      </div>
      </div>
      ) }
      </motion.div>
      </div>
  )
}

export default Cart