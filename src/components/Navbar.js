import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navcustom">
      <div className="container">
        <div className="navbar-header">
          <div className="navbar-brand"><Link to="/">IMDB Clone</Link></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
