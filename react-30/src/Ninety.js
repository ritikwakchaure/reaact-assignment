import React from 'react'

export const Ninety = () => {
 
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src="https://picsum.photos/200/300" alt="logo" />
        </div>
        <div className="links"> 
          <ul className={isOpen ? "nav-links" : "nav-links active"}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  )
}
