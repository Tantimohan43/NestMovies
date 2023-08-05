import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import { useContext } from 'react';
import {AccountContext } from '../context/AccountProvider';



const MovieList = () => {

    const { account} = useContext(AccountContext);
    
    const [movieList, setMovieList] = useState([])
   
    const {type} = useParams()

    useEffect(() => {
        getData();
        console.log(account);
    }, [])

    
    


    useEffect(() => {
        getData()
    }, [type])
    const url=`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

    const getData = () => {
        fetch(`${url}`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    if(!account){
    return (
        <>
        
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
           
                {
                    movieList.map(movie => (
                        
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
        </>
    )
            }

            
            const filteredMovies = movieList.filter((movie) =>
            movie.original_title.toLowerCase().includes(account.toLowerCase())
          );
                    
                        return (
                            <>
        
                            <div className="movie__list">
                                <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                                <div className="list__cards">
                               
                                    {
                                        filteredMovies.map(movie=>(

                                       
                                                 <Cards movie={movie} />
                                        )
                                        )
                                    }
                                </div>
                            </div>
                            </>
                        )
                    
                   

               
               
            
}

export default MovieList