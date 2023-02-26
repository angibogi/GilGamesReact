import React from 'react';
import {useEffect, useState,} from "react";
import { Spinner } from 'reactstrap';
import FreeCard from "../../components/FreeCard/FreeCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import Side from "../../components/Sidebar/Side";



const FreetoPlay = () => {


    const [games, setGames] = useState ([]);
    const [loading, setLoading] = useState (false);
    const [value, setValue] = useState("");

    const fetchGames =async () => {
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
        fetchGames();
    }, []);

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

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className="container-fluid">
            <div className="row mt-5">
                <Side/>
                <div className="col">
                    <div className="container">
                        <h1>Free to play</h1>
                        <SearchBar
                            key="search-bar"
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                    <div className =" col d-flex flex-wrap  ">
                        {games
                            .filter((game) => {
                                const searchTerm = value.toLowerCase();
                                const fullName = game.title.toLowerCase();
                                return (
                                    fullName.startsWith(searchTerm)
                                );
                            }).map((game) => (
                                <FreeCard
                                    key={game.id}
                                    number = {game.id}
                                    game={game}
                                />
                            ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default FreetoPlay;