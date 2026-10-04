import React from 'react'
import { Link } from 'react-router-dom'

const companies = ['Devki Steel Mills', 'National Cement Company', 'Maisha Mabati Mills', 'Maisha Minerals & Fertilizers', 'Northwood Aviation', 'Maisha Packaging', 'Cemtech Limited', 'Cimerwa PLC']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div className="footer-about">
          <img src="https://devkigroupkenya.com/assets/devki-logo-bhiV-5nq.png" alt="Devki Group" />
          <p>Devki Group is one of East Africa's leading industrial groups, manufacturing products that support construction, agriculture and infrastructure.</p>
        </div>
        <div>
          <span className="footer-label">GROUP OF COMPANIES</span>
          <ul>{companies.map(c => <li key={c}>{c}</li>)}</ul>
        </div>
        <div>
          <span className="footer-label">COMPANY</span>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Companies</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Order Online</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Devki Group of Companies. All rights reserved.</span>
        <span>Nairobi · Kenya</span>
      </div>
    </footer>
  )
}
