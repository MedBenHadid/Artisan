import React, {Component} from 'react'
import "./Form.css"
import VousEtes from './FormComp/VousEtes';
import MenuItem from '@material-ui/core/MenuItem';
import Popup from "reactjs-popup";

import "./inputNumber.css";
import "./radio.css";
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Modal from "./FormComp/Modal";
import "./FormComp/modal.css"
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


class Form extends Component {
  state={
    Domaine:null,
    Dactiviter:0
  }

    render(){

      const title1 = {
      color: "#f37238",
      fontSize: 30,
      display: 'flex',
      justifyContent: 'center',
      fontWeight : 700
      }

      const title2 = {
        color: "#f37238",
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        fontWeight : 900,
        
        }
      const Vousetes={
        display: 'flex',
        justifyContent: "center",
        marginTop : -20
      }
      const lebelform={
      color :"#2c4436",
      marginTop: 30,
      width:300

      }

      const tabForm ={
        display: 'flex',
        justifyContent: "center",

        marginLeft: 100,
      }

      this.decrease = () => {
        if(this.state.Dactiviter>0){
        this.setState({ Dactiviter: this.state.Dactiviter - 1 });
        }
      }
    
      this.increase = () => {
        this.setState({ Dactiviter: this.state.Dactiviter + 1 });
      }

      


      const handleDateChange = date => {
this.setState({dateN : date})      };
 
  return (
   <div class="container h-100" style={{ position :"relative" }}> 
    <div class="form">
        <div style={title1} >Vous souhaitez vendre vos créations au</div>
        <div style={title2}>ARTISAN COMPTOIRE STORE</div>
        <div style={{ fontWeight:700,color:"#2c4436",display:"flex",justifyContent:'center',marginLeft : -610,marginTop:40,marginBottom:-20 }}>VOUS ETES : </div>

        <div style={Vousetes}> <VousEtes /></div>
        <div style={{ fontWeight:700,color:"#2c4436",display:"flex",justifyContent:'center',marginLeft : -420,marginTop:40,marginBottom:-20 }}>A PROPOS DE VOTRE ACTIVITE : </div>
<br></br>

<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}>VOTRE DOMAINE D'ACTIVITE  

          
   <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value=""
          onChange={this.state.Domaine}
          // labelWidth={labelWidth}
          style={{ width : 250,borderColor :"#2c4436", }}
        >
          <MenuItem value="">
          SELECT DOMAINE
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
   </div></td>
   <td>
   <div style={lebelform} style={{ width:300,marginTop : 40 }}>NOMBRE D'ANNEES D'ACTIVITE  </div>
   
         <div className="def-number-input number-input" style={{ marginLeft:99,marginTop : 8 }}>
          <button onClick={this.decrease} className="minus"></button>
          <input className="quantity"  style={{ width : 250,borderColor :"#2c4436" }} name="quantity" value={this.state.Dactiviter} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={this.increase} className="plus"></button>
        </div>
   </td>
 </tr>
</table>
<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}>VOUZ TRAVAILLEZ :        
   <div class="rdo-grp" style={{ marginTop : 10,marginLeft : 70 }}>
  <input id="RT1" type="radio" value="SEUL" name="tr"/>
  <label for="RT1"><span></span><span>SEUL</span></label>
  <input id="RT2" type="radio" value="GROUPE" name="tr"/>
  <label for="RT2"><span></span><span>EN GROUPE</span></label>
</div>
   </div></td>
   <td>
   <div style={lebelform} style={{ width:300,marginTop : 25 }}>LA TAILLE DE L'EQUIPE  </div>
         <div className="def-number-input number-input" style={{ marginLeft:100,marginTop : 8 }}>
          <button onClick={this.decrease} className="minus"></button>
          <input className="quantity"  style={{ width : 250,borderColor :"#2c4436" }} name="quantity" value={this.state.Dactiviter} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={this.increase} className="plus"></button>                   
        </div>
   </td>
 </tr>
</table>
<div style={{ fontWeight:700,color:"#2c4436",display:"flex",justifyContent:'center',marginLeft : -420,marginTop:30, }}>INFORMATIONS PERSONNELLES : </div>
<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 
          <TextField
          id="outlined-basic"
          label="Nom"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal" />
   </div></td>
   <td>
   <div style={lebelform} style={{ width:350}}>
          <TextField
          id="outlined-basic"
          label="Prenom"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  /> </div>
   
 
   </td>

 </tr>

</table>


<table border='0' style={tabForm} >
 <tr>
   <td><div style={lebelform} style={{ width:300,marginTop : 15 }}>GENRE 

          
   <div class="rdo-grp" style={{ marginTop : 10,marginLeft : 70 }}>
  <input id="G1" type="radio" value="H" name="genre"/>
  <label for="G1"><span></span><span>Homme</span></label>
  <input id="G2" type="radio" value="F" name="genre"/>
  <label for="G2"><span></span><span>Femme</span></label>

</div>



   </div></td>




   <td >
   <div style={lebelform} style={{ width:300,marginTop : 15,marginLeft : 50 }}>DATE DE NAISSANCE  </div>
<MuiPickersUtilsProvider utils={DateFnsUtils} style={{ width:200,marginTop : 15,marginLeft : 70 }}>
      <Grid container >
        <KeyboardDatePicker
        style={{ width:200,marginTop : 15,marginLeft : 110 }}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </Grid>
    </MuiPickersUtilsProvider>
   </td>

 </tr>

</table>




<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 

          <TextField
          id="outlined-basic"
          label="Email"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>




   <td>
   <div style={lebelform} style={{ width:350}}>
          <TextField
          id="outlined-basic"
          label="TELEPHONE"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  /> </div>
   
 
   </td>

 </tr>

</table>


<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:700 }}> 

          <TextField
          id="outlined-basic"
          label="ADRESSE"
          margin="normal"
          variant="outlined"
          style={{ width : 600}}
          color="teal"

                  />


   </div></td>




 </tr>

</table>


<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 

          <TextField
          id="outlined-basic"
          label="REGION"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>




   <td>
   <div style={lebelform} style={{ width:350}}>
          <TextField
          id="outlined-basic"
          label="CODE POSTAL"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  /> </div>
   
 
   </td>

 </tr>

</table>





















<div style={{ fontWeight:700,color:"#2c4436",display:"flex",justifyContent:'center',marginLeft : -350,marginTop:30, }}>FAIRE UNE PROPOSITION DE PRODUITS : </div>

<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:700 }}> 

          <TextField
          id="outlined-basic"
          label="DESCRIPTIF DE PRODUIT"
          margin="normal"
          variant="outlined"
          style={{ width : 600}}
          color="teal"

                  />


   </div></td>




 </tr>

</table>


<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}>MATEREAU UTILISEE    </div>

          
   <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value=""
          onChange={this.state.Domaine}
          // labelWidth={labelWidth}
          style={{ width : 250,borderColor :"#2c4436",marginTop : 10 }}
        >
          <MenuItem value="">
          SELECT DOMAINE
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>



 </td>



   <td><div style={lebelform} style={{ width:350 }}> 

          <TextField
          id="outlined-basic"
          label="PRIX PUBLIC TTC"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>

 </tr>

</table>






<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 

          <TextField
          id="outlined-basic"
          label="PRIX HT"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>




   <td>
   <div style={lebelform} style={{ width:350}}>
          <TextField
          id="outlined-basic"
          label="TVA"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  /> </div>
   
 
   </td>

 </tr>

</table>


<table border='0' style={tabForm}  >
 <tr>
   <td><div style={lebelform} >DISPONIBILITE IMMEDIATE 

          
   <div class="rdo-grp" style={{ marginTop : 10,marginLeft : 70 }}>
  <input id="oui" type="radio" value="oui" name="dispo"/>
  <label for="oui"><span></span><span>Oui</span></label>
  <input id="non" type="radio" value="non" name="dispo"/>
  <label for="non"><span></span><span>Non</span></label>

</div>



   </div></td>




   <td >
   <div style={lebelform} >SI NON A PARTIR DU:  </div>
<MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container >
        <KeyboardDatePicker

        style={{ marginLeft : 50,width : 200 }}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="dateApartir"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </Grid>
    </MuiPickersUtilsProvider>
   </td>

 </tr>

</table>
<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 

          <TextField
          id="outlined-basic"
          label="REGION"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>




   <td>
   <div style={lebelform} style={{ width:350}}>
          <TextField
          id="outlined-basic"
          label="CODE POSTAL"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  /> </div>
   
 
   </td>

 </tr>

</table>







<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 
   <div style={lebelform} >PHOTOS DE VOS CREATIONS:  </div>

   <TextField
          type="file"
          id="outlined-basic"
          margin="normal"
          variant="outlined"
          style={{ width : 250}}
          color="teal"

                  />


   </div></td>




   <td>
   <div style={lebelform} style={{ width:350}}> </div>
   
 
   </td>

 </tr>

</table>





<table border='0' style={tabForm}>
 <tr>
   <td><div style={lebelform} style={{ width:700 }}> 

          <TextField
          id="outlined-basic"
          label="COMMANTAIRE"
          margin="normal"
          variant="outlined"
          style={{ width : 600}}
          color="teal"

                  />


   </div></td>




 </tr>




</table>


<table border='0' style={tabForm} style={{ marginLeft:285,marginTop : 30 }}>
 <tr>
   <td><div style={lebelform} style={{ width:350 }}> 

   <Button variant="outlined" style={{borderColor:"#2c4436" ,width : 300,borderRadius : 0,color: "#2c4436",borderSize : 5}}>
        AJOUTER AUTRE PRODUITS
      </Button>
 


   </div></td>




   <td>
   <Popup modal trigger={ <Button variant="outlined" style={{ backgroundColor : "#f37238" ,width : 300,borderRadius : 0,color: 'white' }}>
        ENVOYER
      </Button>}>
      {close => <Modal close={close} border="false" style={{ backgroundColor : "#f37238" ,width : 800,borderRadius : 0 }}/>}

      </Popup>

   </td>

 </tr>

</table>
  </div>
</div>
  );
}
}

export default Form;
