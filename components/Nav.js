import React, { useEffect, useState } from 'react'

function Nav() {
  const [navbar,setNavbar] = useState(false);
  const [active,setActive] = useState(false);

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
      <nav class={!navbar ? ('bg-gradient-to-b from-purple-400 to-indigo-500 px-2 sm:px-4 py-2.5 text-white dark:bg-gray-800'+ (active && ' h-[40vh]')) :'px-2 py-2.5 bg-white z-10 fixed w-full border-b border-gray-200 top-0' + (active && ' h-[40vh]')}> 
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
        <img src="https://uploads.tikroyal.com/cdn/gallery/r6pb26sifc6pdd4m0bab.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />

    </a>
    <button onClick={() => setActive(!active)} data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class={active ? ' w-full md:block md:w-auto':'md:block hidden'} id="mobile-menu">
      <ul class={!navbar ? 'white-t flex  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium':'flex  flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'}>
        <li>
          <a href="/" class={!navbar ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 ' : 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'} aria-current="page">Home</a>
        </li>
         <li>
          <a href="#" onClick={() => window.scroll({
            top:2000, behavior: 'smooth'
          })} class={!navbar ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 ' : 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>About</a>
        </li>
        <li>
          <a href="#" onClick={() => window.scroll({
            top:400, behavior: 'smooth'
          })} class={!navbar ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 ' : 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Services</a>
        </li>
        <li>
          <a href="#" onClick={() => window.scroll({
            top:800, behavior: 'smooth'
          })} class={!navbar ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 ' : 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Pricing</a>
        </li>
        <li>
          <a href="contact/" class={!navbar ? 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 ' : 'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'}>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav