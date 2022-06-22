import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';;
import { useRecoilState } from 'recoil'
import { cart } from '../store/store'

function Nav() {
  const [cartData,setCart] = useRecoilState(cart);

  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("cartData"));
    setCart(existingEntries);
  },[])
  const router = useRouter();
  const [navbar,setNavbar] = useState(false);
  const [active,setActive] = useState(false);
  const cartIndex = useRecoilValue(cart);

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 26) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll',changeBackground)
  });

  return (
    <div class={`navbar h-[10px] text-neutral-content fixed top-0 bg-transparent ${navbar && ('bg-hero z-10 fixed top-0')} ${active && 'z-10'}`}>
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">
              <Link href={'/'}><a><img width={150} src='https://uploads.tikroyal.com/cdn/gallery/r6pb26sifc6pdd4m0bab.png'/></a></Link>
            </span>
    </div> 
    <div class={`px-2 transition ease-in-out mx-2 navbar-center flex z-10 ${active && 'bg-black w-full h-[100vh] fixed flex-col top-0 left-[-10px] z-100'}`}>
    <a style={{fontSize:'40px'}} className='text-4xl lg:hidden absolute top-[2%] cursor-pointer z-10 right-[15%]'>
    <label className="btn bg-transparent  border-none btn-circle swap swap-rotate">
        <input onClick={() => setActive(!active)} type="checkbox" />
        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
      </label>
    </a>
      <div className={`lg:visible lg:flex ${!active && 'invisible'} items-stretch z-10 ${active  && 'flex visible flex-col mt-[40%] fts space-y-3'} `}>
      <div className='relative left-[20px] mr-5'>
      <Link href='/'>
        <a className={`btn btn-ghost btn-sm rounded-btn ${active && 'text-2xl'}`}>
                Home
              </a> 
              </Link>{router.asPath == '/' && <span className='span-underline'></span>}
              </div>
        <a onClick={() => window.scrollTo({
                top:2000,
                behavior: 'smooth'
              })} className={`btn btn-ghost btn-sm rounded-btn ${active && 'text-2xl'}`}>
                About
              </a> 
        <a  onClick={() => window.scrollTo({
                top:400,
                behavior: 'smooth'
              })} className={`btn btn-ghost btn-sm rounded-btn ${active && 'text-2xl'}`}>
                Services
              </a> 
              <a onClick={() => window.scrollTo({
                top:900,
                behavior: 'smooth'
              })} className={`btn btn-ghost btn-sm rounded-btn ${active && 'text-2xl'}`}>
                Pricing
              </a>
              <li className='relative list-none'>
              <Link href='contact'>
        <a className={`btn btn-ghost btn-sm rounded-btn ${active && 'text-2xl'}`}>
                Contact
              </a>
              </Link>
              {router.asPath == '/contact' && <span className='span-underline'></span>}
              </li>
      </div>
    </div> 
    <div class="navbar-end relative">
      <Link href='cart'>
      <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg><span className='bg-red-500 top-[5px] right-[5px] rounded-3xl py-1 px-1 text-white absolute flex justify-center items-center'>{cartIndex?.length}</span>
      </button> 
      </Link>
    </div>
  </div>
  )
}

export default Nav