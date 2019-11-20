import React from 'react';
import './footerheader.css'
import lg from "./logo.png";
function Footer() {
  return (
    <div className="footer" style={{ marginTop:80 }}>
<footer id="sticky-footer" class="py-4 text-white-50" style={{ backgroundColor: "#2c4436",}}>
        <div class="container text-center ml-md-5">
            <div class="row d-flex justify-content-center">
                <div class="col-sm">
                    Livraison assuree
                </div>
                <div class="col-sm">
                    Cartes adoptee              
                </div>
                <div class="col-sm">
                    Service Client
                </div>
            </div>
        </div>
            <hr class="style-three"/>
        <div class="container-fluid text-center text-md-left spacing">
    
        
          <div class="row spacing">
            <div class="col-md-3 ml-md-5">
              <img src={lg} width="60%" height="80%" alt="Logo-Artisan" class="mt-md-1 mt-1"/>
            </div>
            <hr class="clearfix w-100 d-md-none pb-3"/>
    
            <div class="col-md-3 mb-md-0 mb-3">
    
              <h5 class="text-uppercase">Faisons connaisance</h5>
    
              <ul class="list-unstyled">
                <li>
                  <a href="#!">L'équipe</a>
                </li>
                <li>
                  <a href="#!">Nos valeurs</a>
                </li>
                <li>
                  <a href="#!">Conditions générales</a>
                </li>
                <li>
                  <a href="#!">Mentions légales</a>
                </li>
                <li>
                    <a href="#!">Recrutement</a>
                </li>
              </ul>
    
            </div>
            <div class="col-md-2 mb-md-0 mb-3">
              <h5 class="text-uppercase">Besoin d'aide ?</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">A propos des vendeurs</a>
                </li>
                <li>
                  <a href="#!">Guide des tailles</a>
                </li>
                <li>
                  <a href="#!">Ma commande</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                    <a href="#!">Partenariat</a>
                </li>
                <li>
                    <a href="#!">Presse</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 mb-md-0 mb-3 text-center">
                <h5 class="text-uppercase pb-5">Vous avez d'autres questions?</h5>
                Contacter nous par email:<br/>
                <a href="mailto:contact@chic-intemporel.com">contact@chic-intemporel.com</a>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">© 2019 Copyright:
          <a href="https://"> Artisan</a>
        </div>
    
      </footer>
    </div>
     
  );
}

export default Footer;
