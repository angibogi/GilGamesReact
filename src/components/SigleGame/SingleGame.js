import React from 'react';
import {Link}from "react-router-dom";
import {GiConsoleController} from "react-icons/gi";
import {RiSwordFill} from "react-icons/ri";
import {FaComment} from "react-icons/fa";
import {RiPencilRuler2Fill} from "react-icons/ri";
import err from "../../image/screenerr.jpg";



const SingleGame = (props) => {
    const {FtpData, screen, requirements} = props;


    return  (
        <div className="container my-5 single">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/game" style={{textDecoration: 'none'}}> GamesFTP </Link></li>
                <li className="breadcrumb-item active" aria-current="page">{FtpData.title}</li>
            </ol>
            <div className="my-5 text-center">

            </div>
                    <div className="game_description">
                        <img src={FtpData.thumbnail} className="img-fluid" alt={FtpData.title}/>
                        <h1 className="game_title">{FtpData.title}</h1>
                        <p>
                            {FtpData.description}
                        </p>
                    </div>
            <div className="date my-3">
            <p><strong>Release Date:</strong> {FtpData.release_date}</p>
            </div>
            <div className="container my-5 text-center">
                <h3>Information</h3>
                <div className="row  my-5">
                    <div className="col 2">
                        <div className="single_icon">
                            <RiSwordFill size={50}/>
                        </div>
                        <h4>Genre</h4>
                        <p>{FtpData.genre}</p>
                    </div>
                    <div className="col 2">
                        <div className="single_icon">
                            <GiConsoleController size={50}/>
                        </div>
                        <h4>Platform</h4>
                        <p> {FtpData.platform}</p>
                    </div>
                    <div className="col 2">
                        <div className="single_icon">
                            <FaComment size={50}/>
                        </div>
                        <h4>Publisher</h4>
                        <p>{FtpData.publisher}</p>
                    </div>
                        <div className="col 2">
                        <div className="single_icon">
                            <RiPencilRuler2Fill size={50}/>
                        </div>
                        <h4>Developer</h4>
                        <p>{FtpData.developer}</p>
                        </div>
                    </div>
            </div>

            <div className="text-center site_button my-5">
                <button type="button"><a href={FtpData.game_url} target="_blank"> Official Site!</a></button>
            </div>
            <h3 className="mb-5">Screenshot</h3>
            <div className="row my-5">
                <div className="col-8">
            <div className="screenshot ">

                <img src={screen[0] && screen[0].image ? screen[0].image :`${err}`} className="img-fluid" alt={FtpData.title}/>
            </div>
                </div>
                <div className="col-4">
            <div className="screenshots">
                <img src={screen[1] && screen[1].image ? screen[1].image : `${err}` } className="img-fluid" alt={FtpData.title}/>
                <img src={screen[2] && screen[2].image ? screen[2].image : `${err}` } className="img-fluid" alt={FtpData.title}/>
            </div>
            </div>
            </div>
            <div className=" my-5">
                <h3>System Requirements </h3>
                <p><strong>OS: </strong> {requirements && requirements.os ? requirements.os: "undefined"}</p>
                <p><strong>Processor:</strong> {requirements && requirements.processor ? requirements.processor: "undefined"}</p>
                <p><strong>Memory:</strong> {requirements && requirements.memory ? requirements.memory: "undefined"}</p>
                <p><strong>Graphics:</strong> {requirements && requirements.graphics ? requirements.graphics: "undefined"}</p>
                <p><strong>Storage:</strong> {requirements && requirements.storage ? requirements.storage: "undefined"}</p>
            </div>
        </div>
    );
};


export default SingleGame;