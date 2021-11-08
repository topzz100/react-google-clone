
import React from 'react'

const Header = () => {
  return (
    <>
    <nav>
      <div className="nav-links">
        <ul className="links">
          <li>
            <a href="#">Gmail</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
        </ul>
        <div className="menu-icon">
          <img src="/menu-icon.png" alt=""/>
        </div>
        <div className="account-id">
          <a href="#">t</a>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Header
