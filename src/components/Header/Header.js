import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css"
import logo from "../../image/logo.png";
import {HiOutlineSearch} from "react-icons/hi";
import {BiUser} from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { user, loginWithRedirect, isAuthenticated, logout  } = useAuth0();

    return (

        <>


            <nav className="navbar">

                <Link to="/" className="logo"><img src={logo} alt=""/></Link>

                <ul className="nav-links">

                    <input type="checkbox" id="checkbox_toggle"/>

                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    <div className="menu">
                        <Link to="/" style={{textDecoration: 'none'}} className="nav_item"> <span>Home Page</span> </Link>
                        <Link to={`/games/mmorpg`} style={{textDecoration: "none"}} className="nav_item"><span>MMORPG</span> </Link>
                        <Link to={`/platform/pc`} style={{textDecoration: "none"}} className="nav_item"><span>PC Games</span></Link>
                        <a href="*" style={{textDecoration: "none"}}><div onClick={e=>loginWithRedirect()} className="nav_item login"><span><BiUser size={30}/>{ isAuthenticated ? (
                            <p onClick={e=>logout()}>Logout</p>
                        ):(
                            <p onClick={e=>loginWithRedirect()}>Login</p>
                            )

                        }</span>
                        </div></a>
                        <Link to="/search"   style={{textDecoration: "none"}}  className=" nav_item search-nav"><HiOutlineSearch size={30}/></Link>

                    </div>

                </ul>

            </nav>

        </>
    )
}

export default Header