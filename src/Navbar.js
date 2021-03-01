import React from 'react'

export default function Navbar() {
   return (
      <nav>
         <input type="checkbox" id="check"></input>
         <label for="check" className="checkbtn">
            <i class="fa fa-bars" aria-hidden="true"></i>
         </label>
         <label className="logo">DeNatty</label>
         <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
      </nav>
   )
}
