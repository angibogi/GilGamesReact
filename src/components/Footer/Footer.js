import React from 'react';
import "./Footer.css"
import logo from "../../image/logo.png";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsTwitch} from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <footer className="text-center mt-5">
                <section>
                    <div className="container  mt-5">
                        <div className="row mt-3">
                            <div className="col-md-2 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                                <img className="logo_footer" src={logo} alt=""/>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4 mx-auto mb-4">
                                <h6>
                                    2023 © GilGames, Free to Play
                                </h6>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4 social">
                                <a href="https://www.facebook.com/" target="_blank"><span><BsFacebook size={20}/></span></a>
                                <a href="https://twitter.com/?lang=it" target="_blank"><span><BsTwitter size={20}/></span></a>
                                <a href="https://www.instagram.com/" target="_blank"><span><BsInstagram size={20}/></span></a>
                                <a href="https://www.youtube.com/" target="_blank"><span><BsYoutube size={20}/></span></a>
                                <a href="https://www.twitch.tv/?lang=it" target="_blank"><span><BsTwitch size={20}/></span></a>
                            </div>

                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;