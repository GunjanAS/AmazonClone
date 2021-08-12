import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket" 
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
    }

    const [{basket,user} ]=useStateValue();
    console.log(basket);

    return (
        <nav className="header">
        {/*amazon logo*/}
            <Link to='/'>
            <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
            />
            </Link>
        {/*Search bar*/}
        <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 3 links */}
        <div className="header__nav">
            {/* 1st link */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello, {(user?.email)? user.email:"Guest"}</span>
                    <span className="header__optionLineTwo">{(user)? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>

        

            {/* 2nd link */}
            <Link to="/orders" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/* Basket Icon*/}
            <Link to="/checkout"  className="header__link">
                <div className="header__optionBasket">
                    {/*basket icon*/}
                    <ShoppingBasketIcon />                  {/* number of items*/}
                    <span className="header__optionLineTwo header__basketcount">{basket?.length}</span>
                </div>
            </Link>

            

        </div>


            
            
        </nav>
    )
}

export default Header
