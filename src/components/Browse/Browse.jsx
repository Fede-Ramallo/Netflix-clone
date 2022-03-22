import React from "react";
import './Browse.css';
import Featured from "./Featured/Featured";
import List from '../Lists/Lists'

const Home = () => {
    return(
        <div className="mainView">
            <Featured type='animation'/>
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home;