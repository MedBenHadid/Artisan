import React from "react";

export default ({ close }) => (
  <div className="modale" >
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="content" style={{ backgroundColor : "#f37238",padding:70,textAlign : "center" }}>
    Le dépot de vos articles sera disponible dans quelques instants<br/><br/>
    Réessayez dans une heure !<br/>
<br/>
    Merci pour votre compréhension
    </div>
  </div>
);