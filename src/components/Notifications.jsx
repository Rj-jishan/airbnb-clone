import { FactCheck, FoodBankSharp, TravelExplore } from '@mui/icons-material';
import React from 'react';
import classes from '../styles/Home.module.css';
const Notifications = () => {
  return (
    <div>
    <div className={classes.container}>
   <h1>This website is Now Devolopment version</h1>  
    </div>
    <div className={classes.content}>
      <h3>Please visit onother this kind website ... 
     </h3>
     <div className={classes.mainContainer}>
     <div className={classes.row}>
        <h1><a href={"https://travel-website-n9ea.vercel.app"}>Travel website <TravelExplore /></a></h1>
     </div>
     <div className={classes.row}>
        <h1><a href={"https://fwebsite-iota.vercel.app"}> Food website <FoodBankSharp /></a></h1>
     </div>
     <div className={classes.row}>
        <h1><a href={"https://fact-website.vercel.app"}> Fact website <FactCheck /></a></h1>
     </div>
     <div className={classes.row}>
        <h1><a href={"https://number-tab.vercel.app"}> People number Tab <FactCheck /></a></h1>
     </div>
{/*  closing  */}
     </div>
    </div>
    </div>
  )
}

export default Notifications;
