import React from "react";
import HornedBeast from "./HornedBeast";
import addimg from '../addimg.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class Main extends React.Component {
constructor(props) {
  super(props);
  this.state = {
   clickCounter: 0,
}
}

handleClick = () => {
this.setState({clickCounter: this.state.clickCounter + 1})
};

    render() {
     
           


  
    return(

      addimg && addimg.map( card => 
        <HornedBeast  image_url={card.image_url} title={card.title} description={card.description} keyword={card.keyword} horns={card.horns}/>
      )
      
    )
      

    } 
  }   
  


export default Main;