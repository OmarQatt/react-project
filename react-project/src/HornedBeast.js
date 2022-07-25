import React from "react";
import Main from "./Main";

class HornedBeast extends React.Component {

  render() {
    return (
      <div>
<h2>{this.props.title}</h2>
<img src={this.props.imageUrl} alt={this.props.imgAlt} width="500"></img>
<p>{this.props.description}</p>
</div>

    )
  }
}

export default HornedBeast;