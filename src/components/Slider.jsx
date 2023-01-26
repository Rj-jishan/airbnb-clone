import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Slider.module.css";
const Slider = () => {
  return (
    <section id="slider">
      <div className={classes.sliderContainer}>
        <div className={classes.contentItems}>
          <NavLink to={'/'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            {" "}
            Amazing view{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/142/142708.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/beach'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Beach{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3126/3126507.png"
              alt="404 error!"
              width={20}
            />{" "}
          </NavLink>
          <NavLink to={'/omg'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Omg{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/1794/1794775.png"
              alt="404 error"
              width={20}
            />{" "}
          </NavLink>
          <NavLink to={'/farms'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            {" "}
            Farms{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/5212/5212117.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/design'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Design{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/681/681662.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/cabins'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Cabins{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/2104/2104725.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/new'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            New{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3091/3091630.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/privete-room'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Private room{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1190/1190686.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/arctic'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Arctic{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/9381/9381029.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/country-side'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Country side
            <img
              src="https://cdn-icons-png.flaticon.com/512/2374/2374938.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/national-parks'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            National Parks
            <img
              src="https://cdn-icons-png.flaticon.com/128/2509/2509907.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/amzing-pools'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Amazing Pools{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3437/3437732.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/tropical'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Tropical{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3020/3020349.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/bed-&-breakfast'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Bed & breakfast{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/4483/4483612.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/mansion'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Mansions{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3562/3562704.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/lake-front'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Lake front{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/7105/7105260.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/camping'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Camping{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/817/817219.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          <NavLink to={'/relax-pleace'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
            Relax place{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/4330/4330668.png"
              alt="404 error!"
              width={20}
            />
          </NavLink>
          {/* test */}
        </div>
      </div>
    </section>
  );
};

export default Slider;
