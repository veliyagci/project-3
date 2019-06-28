import React from 'react';
import './stylesheets/contact.css';

function Contact() {
    return (
<body className="contact">
<div className="wrapper">
<nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#myNavbar">
                    <span className="glyphicon glyphicon-menu-hamburger"></span>
                </button>
        <div className="navbar-left logo"> 
          <img src="./img/logo.png" alt=""/>
        </div>
          <h1 className="brand brand-name navbar-left"><div className="navbar-left">Baramigo</div></h1>
        </div>
            <div className="collapse navbar-collapse navbar-right" id="myNavbar">
              <ul className="nav navbar-nav">
              <li><a href="/">HOME</a></li>
              <li><a href="/Aboutus">ABOUT US</a></li>
              <li><a href="/Contact">CONTACT</a></li>
              <li><a href="/Privacy">PRIVACY</a></li>
              </ul>
            </div>
        </div>
    </nav>
  <div className="parallaxWrapper">
    <form action="#" className="contact">
      <div className="row">
        <label for="message">Your name:</label><br />
        <textarea id="name" className="input" name="message" rows="7" cols="30"></textarea><br />
      </div>
      <div className="row">
        <label for="email">Your email:</label><br />
         <textarea id="email" className="input" name="message" rows="7" cols="30"></textarea><br />
      </div>
      <div className="row">
        <label for="message">Your message:</label><br />
        <textarea id="message" className="message" name="message" rows="7" cols="30"></textarea><br />
      </div>
      <input id="submit_button" type="submit" value="SEND" />
    </form>						 
  </div>
</div>  
<div id="footer"> <footer>&copy; <b>2019 , Baramigo</b> </footer> </div>
    </body>
  );
}

export default Contact;