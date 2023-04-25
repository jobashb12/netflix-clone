import React, { useState } from 'react';
import requests from './requests';
import Row from './component/Row';
import Banner from './component/Banner';
import Nav from './component/Nav';
import './App.css';

const App = () => {

  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" original="true" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App;