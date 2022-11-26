import React, { useState } from 'react';
import "../../styles/Banner.css"; // gloval style css file
import { Button } from '@mui/material'; // button from mui button
import Search from './Search'; // search component 
import {useNavigate} from "react-router-dom";
const Banner = () => {
    const history = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search /> }

        <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant='outlined'>
            {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Lorem ipsum dolor sit.</h1>
        <h5>
            Lorem ipsum dolor sit amet consectetur.
        </h5>
        <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
