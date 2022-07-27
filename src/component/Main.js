import React from "react";
import HornedBeast from "./HornedBeast";
import addimg from '../addimg.json'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import App from '../App.js';
import SelectedBeast from './SelectedBeast.js'
import { BreadcrumbItem } from "react-bootstrap";

class Main extends React.Component {
constructor(props) {
  super(props);
  this.state = {
  filterBeast: "0",
  beasts: "",
};
}

handleFilterBeasts = (e) => {
  e.preventDefault();

}

handleChange = (event) => {
  this.setState({
    filterBeast: event.target.value,
  });
};

    render() {
      let finalData =[]
      if(this.state.filterBeast === "0"){
        finalData = addimg
      } else {
         finalData = addimg.filter( card => card.horns == this.state.filterBeast);
      }

    return(
      <>
      <form class="form-inline" onSubmit={this.handleFilterBeasts}>
      <label class="my-1 mr-2 " for="inlineFormCustomSelectPref">
        Preference
      </label>
      <select
        value={this.state.filterBeast}
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        onChange={this.handleChange}
      >
        <option selected value="0">Choose...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="100">100</option>
      </select>

      <div class="custom-control custom-checkbox my-1 mr-sm-2">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customControlInline"
        />
        <label class="custom-control-label" for="customControlInline">
          Remember my preference
        </label>
      </div>

      <button type="submit" class="btn btn-primary my-1">
        Submit
      </button>
    </form>
<Row xs={1} md={4} className="g-4" >
  {
      finalData.map(card =>(          <Col key={card.id}> 
        <HornedBeast image_url={card.image_url} title={card.title} description={card.description} keyword={card.keyword} horns={card.horns} data={card}/>
        <SelectedBeast image_url={card.image_url} title={card.title} description={card.description} keyword={card.keyword} horns={card.horns}/>
        </Col>  
))
    }
</Row>
</>
    )
  
    } 
  }   
  
export default Main;