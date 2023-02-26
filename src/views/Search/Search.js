import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import FreeCard from "../../components/FreeCard/FreeCard";


const Search = () => {
    const [value, setValue] = useState("");
    const [games, setGames] = useState ([]);

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
    }


    useEffect(()=> {
        fetchGames();
    }, []);


    const onChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <>
            <div className=" container search_box mt-5">
                <h1>Search Games</h1>
                <SearchBar
                    key="search-bar"
                    value={value}
                    onChange={onChange}
                />
                <div className ="d-flex flex-wrap container">
                    {games.filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.title.toLowerCase();
                        return (
                            searchTerm &&
                            fullName.startsWith(searchTerm) &&
                            fullName !== searchTerm
                        );
                    }).slice(0, 10)
                        .map((game) => (
                            <FreeCard
                                key={game.id}
                                number = {game.id}
                                cate = {game.genre}
                                game={game}/>
                        ))}
                </div>
            </div>
        </>
    );
}
export default Search;