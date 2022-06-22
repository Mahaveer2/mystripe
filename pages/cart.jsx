import axios from 'axios';
import Head from 'next/head'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import getStripe from '../lib/get_stripe';
import Nav from '../components/Nav';
import { cart } from '../store/store'
import DataGrid from 'react-data-grid';


function Cart() {

  const [cartData,setCart] = useRecoilState(cart);
  let initialPrice = 0;
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

  const remove = (i) => {
    const list = cartData.filter((_,e) => e != i);
    setCart(list);
    localStorage.setItem('cartData',JSON.stringify(list))
  }

  return (
    <div>
      <Head>
        <title>TikRoyal | Cart</title>
      </Head>
      <Nav/>
      <div className='bg-hero h-[10vh] z-1'/>
      <div className=''>
        {cartData.length == 0 && <p className='p-5'>No items...</p>}
      {cartData.map((e,i) => (
        <div className='product  border-gray-200 border-b m-5  p-3 flex items-center justify-between'>
          <h1 className='text-xl'>{e?.username}</h1>
          <p>Followers: {e?.package * 100}</p>
          <p>Price: {e?.package * 2}</p>
          <button className='btn btn-error' onClick={() => remove(i)}>&times;</button>
          </div>
      ) )}
        <div className='flex p-10 justify-between'>
          <h1>Total Price : ${cartData ? cartData.map((_,p) => initialPrice += _.package) : 0}</h1>
          <button onClick={() =>alert("Need Stripe Details!")} className='btn bg-green border-none '>Checkout</button>
        </div>
</div>

      </div>
  )
}

export default Cart