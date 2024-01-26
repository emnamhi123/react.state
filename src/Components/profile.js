import React, { Component } from "react";

import Card from "react-bootstrap/Card";
class Profile extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <center>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.profileImage} />
            <Card.Body>
              <Card.Title>{this.props.fullName}</Card.Title>
              <Card.Text>{this.props.desc}</Card.Text>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}

export default Profile;
