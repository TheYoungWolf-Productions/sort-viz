import React from "react";
import { Row, Col } from "react-bootstrap";

interface props {
  arrList: number[];
}

const sorter: React.FC<props> = (props) => {
  //   console.log();
  return (
    <Row>
      <Col>
        <h1>Sorter here {props.arrList}</h1>
      </Col>
    </Row>
  );
};

export default sorter;
