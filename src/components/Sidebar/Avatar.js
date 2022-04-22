import React, { Component } from "react";
import {Image} from 'react-bootstrap'
import './Avatar.css'
class Avatar extends Component {


  render() {
    return (
      <div>
        <Image className="avatar"
          roundedCircle
          fluid
          src={this.props.imgSrc}
        ></Image>
      </div>
    );
  }
}

export default Avatar;
