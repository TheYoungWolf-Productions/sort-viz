import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import Sorter from "../Sorter/Sorter";
import Controls from "../Controller/Controller";

interface props {
  arrList: number[];
  playPause(): void;
  play: boolean;
  sort: boolean;
}

class Player extends Component<props> {
  render() {
    return (
      <Row>
        <Col>
          <Sorter arrList={this.props.arrList} sort={this.props.sort} />
          <Controls play={this.props.play} playPause={this.props.playPause} />
        </Col>
      </Row>
    );
  }
}

export default Player;
