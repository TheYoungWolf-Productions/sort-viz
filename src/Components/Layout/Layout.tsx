import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Player from "../../Containers/Player/Player";
import Description from "../Description/Description";
import { Row, Col, Container } from "react-bootstrap";
import Aux from "../../hoc/Aux/Aux";

class Layout extends Component {
  state = {
    arrList: [5, 2, 6, 8, 7, 3, 5, 6, 1, 2],
    size: 10,
  };

  randomizeHandler = () => {
    console.log("Randomize Handler");
    const newArr: number[] = [];
    this.state.arrList.map((val) => {
      return newArr.push(Math.floor(Math.random() * 100));
    });
    this.setState({ arrList: newArr });
  };

  sizeAdjustHandler = (e: string) => {
    console.log(`Size Adjust ${e}`);
    this.setState({ size: +e });
    const newArr = new Array(+e);
    for (let index = 0; index < newArr.length; index++) {
      newArr[index] = (Math.random() * 100).toFixed(0);
    }
    this.setState({ arrList: newArr });
    console.log(JSON.stringify(newArr));

    // newArr.map((d) => {
    //   return [...newArr, (Math.random() * 100).toFixed(0)];
    // });
  };

  render() {
    return (
      <Aux>
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Navigation
              randomize={this.randomizeHandler}
              sizeAdjust={this.sizeAdjustHandler}
            />
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
