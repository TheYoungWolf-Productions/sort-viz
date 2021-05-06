import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import Sorter from "../Sorter/Sorter";
import Controls from "../Controller/Controller";

interface props {
  arrList: number[];
}

class Player extends Component<props> {
  render() {
    return (
      <Row>
        <Col>
          <Sorter arrList={this.props.arrList} />
          <Controls />
        </Col>
      </Row>
    );
  }
}

export default Player;
