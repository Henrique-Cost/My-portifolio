import { Books, TelegramLogo } from 'phosphor-react';
import './style.css'

export default function Navbar() {

  const url = require('../assets/Logo_my_portifolio.png');

  return (
    <nav className="flex px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <img src={url} id="logo" className="navbar-brand mr-3" alt="Logo" />
          </a>
        </div>
        <div id="menu" className="rounded-full border-4 p-3 hidden w-full md:block md:w-auto" >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-2xl md:font-medium md:border-0 md:bg-white">
            <li>
              <a href="/personal-projects" className="block font-mono py-2 pr-4 pl-3 text-gray-700  rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Personal projects</a>
            </li>
            <li>
              <a href='/formation' className="block font-mono py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Formations</a>
            </li>
            <div className='bg-blue-600 px-5 rounded-full hover:scale-105 hover:bg-blue-500 duration-200'>
              <a href='/contact' className="block font-mono py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"><TelegramLogo size={40} color='#000000' /></a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}