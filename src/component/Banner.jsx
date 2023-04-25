import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';

const Banner = () => {

    const [movie, setMovie] = useState();

    let baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const getBanner = async () => {
            const res = await axios.get(requests.fetchNetflixOriginals);
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]);
        }
        getBanner();

    }, [])

    const handleString = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    return (
        <div className='banner'
            style={{
                backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
            }}>
            <div className='banner-content'>
                <h1>{movie?.original_name}</h1>
                <button className='left'>Play</button>
                <button className='right'>My List</button>
                <p>{handleString(movie?.overview, 150)}</p>
            </div>
            <div className='shadow'></div>
        </div>
    )
}

export default Banner;