import React from "react";
import "../Styles/Header.css"
import { Link } from "react-router-dom";
import { AiOutlineHeart,AiOutlineUser,AiOutlineShopping } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";



function Header() {
  return (
    <>
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light  p-2 ">
        <div className="container-fluid">
          <Link className="navbar-brand  navlogo" to="/">
            VENDY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HOME
                </a>
                <ul className="dropdown-menu home_dropdown" aria-labelledby="navbarDropdown">
              
                  {/* <li>
                   <HomeDropdown/>
                  </li> */}

                  <li>
                  <Link to='/' style={{textDecoration:'none', color:"black"}}>Home</Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                SHOP
                </a>
                <ul className="dropdown-menu shop_dropdown" aria-labelledby="navbarDropdown">
              
                {/* <li><ShopDropdown/></li> */}

                  <li>
                    <Link className="dropdown-item" to="/accessories">
                     Shop
                    </Link>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu page_dropdown" aria-labelledby="navbarDropdown">
              
                  <li>
                    <Link className="dropdown-item " to="/aboutussimple">
                      About us Simple
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/aboutcreative">
                      About us Creative
                    </Link>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Contact us
                    </a>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="faq">
                    FAQ's
                    </Link>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                    Terms
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                     Shipping
                    </a>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/policy">
                 Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
               Size Guide
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                Refund Policy
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BLOG
                </a>
                <ul className="dropdown-menu blog_dropdown" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/bloggrid">
                      Blog Grid
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bloglist">
                      Blog List
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/bloggrid">
                    Blog mansonry
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/bloggrid">
                   Blog With Sidebar
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/tshirt">
                 Single Post page
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SALE
                </a>
                <ul className="dropdown-menu sale_dropdown" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/accessories">
                    sale
                    </Link>
                  </li>
                
                </ul>
              </li>

             
              <li className="nav-item">
                <a className="nav-link  text-dark" href="#">
                  BUY THEME!
                </a>
              </li>
            
            </ul>
           
           
            <AiOutlineUser className="me-3 logo "/>
            <BsSearch className="me-3 logo"/>
            <AiOutlineHeart className="me-3 logo"/>
            <AiOutlineShopping className="me-2 logo"/>
            <p className="logoZero  ">0</p>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;
