import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface props {
  play: boolean;
  playPause(e: React.MouseEvent<HTMLElement, MouseEvent> | undefined): void;
}

const controller: React.FC<props> = (props) => {
  const play = (
    <Button
      onClick={(e) => props.playPause(e)}
      style={{ borderRadius: "50px", margin: "0px 10px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        fill="#E7E247"
        className="bi bi-play-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
      </svg>
    </Button>
  );

  const pause = (
    <Button
      onClick={(e) => props.playPause(e)}
      style={{ borderRadius: "50px", margin: "0px 10px" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        fill="currentColor"
        className="bi bi-pause-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
      </svg>
    </Button>
  );

  return (
    <Row>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button style={{ borderRadius: "50px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-skip-backward-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
          </svg>
        </Button>
        {props.play ? play : pause}
        <Button style={{ borderRadius: "50px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-skip-forward-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z" />
          </svg>
        </Button>
      </Col>
    </Row>
  );
};

export default controller;
