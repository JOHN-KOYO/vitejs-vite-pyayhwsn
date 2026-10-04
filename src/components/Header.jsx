import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Companies', '/projects'],
  ['Services', '/services'],
  ['Order Online', '/products'],
  ['Contact Us', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="https://devkigroupkenya.com/assets/devki-logo-bhiV-5nq.png" alt="Devki Group" /><span className="brand-name">GROUP OF<br/>COMPANIES</span>
        </NavLink>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
              {label === 'Our Companies' && <ChevronDown size={12} />}
            </NavLink>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <a className="cart-link" href="/products" aria-label="Order online"><ShoppingCart size={15} strokeWidth={2.2}/><span>1</span></a>
      </div>
    </header>
  )
}
