import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      
      <div>
{/* <h2>{this.props.title}</h2>
<img src={this.props.imageUrl} alt={this.props.imgAlt} width="500" />
<p>{this.props.description}</p>
<p>{this.props.keyword}</p>
<p>{this.props.horns}</p>
     */}
<Card style={{ width: '18rem'}}>
      <Card.Img src={this.props.image_url} width="200" onClick={this.handleClick} />
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