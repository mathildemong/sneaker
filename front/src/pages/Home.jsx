import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/fond.jpeg';
import '../styles/Home.css';

function Home() {

  return (
  
<div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
<div className="headerContainer">
        <h1>Sneaker addict</h1>
        <p>Tous les styles</p>
        <Link to='/menu'>
        <button>order now</button>
        </Link>
        </div>
        </div>
  )
}

export default Home;