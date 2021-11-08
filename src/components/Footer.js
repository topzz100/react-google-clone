import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className ="country">
          <p>Nigeria</p>
        </div>
        <div className="footer-links">
          <ul className="links-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">How Search works</a>
            </li>
          </ul>
    
          <p>Carbon neutral since 2007</p>
          <ul className="links-2">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
