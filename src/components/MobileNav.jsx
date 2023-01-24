import { LocationCity, Share } from '@mui/icons-material';
import React from 'react';
import classes from "../styles/Mobilenav.module.css";
const MobileNav = () => {
  return (
    <div className={classes.Container}>
     <div className={classes.searchBox}>
      <i className="fas fa-search"></i>
     </div>
     <div className={classes.Links}>
      <a href="">Anywhere <i className="fas fa-city"></i></a>
      <a href="">Any week <i className="fas fa-clock"></i></a>
      <a href="">Add guest <i className="fas fa-person"></i></a>
     </div>
     <div className={classes.share}>
          <Share />
     </div>
    </div>
  )
}

export default MobileNav
