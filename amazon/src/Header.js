import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/* Logo */}
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optuonLineOne">Hello Guest</span>
          <span className="header_optuonLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optuonLineOne">Returns</span>
          <span className="header_optuonLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optuonLineOne">Your</span>
          <span className="header_optuonLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
