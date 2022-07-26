import React from "react";
import HornedBeast from "./HornedBeast";
import addimg from '../addimg.json'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
<Row xs={1} md={4} className="g-4" >
  {
      addimg && addimg.map( card =>   
          <Col> 
        <HornedBeast image_url={card.image_url} title={card.title} description={card.description} keyword={card.keyword} horns={card.horns}  />
        </Col>  
      )
    }
</Row>
    )
  
    } 
  }   
  
export default Main;