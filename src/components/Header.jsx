import React from 'react'
import Topnavigator from './Topnavigator'

const Header = () => {
  return (
    <div>
        <Topnavigator />
       <header class="header">
      <a href="#" class="logo">
      <img src="https://th.bing.com/th/id/R.c24410d954b92ab202d1405b52d6602a?rik=VLldvMvjFylBJg&pid=ImgRaw&r=0" alt="" />
      </a>
      {/* nav tag  */}
      <nav class="center desktop">
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
        <a href="">Model S</a>
        <a href="">Model Roof</a>
        <a href="">Model Panels</a>
      </nav>
      {/* onother nav :02  */}
      <nav class="right">
        <a href="" class="desktop">Shop</a>
        <a href="" class="desktop">Account</a>
        <a href="">Menu</a>
      </nav>
      </header>
    </div>
  )
}

export default Header
