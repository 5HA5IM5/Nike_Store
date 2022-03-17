import React, { useState, useEffect } from "react";
import logo from "../../../Assets/logo.png";
import { IconButton } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "../GlobalComponentsStyling/Navbar.css";
import { useSelector } from 'react-redux';


const Navbar = ({ activeNav }) => {


  const [cartCount, setCartCount] = useState(0);
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [show, handleShow] = useState(false);
  const cart = useSelector((s) => s.shop.cart);

  useEffect(() => {

    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count)

    activeNav != null ? handleShow(true) : window.addEventListener("scroll", () => setTimeout(function () {
      window.scrollY > 100 ? handleShow(true) : handleShow(false)
    }));

  }, [cart, cartCount]);

  return <div className={`navbar flex-center-sb ${show && "nav_black"}`}>

    <Link to={'/'}>
      <img className="navbar_logo" src={logo} alt="Nike_Logo" />
    </Link>

    <div className="navbar_links flex-center-sb text-Style" >
      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          MEN
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>

      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          WOMEN
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>
      <Link className="Link" to="/shop">
        <p className={` black-cl ${show && "navbar_icon_white"}`}>
          KIDS
          <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
        </p>
      </Link>
      <Link className="Link" to="/shop">
        <p className={`black-cl ${show && "navbar_icon_white"}`}>
          CUSTOMIZE</p>
      </Link>
    </div>

    <div className="navbar_icons">
      <Link to={'/cart'}>
        <IconButton>
          <div className="bubble"><span>{cartCount}</span></div>
          <ShoppingCartOutlinedIcon
            className={`navbar_icon ${show && "navbar_icon_white"}`}
            fontSize="small"
          />
        </IconButton>
      </Link>
      <Link to={'/login'}>
        <IconButton>
          <PermIdentityIcon
            className={`navbar_icon ${show && "navbar_icon_white"}`}
            fontSize="small"
          />
        </IconButton>
      </Link>

      <IconButton onClick={() => setBurgerStatus(true)}>
        <AppsOutlinedIcon
          fontSize="small"
          className={`navbar_icon ${show && "navbar_icon_white"}`}
        />
      </IconButton>
      <Fade right>
        <div className={burgerStatus ? "burger_Nav_active " : "burger_Nav"}>
          <div className="burger_Nav_closeIcon">
            <IconButton onClick={() => setBurgerStatus(false)}>
              <CloseOutlinedIcon
                style={{ color: "#000000" }}

              />
            </IconButton>
          </div>
          <p>
            MEN
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>

          <p>
            WOMEN
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>
          <p>
            KIDS
            <ExpandMoreOutlinedIcon style={{ color: "#808080" }} />
          </p>
          <p>CUSTOMIZE</p>
        </div>
      </Fade>
    </div>
  </div >
};

export default Navbar;
