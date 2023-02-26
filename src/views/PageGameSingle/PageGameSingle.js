import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import "./PageGameSingle.css";
import SingleGame from "../../components/SigleGame/SingleGame";
import {Spinner} from "reactstrap";

const PageGameSingle = () => {

    let {number} = useParams();
    let id = number

    const [FtpData, setFtpData] = useState([]);
    const [screen, setScreen] = useState([]);
    const [loading, setLoading] = useState (false);

    const fetchSingle =async () => {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

        const response = await fetch(url,  {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eff9516b46mshb1a6cc880b484fap1f97a9jsnbf6050eb2fd4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setFtpData(data);
        setLoading(true);
    }

    const fetchScreen =async () => {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

        const response = await fetch(url,  {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eff9516b46mshb1a6cc880b484fap1f97a9jsnbf6050eb2fd4',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });

        const data = await response.json();
        setScreen(data.screenshots);
        setLoading(true);
    }

    useEffect(()=> {
        fetchSingle();
        fetchScreen()
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


    return (
        <div>
            <SingleGame
                FtpData={FtpData}
                screen={screen}
                requirements={FtpData.minimum_system_requirements}
            />
        </div>
    );
};

export default PageGameSingle;