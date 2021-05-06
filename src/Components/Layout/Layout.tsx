import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Player from "../../Containers/Player/Player";
import Description from "../Description/Description";
import { Row, Col, Container } from "react-bootstrap";
import Aux from "../../hoc/Aux/Aux";

class Layout extends Component {
  state = {
    arrList: [4, 2, 5, 2, 2],
  };

  randomizeHandler = () => {
    console.log("Randomize Handler");
    const newArr: number[] = [];
    this.state.arrList.map((val) => {
      return newArr.push(Math.floor(Math.random() * 10));
    });
    this.setState({ arrList: newArr });
  };
  render() {
    return (
      <Aux>
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Navigation randomize={this.randomizeHandler} />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <Player arrList={this.state.arrList} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Description />
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default Layout;
