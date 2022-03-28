import React from "react";
import './Browse.css';
import Featured from "./Featured/Featured";
import List from '../Lists/Lists';
import Footer from "../Footer/Footer";
import requests from '../../utils/Requests';

const Home = () => {
    return(
        <div className="mainView">
            <Featured fetchTrending={requests.fetchTrending}/>
            <div className="Rows">
            <List 
                title='Continue Watching'
                fetchURL={requests.fetchRandom}

            />
            <List 
                title='Netflix Originals'
                fetchURL={requests.fetchNetflixOriginals}
            />
            <List 
                title='Trending Now'
                fetchURL={requests.fetchTrending}
            />
            <List 
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies}
            />
            <List 
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies}
            />
            <List 
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            />
            <List 
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            />
            <List 
                title='Documentaries'
                fetchURL={requests.fetchDocumentaries}
            />
            <List 
                title='Sci-Fi Movies'
                fetchURL={requests.fetchSciFi}
            />
            </div>
            <Footer />
        </div>
    )
}

export default Home;