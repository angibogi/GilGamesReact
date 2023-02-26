import React from 'react';
import {Link} from "react-router-dom";



const FreeCard = (props) => {

    const {game, number} = props;

    const short = game.short_description.split("", 150);



    return (
        <>
            <Link to={`/game/${number}`} style={{textDecoration: "none"}}>
                <div  className="game_card">
                    <img src={game.thumbnail} className="image-fluid" alt={game.title}/>
                    <div className="card-body ">
                        <h5 className="card-title">{game.title}</h5>
                        <p className="card-text">{short}</p>
                    </div>
                    <div className="free">
                        <button>{game.genre}</button>
                        <button>Free</button>
                    </div>
                </div>
            </Link>


        </>
    );
};

export default FreeCard;