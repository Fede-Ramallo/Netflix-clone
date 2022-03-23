import React from "react";
import './Browse.css';
import Featured from "./Featured/Featured";
import List from '../Lists/Lists'
import requests from '../../Requests'

const Home = () => {
    return(
        <div className="mainView">
            <Featured type='animation'/>
            <List 
                title='Continue Watching'
                fetchURL={requests.fetchComedyMovies}

            />
            <List 
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies}
            />
        </div>
    )
}

export default Home;