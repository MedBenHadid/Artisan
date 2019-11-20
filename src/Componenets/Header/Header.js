import React from 'react';
import "./header.css";
import lg from "./logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header() {
  return (
    <div className="header">
    <nav class="navbar navbar-expand-lg static-top" style={{ backgroundColor: "#2c4436",}}>
      <div class="container p-5" style={{color: "#FFFFFF",}}>
        <div> 
            <img src={lg} width="100px" height="100px" alt="Logo-Artisan"/>
        </div>    
      <div class="row pull-left mt-md-5" style={{ marginLeft : 35 }}>
        <div class="mr-4">
          <Link to="/Form"> <a href="#">Qui somme nous</a></Link>    
        </div>
        <div class="mr-4"><a href="http://">Notre histoire</a></div>
        <div class="mr-4"><a href="http://">Notre mission</a></div>
      </div>

  </div>
</nav>
    </div>
  );
}

export default Header;
