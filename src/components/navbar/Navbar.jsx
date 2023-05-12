import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#technologies">Tech</a></p>
      <p><a href="#projects">Projects</a></p>
    </>
  )

  return (
    <div className='pfo__navbar'>
      <div className='pfo__navbar-links'>
      <div className="pfo__navbar-links_logo">
          <h1>MNT</h1>
        </div>
        <div className='pfo__navbar-links_container'>
            <Menu />
        </div>
      </div>
      <div className='pfo__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu &&
            (<div className='pfo__navbar-menu_container scale-up-center'>
              <div className='pfo__navbar-menu_container-links'>
                <Menu />
              </div>
            </div>)
        }
      </div>
    </div>
  )};

export default Navbar