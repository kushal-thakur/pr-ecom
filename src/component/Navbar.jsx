import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { IconName } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa6";

function Navbar() {
  
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const CartTotal = storedCart.length || "";

  // search
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?searchQuery=${searchQuery}`);
  };
  const handleChange = (e) => {
    console.log(e.target.value)
  setSearchQuery(e.target.value)
  }
  // search

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-3 mt-2">
        <div className="container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYo0sFIC899TtKVeUXKCJaJ-AAuooFPxKGg&usqp=CAU" alt="" style={{ width: '8rem', height: "4rem" }} />
          <Link to="/" className="navbar-brand">HOME</Link>
          <Link to="/About-page" className="navbar-brand">ABOUT</Link>
          <Link to="/Contact-Page" className="navbar-brand">CONTACT US</Link>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              CATEGORIES
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Link to="/Men"className="navbar-brand">Men's Fashion </Link>  <br />
            <Link to="/Women"className="navbar-brand">Women's Fashion</Link> <br />
            <Link to="/Baby"className="navbar-brand">Baby </Link> <br />
            <Link to="/Electronics"className="navbar-brand">Electronics </Link> <br />
            <Link to="/Sports"className="navbar-brand">Sports,Fitness </Link> <br />
            <Link to="/Books"className="navbar-brand">Books </Link> <br />
            
            
             
            </Dropdown.Menu>
          </Dropdown>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success me-2" type="submit">Search</button>
          </form>
          
         
          <Link to='/cart-Page'>
            <button className='ms-2 cartbtn' > <  FaCartArrowDown /><span className="badge badge-light">{CartTotal}</span></button>
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
