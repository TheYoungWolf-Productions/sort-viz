import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Player from "../../Containers/Player/Player";
import Description from "../Description/Description";
import { Row, Col, Container } from "react-bootstrap";
import Aux from "../../hoc/Aux/Aux";
interface state {
  arrList: number[];
  size: number;
  play: boolean;
}
class Layout extends Component {
  state: state = {
    arrList: [350, 220, 64, 189, 171, 332, 323, 164, 12, 350],
    size: 10,
    play: true,
  };

  randomizeHandler = () => {
    console.log("Randomize Handler");
    const newArr: number[] = [];
    this.state.arrList.map((val) => {
      return newArr.push(Math.floor(Math.random() * 350));
    });
    this.setState({ arrList: newArr });
  };

  sizeAdjustHandler = (e: string) => {
    console.log(`Size Adjust Handler`);
    this.setState({ size: +e });
    const newArr = new Array(+e);
    for (let index = 0; index < newArr.length; index++) {
      newArr[index] = (Math.random() * 350).toFixed(0);
    }
    this.setState({ arrList: newArr });
    // console.log(JSON.stringify(newArr));

    // newArr.map((d) => {
    //   return [...newArr, (Math.random() * 100).toFixed(0)];
    // });
  };

  sortHandler = () => {
    // console.log(this.state.arrList);
    const sortedArr = [...this.state.arrList];
    sortedArr.sort((a, b) => a - b);
    // console.log(sortedArr);
    this.setState({ arrList: sortedArr });
  };

  playPauseHandler = () => {
    this.setState((prevState: state) => ({
      play: !prevState.play,
    }));
  };

  render() {
    return (
      <Aux>
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Navigation
              randomize={this.randomizeHandler}
              sizeAdjust={this.sizeAdjustHandler}
              sorting={this.sortHandler}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#94A89A" }}>
          <Container>
            <Row>
              <Col
                className="m-2"
                style={{ backgroundColor: "#BCAB79", borderRadius: "25px" }}
              >
                <Player
                  arrList={this.state.arrList}
                  playPause={this.playPauseHandler}
                  play={this.state.play}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Description />
              </Col>
            </Row>
          </Container>
        </div>
      </Aux>
    );
  }
}

export default Layout;
