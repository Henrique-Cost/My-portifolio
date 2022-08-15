import { Books, TelegramLogo } from 'phosphor-react';
import './style.css'

export default function Navbar() {

  const url = require('../assets/Logo_my_portifolio.png');


  return (
    <nav className="flex border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <img src={url} id="logo" className="mr-3" alt="Logo" />
          </a>
        </div>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
        </button>
        <div id="menu" className="hidden w-full pl-24 md:block md:w-auto" >
          <ul className="flex flex-col p-4 rounded-3xl md:flex-row md:space-x-8 md:mt-0 md:text-2xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/personal-projects" className="block font-mono py-2 pr-4 pl-3 text-gray-700  rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal projects</a>
            </li>
            <li>
              <a href='/formation' className="block font-mono py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Formations</a>
            </li>
            <div className='bg-blue-600 px-5 rounded-full hover:scale-105 hover:bg-blue-500 duration-200'>
              <a href='/contact' className="block font-mono py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><TelegramLogo size={40} color='#000000' /></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}