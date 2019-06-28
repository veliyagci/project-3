import React, { useEffect } from 'react';
import './stylesheets/style.css';
import $ from 'jquery';

function HomePage() {

    useEffect(() => {

/*	Define Click Event for Mobile */
if( 'ontouchstart' in window ){ var click = 'click'; }

/*	Reveal Menu */
$('div.button').on(click, function(){
  if( !$('div.content').hasClass('inactive') ){
    // Remove circle
    $('div.circle').remove();
  
    // Slide and scale content
    $('div.content').addClass('inactive');
    setTimeout(function(){ $('div.content').addClass('flag'); }, 100);
    
    // Change status bar
    $('div.status').fadeOut(100, function(){
      $(this).toggleClass('active').fadeIn(300);
    });
    
    // Slide in menu links
    var timer = 0;
    $.each($('li'), function(i,v){
      timer = 40 * i;
      setTimeout(function(){
        $(v).addClass('visible');
      }, timer);
    });
  }
});

/*	Close Menu */
function closeMenu() {		
  // Slide and scale content
  $('div.content').removeClass('inactive flag');
  
//   // Change status bar
  $('div.status').fadeOut(100, function(){
    $(this).toggleClass('active').fadeIn(300);
  });
  
//   // Reset menu
  setTimeout(function(){
    $('li').removeClass('visible');
  }, 300);
}

$('div.content').on(click, function(){
  if( $('div.content').hasClass('flag') ){
    closeMenu();
  }
});
$('li a').on(click, function(e){
  e.preventDefault();
  closeMenu();
});

// LOGIN
//this function to applay your animate style
function animate_Me(target, moveMe){
  $(target).focus(function(){
	  $(moveMe).animate({"marginLeft":"266px"});
	});
  $(target).focusout(function(){
    $(moveMe).animate({"marginLeft":"24px"});
  });

}
//--------------------

animate_Me("input[type='text']", ".fa-user");
animate_Me("input[placeholder='Your Last Name']", ".fa-user-plus");
animate_Me("input[type='email']", ".fa-envelope");
animate_Me("input[type='password']", ".fa-lock");
animate_Me("input[placeholder='Confirm Password']", ".fa-refresh");

});

  return (

<div className="background">
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse"
                data-target="#myNavbar">
          <span className="glyphicon glyphicon-menu-hamburger"></span>
        </button>
      <div className="navbar-left logo"> 
        <img src="/img/logo.png" alt="" />
      </div>
      <h1 className="brand brand-name navbar-left"><div className="navbar-left">Baramigo</div> </h1>
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
  <div className="circle"></div>
  <div className="iphone">
      <div className="screen">
          <div className="menu">
    <div id='AppendHere'></div>
    <form id="loginform" action="#">
      <h1>Sign up to find your Baramigo</h1>
        <div className="input-info" >
            <i className="fa fa-user"></i>
            <input type="text" placeholder="Username" />
            <i className="fa fa-envelope"></i>
            <input type="email" placeholder="E-mail" required autoComplete="off" s="true" />
            <i className="fa fa-lock"></i>
            <input type="password" placeholder="Password" />
            <input type="checkbox" />
            <span>Remember Me</span><br />
         </div>

      <div className="log-sign">
        <li><a href="Login" className="login" form="loginform" > Log In </a> </li>

            <button className="signup" form="signupform"><i className="fa fa-plus"></i> Sign Up</button>
    </div>

</form>
          </div>
          <div className="status"></div>
          <div className="content ">
              <div className="button"></div>
          </div>
      </div>
  </div>
  <div id="footer"> <footer>&copy; <b>2019 , Baramigo</b> </footer> </div> 
</div>


);
}
// ---------
    
export default HomePage;