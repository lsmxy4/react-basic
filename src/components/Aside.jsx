import React from 'react'
import './Aside.css'

const asideMenu = [
  { label: "links 1"},
  { label: "links 2"},
  { label: "links 3"},
  { label: "links 4"},
  { label: "links 5"},
  { label: "links 6"}
]

const Aside = () => {
  return (
    <aside className="aside">
      <h2 className="aside-title">ASIDE SECTION</h2>

      <ul className="aside-list">
        {asideMenu.map((menu, i) => (
          <li key={i}>
            {menu.label}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Aside
