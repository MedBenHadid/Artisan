import React, {Component,useState} from 'react'
import '../Form.css';
import BoxCheck from "./BoxCheck";
import { Button, ButtonGroup } from 'reactstrap';

class VousEtes extends Component {


  state={
    Checked:null,
    doc:null,
}  

    render(){

           
 

      const Vousetes = {
        display: "flex",
        justifyContent: "center",
        width: 700,
        height: 300,
        backgroundColor: "#2c4436",
        marginTop: 30,
        
      
        }
  

        const Box = {
          width: 300,
          height: 60,
          border: '3px solid',
          borderColor: "#FFFFFF",
          backgroundColor: "#2c4436",
          display : 'inline-block',
          margin : 10,
          marginLeft: 23,
          
        }
          const textbox = {
            display: 'flex',
            justifyContent: "center",
            paddingTop: 20,
            color: "#FFFFFF"
          }
              
      
       this.changecolor=(check)=> {
          if(this.state.Checked===check){
            document.getElementById('Box'+check).style.backgroundColor= "#f37238" ;
          }
          let i=1;
          while(i<=4){
            if(this.state.Checked!=check){
              document.getElementById('Box'+i).style.backgroundColor= "#2c4436" ;
            }
            i++
          }
          

       }

       
  return (
    <div>
    <div style={Vousetes}>
      <ButtonGroup>
      <div>
        <Button style={Box} id='Box1' onClick={() => {this.setState({Checked:1});this.changecolor(1)}} active={this.state.Checked === 1}>ARTISAN INDEPENDANT</Button>
        <Button style={Box} id='Box3' onClick={() => {this.setState({Checked:3});this.changecolor(3)}} active={this.state.Checked === 3}>ASSOCIATION</Button>

        </div>
        <div>
        <Button style={Box} id='Box2' onClick={() => {this.setState({Checked:2});this.changecolor(2)}} active={this.state.Checked === 2}>ENTREPRISE DES METIERS D'ARTISANS</Button>

         <Button style={Box} id='Box4' onClick={() => {this.setState({Checked:4});this.changecolor(4)}}  active={this.state.Checked === 4}>CREATEUR / DESIGNER</Button>
         </div>
         </ButtonGroup>
         <div style={{ color : 'white',position:'absolute',marginTop:170,marginLeft:-250 }}>Document à fournir :</div>
          <textarea onChange={()=> this.setState({doc : this})} style={{ position:'absolute',marginTop:200, }} cols="80" rows="3" ></textarea>
</div>
   
   <div style={{ marginLeft:33 }}>
    </div>
</div>

  );
}
}


export default VousEtes;
