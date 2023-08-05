import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import {useState} from "react";
import { useContext } from 'react';
import {AccountContext } from '../context/AccountProvider';

const Header = () => {
    const {setaccount} = useContext(AccountContext);
    const fun=(event)=>{
        setaccount(event.target.value);
    }
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <input type="text" placeholder="name"  onChange={fun}></input>
               
            </div>
        </div>
    )
}

export default Header