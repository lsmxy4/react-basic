import React from 'react'
import './Footer.css'

const footerMenu = [
  { label: "contact us", path: "/contact" },
  { label: "affiliates", path: "/affiliates" },
  { label: "help", path: "/help" },
  { label: "follow us", path: "/follow" }
]

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-title">navigation links</span>

      <ul className="footer-list">
        {footerMenu.map(menu => (
          <li key={menu.path}>
            {menu.label}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer