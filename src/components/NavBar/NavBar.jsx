"use client";
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  const toggleProjectsDropdown = () => {
    setProjectsDropdown(!projectsDropdown);
  };

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold">Voting Dapp</h2>
              </Link>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                
                <li
                  className={`relative pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-900 ${
                    projectsDropdown ? 'md:hover:text-purple-600 md:hover:bg-transparent' : ''
                  }`}
                >
                  <span
                    onClick={toggleProjectsDropdown}
                    className="cursor-pointer "
                  >
                    Projects
                  </span>
                  {projectsDropdown && (
                    <div className="absolute mt-2 right-0 w-30 bg-black text-white rounded-md shadow-lg bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                      {/* Dropdown Content */}
                      <ul className="py-2">
                        <li className='pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                          <Link href="#project1" onClick={() => setNavbar(!navbar)}>
                            Project 1
                          </Link>
                        </li>
                        <li className='pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent'>
                          <Link href="#project2" onClick={() => setNavbar(!navbar)}>
                            Project 2
                          </Link>
                        </li>
                        {/* Add more project links as needed */}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
