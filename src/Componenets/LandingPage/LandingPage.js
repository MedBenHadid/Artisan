import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import artisanOrange from './../../Resources/Artisan.png';
import Artisan from './../../Resources/Artisan.png';
import img1 from './../../Resources/1.png';
import img2 from './../../Resources/2.png';
import img3 from './../../Resources/3.png';
import img4 from './../../Resources/4.png';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./btnstyle.css";
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function LandingPage() {
    const classes = useStyles();
  return (
    <div className="LandingPage">
      <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-6">
        <a href="#">
        <img class="img-fluid rounded mb-3 mb-md-0" src={img1} alt=""/>
        </a>
        </div>

        
      </div>



      
      <br/>
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-6 h-100" style={{ backgroundColor :  "#f37238",}}>   
        <h2 style={{ color:"white",fontWeight :700 ,marginTop : 20  }}>BIENVENU DANS L'ESPACE CREATEURS</h2><br/><br/>
        <h4 style={{ color:"white",fontWeight :400   }}>Si vous etes créateur, Inscrivez vous ici.</h4>
        <h4 style={{ color:"white",fontWeight :400 ,  }} >Nous prenons contact avec vous rapidement.</h4>
         <Link to="/Form"> <div class="buttonCrees" >CRÉES MON COMPTE ARTISAN</div></Link>
        <h4 style={{ color:"white",fontWeight :400 , marginTop : 10  }}>Ou</h4>
        <center style={{ marginTop : 10 }}>
        <a class="btn btn-block btn-social btn-facebook" style={{ width : 300,backgroundColor : "#4267B2",color:"white" }}>
        <i class="fa fa-facebook"></i> Sign in with Facebook
      </a>

      <a class="btn btn-block btn-social btn-google-plus" style={{ width : 300,backgroundColor : "#DB4437",color:"white",marginTop : 10,marginBottom:20 }}>
        <i class="fa fa-google-plus"></i> Sign in with Google
      </a></center>
        </div>

        
      </div>
      <div class="row h-100 justify-content-center align-items-center" style={{ width : 300, }}>
      
      </div>
      <hr style={{ backgroundColor : "#f37238" }}/>
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-3">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src={img2} alt=""/>
          </a>
        </div>
        <div class="col-md-3 "  >
          <h3 style={{color: "#2c4436",fontWeight : 600 }}>ARTISAN</h3>
          <p style={{ textAlign : "justify",fontSize:14 }}>QUI NOU SOMMES?
La première action de LA FONDATION INDIGO est née de la volonté de contribuer au développement des métiers de l’artisanat et de la création en appuyant de jeunes structures associatives ou entrepreneuriales pour contribuer au renforcement/l’avènement d’un artisanat créatif, éthique et contemporain.
</p>
        </div>
      </div>

      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-3">
          
          <h3 style={{color: "#2c4436",fontWeight : 600 }}>NOTRE HISTOIRE</h3>
          <p style={{ textAlign : "justify" ,fontSize:14}}>ARTISAN est la première action de LA FONDATION du groupe INDIGO, elle est née de la volonté de contribuer au développement des métiers de l’artisanat et de la création en appuyant de jeunes structures associatives ou entrepreneuriales pour contribuer au renforcement d’un artisanat créatif, éthique et contemporain.
          </p>
            
          
        </div>
        <div class="col-md-3">
        <a href="#">
        <img class="img-fluid rounded mb-3 mb-md-0" src={img3} alt=""/>
        </a>
        </div>
      </div>

      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-3">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src={img4} alt=""/>
          </a>
        </div>
        <div class="col-md-3">
          <p style={{ textAlign : "justify",fontSize:14 }}><br/>
          ARTISAN  est un programme d’appui mais aussi  un lieu d’exposition  de 300 m2, conçu comme un comptoir store, où seront exposés 4 familles d’associations,  de jeunes créateurs, d’artisans indépendants  et de marques pionnières.
Notons aussi qu’une plateforme sera dédiée au lieu et à la fondation et sera accessible pour soumettre son projet, sa collection.
</p>
        </div>
      </div>

      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-3">
          
          <h3 style={{color: "#2c4436",fontWeight : 600 }}>NOTRE MISSION</h3>
          <p style={{ textAlign : "justify",fontSize:14 }}>
          ARTISAN le comptoir store, sera la vitrine de nos sélections et collaborations avec  plus de 50  marques et pas moins de 10000 articles proposés
Un lieu, de découvertes 100% tunisiennes,  dédié à l’univers de la maison et du bien-être.
Nous mettons en valeur un artisanat contemporain populaire utile et accessible, conçu dans un souci d’excellence et d’éthique social.
          </p>
            
          
        </div>
        <div class="col-md-3">
        <a href="#">
        <img class="img-fluid rounded mb-3 mb-md-0" src={artisanOrange} alt="Artisan-Orange"/>
        </a>
        </div>
      </div>
      <hr />
      </div>
    </div>
  );
}

export default LandingPage;