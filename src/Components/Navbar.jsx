import React, {useState} from 'react'

import styles from '../styles'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import { navLinks } from '../Constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`navbar ${styles.flexCenter} px-6 py-2 w-full`}>
      <div className={`navbar__link ${styles.flexSpace} flex-1` } >
        <div className="navbar__links-logo mr-4 ">
          <a href="#">
            <h1 className='text-white text-xl  font-bold'>YGG3</h1>
          </a>
        </div>

        <div className={`navbar__links-container hidden md:flex `}>
          <ul className={`flex flex-row`}>
          {navLinks.map((link) => (
            <li key={link.id} className={`text-white text-lg m-3 font-medium transition-all duration-200 hover:scale-105`}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          </ul>
        </div>
            
            <div className={`navbar__sign hidden  ss:flex items-center justify-end`}>
              <a href="#" className='text-white px-4 py-2 font-medium '>Sign In</a>
              <button className={`text-white px-4 py-2 bg-colorOrange rounded-md border-2 border-transparent hover:border-colorOrange hover:border-2 hover:bg-transparent`}>Sign Up</button>
            </div>

            <div className={`navbar__menu relative ml-4 sm:hidden`}>
              {toggle ? <RiCloseLine size={30} className={`text-white cursor-pointer`} onClick={() => setToggle(false)}/> : <RiMenu3Line className={`text-white cursor-pointer `} size={30} onClick={() => setToggle(true)}/>}
              {toggle && (
                <div className={`navbar__menu-container scaleUp flex flex-col items-end justify-end text-end bg-colorFooter p-2 absolute top-[40px] right-0 mt-4 min-w-[210px] rounded-md  `} style={{boxShadow : "0 0 5px rgba(0,0,0,0.2) "}}>
                  <div className={`navbar__links-menu  `}>
                    <ul className={`flex flex-col`}>
                      {navLinks.map((link) => (
                        <li key={link.id} className={`text-white text-lg m-3 font-medium transition-all duration-200 hover:scale-105`}>
                          <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                      ))}
                    </ul>
              <div className={`navbar__sign flex flex-col  items-end justify-end`}>
                <a href="#" className='text-white px-4 py-2 font-medium '>Sign In</a>
                <button className={`text-white px-4 py-2 bg-colorOrange rounded-md border-2 border-transparent hover:border-colorOrange hover:border-2 hover:bg-transparent`}>Sign Up</button>
            </div>
                  </div>
                </div>
              )}

            </div>
      </div>
    </nav>
  )
}

export default Navbar