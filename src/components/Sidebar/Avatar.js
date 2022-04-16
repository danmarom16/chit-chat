import React, { Component } from "react";
import {Image} from 'react-bootstrap'

class Avatar extends Component {


  render() {
    return (
      <div>
        <Image
          roundedCircle
          fluid
          src={this.props.imgSrc}
        ></Image>
      </div>
    );
  }
}

export default Avatar;
