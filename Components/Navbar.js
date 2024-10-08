import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Navbar = () => {
  const user = false;
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Online Book Store</Link>
      </p>
      {/* <div>
        {
          user?(
          <div>Logged In</div>
          ):(
            <GoogleLogin
            onSuccess={(response)=>console.log(response)}
            onError={()=>console.log('Error')}/>
          )
        }
      </div> */}
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
