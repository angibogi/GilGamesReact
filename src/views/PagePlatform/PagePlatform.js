import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import FilterCard from "../../components/FilterCard/FilterCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import {Spinner} from "reactstrap";
import Side from "../../components/Sidebar/Side";



const Platform = () => {

    let {platform} = useParams();
    let id = platform;


    const [games, setGames] = useState([])
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState (false);


    const fetchPlatform =async () => {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${id}`;

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
        fetchPlatform();
    }, [id]);


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
                        <h2> {id.charAt(0).toUpperCase() + id.slice(1)} Games</h2>
                        <SearchBar
                            key="search-bar"
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                    <div className ="d-flex flex-wrap container">
                        {
                            games.filter((genre) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = genre.title.toLowerCase();
                            return (
                                fullName.startsWith(searchTerm)
                            )} ).map(game => (
                                <FilterCard
                                    game= {game}
                                    number={game.id}/>
                            ))
                        }
                    </div>
            </div>
            </div>
</div>
        </>
    );
};

export default Platform;