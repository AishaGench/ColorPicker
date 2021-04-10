import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      color:[127,127,127]
    }
  
  }
  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    this.applyColor();
    //this.chooseColor();
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    this.applyColor();
    
    
  }

  isLight(colorArr) {

    //return colorArr.reduce((a,b) =>a+b)<127*3 // it returns true or false;
    

    // Variables for red, green, blue values
    let r, g, b, hsp;

    r = colorArr[0];
    g = colorArr[1];
    b = colorArr[2];

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    if (hsp>127.5) {

      return false;
  } 
  else {

      return true;
  }


  }
  

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';
  }

  
 chooseColor=()=>{
  //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
  let newArr = [];
  for(let i=0; i<3; i++){
    newArr.push(Math.floor(Math.random()*256))
  }

  return this.setState({color:newArr})
}

applyColor(){

  let backGround = this.formatColor(this.state.color)
  document.body.style.backgroundColor= backGround;
}
  

  render() {
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? 'white' : 'black'}>
        Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button choice={this.chooseColor} isLights={this.isLight}>
          <p>Hi, I am color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;
