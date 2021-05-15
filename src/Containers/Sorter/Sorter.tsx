import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { NodeGroup } from "react-move";
import { scaleLinear, scaleBand } from "d3-scale";
import { easeExpInOut } from "d3-ease";

import Bar from "../Bar/Bar";

interface props {
  arrList: number[];
  sort: boolean;
}

// Returns index of where to clamp the moving bar.
const clamp = (n: number, min: number, max: number) => {
  return Math.max(Math.min(n, max), min);
};

const updateOrder = (arr: number[], beg: number, end: number) => {
  const copy = arr.slice(0);
  const val = copy[beg];
  copy.splice(beg, 1);
  copy.splice(end, 0, val);
  return copy;
};

const Sorter: React.FC<props> = (props) => {
  const [st, setState] = useState({
    topDeltaX: 0,
    mouseX: 0,
    isPressed: false,
    lastPressed: 0,
  });
  let transformedArrList: { id: string; value: number; name: string }[] = [];
  props.arrList.map((value, index) => {
    transformedArrList.push({
      id: `id-${index}`,
      value: value,
      name: index.toString(),
    });
    return null;
  });

  // Note: When sorting, do NOT replace transformedArrList, rather change positions of existing data in it.
  if (props.sort) {
    // let newOrder = props.arrList;
    const sortedArr = [...transformedArrList];
    sortedArr.sort((a, b) => a.value - b.value);
    transformedArrList = sortedArr;
    // transformedArrList = sortedArr.map((value, index) => {
    //   return {
    //     id: `id-${index}`,
    //     value: value,
    //     name: index.toString(),
    //   };
    // });
  }

  const scale = scaleBand()
    .rangeRound([0, 1000])
    .domain(transformedArrList.map((d) => d.name))
    .padding(0.1);
  const width = scale.bandwidth();
  const y = scaleLinear().range([0, 350]).domain([0, 350]);

  const touchStartHandler = (
    data: number,
    x: number,
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    const pageX = e.touches[0].pageX;
    setState({
      topDeltaX: pageX - x,
      mouseX: x,
      isPressed: true,
      lastPressed: data,
    });

    window.addEventListener("touchmove", touchMoveHandler);
    window.addEventListener("touchend", touchEndHandler);
  };

  const touchMoveHandler = (e: TouchEvent) => {
    e.preventDefault();
    mouseMoveHandler(e.touches[0]);
  };

  const touchEndHandler = () => {
    setState({ ...st, isPressed: false, topDeltaX: 0 });
    window.removeEventListener("touchmove", touchMoveHandler);
    window.removeEventListener("touchend", touchEndHandler);
  };

  const mouseDownHandler = (
    data: number,
    x: number,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    const pageX = e.pageX;
    setState({
      topDeltaX: pageX - x,
      mouseX: x,
      isPressed: true,
      lastPressed: data,
    });
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = ({ pageX }: { pageX: number }) => {
    const { isPressed, topDeltaX, lastPressed } = st;

    if (isPressed) {
      const mouseX = pageX - topDeltaX;
      const currentColumn = clamp(
        Math.round(mouseX / width),
        0,
        transformedArrList.length - 1
      );
      let newOrder = props.arrList;

      if (currentColumn !== props.arrList.indexOf(lastPressed)) {
        newOrder = updateOrder(
          props.arrList,
          props.arrList.indexOf(lastPressed),
          currentColumn
        );
      }
      transformedArrList = newOrder.map((value, index) => {
        return {
          id: `id-${index}`,
          value: value,
          name: index.toString(),
        };
      });
      setState({ ...st, mouseX });
    }
  };

  const mouseUpHandler = () => {
    setState({ ...st, isPressed: false, topDeltaX: 0 });
    window.removeEventListener("mouseup", mouseUpHandler);
    window.removeEventListener("mousemove", mouseMoveHandler);
  };

  return (
    <Row>
      <Col
        style={{
          height: "400px",
          margin: "50px",
          width: "100%",
          borderRadius: "50px",
          backgroundColor: "#E9EDDE",
          paddingBottom: "100px",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <NodeGroup
          data={transformedArrList}
          keyAccessor={(d) => d.id}
          start={(d) => {
            // console.log(`In starter, ${JSON.stringify(d)}`);
            return {
              barHeight: 0,
              opacity: 1e-6,
              x: [1e-6],
              scale: [1],
              shadow: [1],
            };
          }}
          enter={(d) => {
            // console.log(`In enter, ${JSON.stringify(d["value"])}`);

            // console.log(
            //   `In enter, ${JSON.stringify(
            //     scale(y(d["name"]).toFixed(0).toString())
            //   )}`
            // );
            return {
              barHeight: [y(d.value)],
              opacity: [0.7],
              scale: [1],
              shadow: [1],
              x: [scale(y(d.name).toFixed(0).toString())], //returns starting x pos of bar
              timing: { duration: 10, ease: easeExpInOut },
            };
          }}
          update={(d, i) => {
            console.log(`In update, ${JSON.stringify(d)}`);
            const dragging = st.lastPressed === d.value && st.isPressed;
            // console.log(dragging);
            return {
              barHeight: [y(d.value)],
              scale: [dragging ? 1.1 : 1],
              shadow: [dragging ? 5 : 1],
              x: [scale(y(d.name).toFixed(0).toString())],
              // props.sort ? (timing: { duration: 350, delay: i*25, ease: easeExpInOut }) : (timing: { duration: 350, delay: 5, ease: easeExpInOut })
              timing: props.sort
                ? { duration: 350, delay: i * 25, ease: easeExpInOut }
                : { duration: 350, delay: 5, ease: easeExpInOut },
            };
          }}
          leave={() => {
            // console.log(`In leave`);
            return {
              opacity: [1e-6],
              scale: [1],
              shadow: [1],
              x: [scale.range()[1]],
              timing: { duration: 10, ease: easeExpInOut },
            };
          }}
        >
          {(nodes) => (
            // <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {nodes.map(({ key, data, state }) => {
                // console.log("Nodes being mapped");
                // console.log(`Key: ${key}, data: ${JSON.stringify(data)}`);
                // console.log(data);
                const transX =
                  st.lastPressed === data.value && st.isPressed
                    ? st.mouseX
                    : state.x;
                return (
                  <div
                    key={key}
                    style={{
                      transform: `translate3d(${state.x}px, 0,0) scale(${state.scale})`,
                      boxShadow: `rgba(0, 0, 0, 0.4) 0px ${state.shadow}px ${
                        2 * state.shadow
                      }px 0px`,
                      WebkitTransform: `translate3d(${transX}px, 0, 0) scale(${state.scale})`,
                      zIndex: data.value === st.lastPressed ? 99 : data.value,
                    }}
                  >
                    <Bar
                      data={data}
                      animationProps={state}
                      barWidth={width}
                      containerHeight={400}
                      mouseDown={mouseDownHandler}
                      touchStart={touchStartHandler}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </NodeGroup>
      </Col>
    </Row>
  );
};

export default React.memo(Sorter);
