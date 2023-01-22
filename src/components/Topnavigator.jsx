/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import classes from "../styles/Topnaviagtion.module.css";
const Topnavigator = () => {
  const [click, setClick] = useState(false);
  //  handleClose 
  const closeBox = () => {
     setClick(false);
  }
  
  //  showBox function
  const showBox = () => {
     setClick(!click)
  }
  return (
    <section className={classes.window}>
        <div className={classes.NavTop}>
        <h4>Show total prices up front <a href="#" className={classes.learnMore}
        onClick={showBox}>Learn more</a></h4>
      </div>

        {
          click ? 
       
        <div className={classes.PopUpContainer}>
            <div className={classes.closeIcon} onClick={closeBox}>
               X
            </div>
            <div className={classes.earlyTitle}> 
            <h4>Early Access</h4>
            </div>
            <div className={classes.title}>
            One total 
            price, up front
            </div>
            <div className={classes.para}>
            You can now see the total price up front, 
            including all fees, before taxes.
            </div>
            <div className={classes.Buttonwrapper}>
                <a href="/" className={classes.popUpbtn}>Try it now</a> 
                <a href="/" className={classes.later}>Maybe later</a>
            </div>
            <div className={classes.imagePopUp}>
                <img src="https://a0.muscache.com/im/pictures/8b55746d-e6a2-4871-9a41-b7bd83acc6a0.jpg?im_q=highq&amp;im_w=2560" alt="404 there was an error!" />
            
       
        {/*  closing div */}
        </div>
        </div>: null
        }
    </section>
  )
}

export default Topnavigator;
