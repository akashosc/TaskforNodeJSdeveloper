import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
     <nav>
        <h1>TecheStar.</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contacts</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#brand"}>Brands</Link>
            <Link to={"/services"}>Services</Link>

        </main>
     </nav>
  );
}

export default Header