import React from 'react'
import { NAV } from '../../../constants/NavConfig'
import { NavbarStyledWrapper } from './styledNavbar'
import { Cart } from 'react-bootstrap-icons'

const Navbar = () => {
  const { brand, links } = NAV
  return (
    <nav>
      <NavbarStyledWrapper>
        <div className="leftSection">
          <p className="brandText">{brand}</p>
          <ul className="navLinks">
            {links.map((link, index) => {
              return (
                <li className="link" key={index}>
                  <a href={link.to}>{link.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rightSection">
          <button className="invisible">
            <Cart color="white" />
          </button>
          <button className="invisible">Profile</button>
        </div>
      </NavbarStyledWrapper>
    </nav>
  )
}

export default Navbar
