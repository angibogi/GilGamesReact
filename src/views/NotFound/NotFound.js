import React from 'react';
import err from "../../image/404.png";
import {Link} from "react-router-dom";
import "./Not Found.css";

const NotFound = () => {
    return (
        <div className=" container error text-center mt-5">
            <img src={err}className="img-fluid" alt="Responsive image"/>
            <h1>GAME OVER</h1>
            <h2>Ops 404 error.. Page not Found</h2>
            <Link to="/"><button>Go Back</button></Link>

        </div>

    );
};

export default NotFound;