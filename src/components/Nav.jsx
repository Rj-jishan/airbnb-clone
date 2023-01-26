import React from 'react';
import classes from "../styles/Nav.module.css"; 
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import Slider from './Slider';

 
const Nav = () => {
  return (
    <div>
   
      {/*  Header part */}
      <haeder className={classes.header}>
        <div className={classes.logocom}>
        <img src={"https://www.bing.com/th?id=OIP.EVZrE-vj_hlRN84r0YBKaQHaCT&w=350&h=109&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"} alt="404 errro!" />
        </div>
        {/*  Nav  */}
        <nav className={classes.center}>
          <Link to={"/home"}>Anywhere </Link>
          <Link to={"/"}>Any week </Link>
          <Link to={"/"}>Add guests  </Link>
          <Link to={"/"}>  <i className='fa fa-search'></i> </Link>
    
        </nav>
        {/*  right */}
        <nav className={classes.rightContent}>
          <Link to={"/"}>Air bnb your home</Link>
          <Link hre  to={"/"}><img src={"https://cdn-icons-png.flaticon.com/128/3083/3083741.png"} alt="404 error!"  width={19}/></Link>
          <Link to={"/"}>Account</Link>
        </nav>  
        {/*  slider */}
      </haeder>
      <MobileNav />
        <Slider />
      
      
    </div>
  )
}

export default Nav
