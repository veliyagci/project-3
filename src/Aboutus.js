import React from 'react';
import './stylesheets/aboutus.css';

function Aboutus() {
  return (
    <body className="Aboutus">
    <header className="masthead">
            <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="glyphicon glyphicon-menu-hamburger"></span>
                            </button>
                    <div className="navbar-left logo"> 
                      <img src="./img/logo.png" alt="" />
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
      <h1 className="masthead-heading">About Us</h1>
    </header>
    <div className="gradient"> 
    <section>
      <h2>OUR MISSION</h2>
        <p>HELP FINDING YOU A DRINK BUDDY.</p>
        <p className="space-maker">ANY BAR , ANY BOOZE , ANY TIME.</p>
    <div id="footer"> <footer>&copy; <b>2019 , Baramigo</b> </footer> </div> 
    </section>  
    </div>
    </body>
  );
}

export default Aboutus;