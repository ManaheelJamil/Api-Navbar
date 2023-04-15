"use client";
import { useState } from "react";
import React from 'react'
import { Links } from './data/data'
import { Image } from './data/data'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
       <nav className="flex items-center justify-between flex-wrap font-serif shadow-xl bg-slate-400 p-2 mb-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <ul>{
        Image.map((item: any) => (
          <img key={item.img} src= {item.img} className=" lg:ml-10 ml-2 lg:w-32 w-20 h-10 lg:h-16"/>  
        ))
      }
      </ul>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow ">
          <ul className="lg:flex lg:justify-end mr-10 ">{
        Links.map((item: any) => (
          <li key={item.name} className=" mr-6">
            <a href='/' className="hover:text-gray-600 hover:text-lg ml-3">{item.name}</a>
          </li>
        ))
      }
      </ul>
        </div>
        
      </div>
    </nav>
    </div>
  )
}

export default Navbar
