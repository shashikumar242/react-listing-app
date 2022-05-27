import React from 'react';
import "./TopBar.css";
import {Link} from 'react-router-dom';

function TopBar() {
  return (
      
    <div className="topbar">
          <div className="topbar-left">

             <i className="topbar-social-icon fab fa-linkedin"></i>
             <i className="topbar-social-icon fab fa-twitter"></i>
             <i className="topbar-social-icon fab fa-instagram"></i>
             <i className="topbar-social-icon fab fa-facebook"></i>
          </div>
          <div className="topbar-center">
            <ul className="topbar-list">
              {/* <li className="topbar-list-item">HOME</li> */}
              <Link to="/" style={{textDecoration:"none"}}><li className='topbar-list-item'>HOME</li></Link>

              <li className="topbar-list-item">ABOUT</li>
              <li className="topbar-list-item">CONTACT</li>
              {/* <li className="topbar-list-item"> <Link to="/create">  CREATE PROPERTY </Link> </li> */}
               <Link to="/create" style={{textDecoration:"none"}}><li className='topbar-list-item'>CREATE PROPERTY</li></Link>
               
              <li className="topbar-list-item">LOGOUT</li>

            </ul>
          </div>
          <div className="topbar-right">
             <img className='topbar-profile-pic' src='https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
             <i className="topbar-search fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
  )
}

export default TopBar