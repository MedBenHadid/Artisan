import React, {Component} from 'react'
import '../Form.css';
class BoxCheck extends Component {
  state={
    checked:false
  }
    render(){
      const Box = {
        width: 250,
        height: 60,
        border: '3px solid',
        borderColor: "#FFFFFF",
        backgroundColor: "#2c4436",
        display : 'inline-block',
        margin : 15
        
      }
        const textbox = {
          display: 'flex',
          justifyContent: "center",
          paddingTop: 20,
          color: "#FFFFFF"
          }
if(this.props.checked===true){
  Box.backgroundColor= "#f37238";
}
this.changeColor = () => {
  this.setState({checked:true})
} 
  return (
    <div style={Box} onClick={this.changeColor.bind()}>
        <div style={textbox}>{this.props.value}</div>
    </div>
  );
}
}

export default BoxCheck;
