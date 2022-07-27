import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SelectedBeast from "./SelectedBeast";
class HornedBeast extends React.Component {
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
    return (
      
      <div >
       
<Card style={{ width: '18rem',padding: 10}} >
      <Card.Img src={this.props.image_url} width="200" onClick={this.handleClick}/>
      <Card.Body>
      <Card.Text style={{ color: 'black' }}>
        {this.props.title}
        </Card.Text>
        <Card.Title style={{ color: 'black' }}>My Favorites Beast:{this.state.clickCounter}</Card.Title>
        <Card.Text style={{ color: 'black' }}>
        {this.props.description}
        </Card.Text>
        <Card.Text style={{ color: 'black' }}>
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>
        </Card.Text>
      </Card.Body>
    </Card>
 
</div>



    )
  }
}

export default HornedBeast;