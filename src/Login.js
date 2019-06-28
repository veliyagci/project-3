import React from 'react';
import './stylesheets/login.css';

function Login(){

    $('#blogLink').click (function (e) {
        e.preventDefault(); 

        setTimeout(function () {
            window.location.href = "/Survey";
         }, 2000); 
     
     });
    return(
        <div className="entrence">
            <header>Welcome to BarAmigo!</header>
        </div>
    )
}
export default Login;