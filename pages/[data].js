import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import getStripe from '../lib/get_stripe';
import Nav from '../components/Nav';

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
    <div className=''>
    <Nav/>
    <h1 className='text-3xl text-center mt-[60px]'>Confirm your payment</h1>
    <div className='bg-indigo-500 text-white rounded-lg p-3'>Followers: {data * 100} <hr></hr> Price: ${data*2}<br>
    </br>
    <button className='bg-white text-black p-3 rounded-lg' onClick={() => alert('Need stripe details!')}>Checkout</button></div>
    </div>
  )
}

export default Cart