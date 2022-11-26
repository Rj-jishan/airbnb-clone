import React from 'react';
//  import stylings 📦
import "../../src/styles/Header.css"
//  import other functionality
import { Link } from 'react-router-dom';
//  Mui, Icons others
import  SearchIcon from "@mui/icons-material/Search";
import  LanguageIcon from "@mui/icons-material/Language";
// import ExpandMoreIcon  from "@mui/icons-material/ExpandMoreIcon";
import { Avatar } from '@mui/material';
const Header = () => {
  return (
    <div className='header'>
     <Link to={"/"}>
     <img  className='header__icon' src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="user" />
     </Link>
    {/*  center */}
    <div className="header__center">
      <input type="text" />
      <SearchIcon /> 
    </div>
     <div className="header__right">
      <p>Become a host</p>
      <LanguageIcon /> 
      {/* <ExpandMoreIcon  />  */}
      <Avatar /> 
     </div>
    </div>
  )
}

export default Header
