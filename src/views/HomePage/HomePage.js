import React, {useEffect, useState} from 'react';
import slider1 from "../../image/slider1.jpg";
import slider2 from "../../image/slider2.jpg";
import slider3 from "../../image/slider3.jpg";
import slider4 from "../../image/slider4.jpg";
import slider5 from "../../image/slider5.jpg";
import slider6 from "../../image/slider6.jpg";
import Carousel from 'react-bootstrap/Carousel';
import {Spinner} from "reactstrap";
import HomeCard from "../../components/HomeCard/HomeCard";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import "./HomePage.css";



const HomePage = () => {
    const { user, isAuthenticated  } = useAuth0();
    const [games, setGames] = useState ([]);
    const [loading, setLoading] = useState (false);

    const fetchHome =async () => {
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

        const response = await fetch(url,  {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eff9516b46mshb1a6cc880b484fap1f97a9jsnbf6050eb2fd4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setGames(data);
        setLoading(true);
    }

    useEffect(()=> {
        fetchHome();
    }, []);

    const gameFilter = games.filter((game) => game.id === 540 || game.id === 517 || game.id === 340);


    if(!loading) {
        return(
            <div className="container text-center">
                <Spinner
                    color="primary"
                    style={{
                        height: '3rem',
                        width: '3rem'
                    }}
                >
                    Loading...
                </Spinner>
            </div>
        );
    }

    return (

        <div className="container my-5">
            <Carousel slide={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Destiny2</h3>
                        <p>A free-to-play multiplayer Sci-Fi MMOFPS from Bungie</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Halo: Infinite</h3>
                        <p>For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Eternal Return: Black Survival</h3>
                        <p>
                            Combinig elements from battle royale, MOBA, and the survival generes.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Game of Thrones: Winter is Coming</h3>
                        <p>
                            A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Lost ARK</h3>
                        <p>
                            Smilegate's free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an acient evil waiting to be destroyed
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel_image"
                        src={slider6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Genshin Impact</h3>
                        <p>
                            if you've been looking for a game to scratch taht open-world action RPG itch, one with perhaps a bit of Asisn flair, then you're going to want to check out miHoYo's Genshin Impact
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className ="container text-center my-5">
                {isAuthenticated && <h3>Hi {user.name}!</h3>}
            </div>
            <div className ="container my-5">
            <h3>Top Games</h3>
            <div className ="d-flex flex-wrap home_box">
                {
                gameFilter.map((game) => ( <HomeCard
                    key={game.id}
                    number = {game.id}
                    game={game}
                />
                ))}
            </div>
            </div>
            <div className="text-center my-5">
            <Link to="/game"><button className="btn_games">All FreetoPlay!</button></Link>
            </div>
        </div>

    );
};

export default HomePage;