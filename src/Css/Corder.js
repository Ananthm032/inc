import React from 'react'
import First from '../Component/FirstPage/First'
import Second from '../Component/Secondpage/Second'
import Third from '../Component/Thirdpage/Third'
import Js from "../Component/Js"
import "./Corder.css"
import Forth from '../Component/Forthpage/Forth'
import Fifith from '../Component/Fifthpage/Fifith'

function Corder() {
  return (
    <div>
        <body>
  <header>
    <nav>
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <a href="#con">Footer</a>
    </nav>
  </header>
  <section id="home">
    <div class="container reveal">
      <h1><First/></h1>
    </div>
  </section>
  <section id="about">
    <div class="container reveal">
     
      <div class="text-container">
        <div class="text-box">
            <Second/>
          </div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container reveal">
     
      <div class="text-container">
        <div class="text-box">
          <Third/>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container reveal">
     
      <div class="text-container">
        <div class="text-box">
          <Forth/>
        </div>
      </div>
    </div>
  </section>
  <section id="con">
    <div class="container reveal">
     
      <div class="text-container">
        <div class="text-box">
          <Fifith/>
        </div>
      </div>
    </div>
  </section>

  </body>
  <script src="../src/Component/Js.js"></script>
  </div>
  )
}

export default Corder