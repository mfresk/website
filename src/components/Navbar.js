// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbar.css";
// import { Navitems } from "./Navitems";
// import Dropdown from "./Dropdown";

// function Navbar() {
//     const [dropdown, setDropdown] = useState(false);
//     return (
//         <>
//             <nav className="navbar">
//                 <Link to="/" className="navbar-logo">MFRESK</Link>
//                 <ul className='nav-items'>
//                     {Navitems.map(items => {
//                         if (items.title === "Services") {
//                             return (
//                                 <li key={items.id} className={items.cName}>
//                                     <Link to={items.path} onMouseEnter ={()=> setDropdown(true)}>{items.title}</Link>
//                                     {dropdown && <Dropdown/>}
//                                 </li>                                
//                             )
//                         }
//                         return (
//                                 <li key={items.id} className={items.cName}>
//                                     <Link to={items.path}>{items.title}</Link>
                                
//                                 </li>                                
//                             )
//                     })}
//                 </ul>
//             </nav>
//         </>
//     )
// }
// export default Navbar;