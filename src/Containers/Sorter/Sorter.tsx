import React from "react";
import { Row, Col } from "react-bootstrap";
import { NodeGroup } from "react-move";
import { scaleLinear, scaleBand } from "d3-scale";
import { easeExpInOut } from "d3-ease";

import Bar from "../Bar/Bar";

interface props {
  arrList: number[];
}

const sorter: React.FC<props> = (props) => {
  let transformedArrList: { id: string; value: number; name: string }[] = [];
  props.arrList.map((value, index) => {
    transformedArrList.push({
      id: `id-${index}`,
      value: value,
      name: index.toString(),
    });
    return null;
  });

  const scale = scaleBand()
    .rangeRound([0, 1000])
    .domain(transformedArrList.map((d) => d.name))
    .padding(0.1);
  const width = scale.bandwidth();
  const y = scaleLinear().range([0, 350]).domain([0, 350]);

  return (
    <Row>
      <Col
        style={{
          height: "400px",
          margin: "50px",
          width: "100%",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <NodeGroup
          data={transformedArrList}
          keyAccessor={(d) => d.id}
          start={(d) => {
            // console.log(`In starter, ${JSON.stringify(d)}`);
            return { barHeight: 0, opacity: 1e-6, x: 1e-6 };
          }}
          enter={(d) => {
            // console.log(`In enter, ${JSON.stringify(d["value"])}`);

            // console.log(
            //   `In enter, ${JSON.stringify(y(d["name"]).toFixed(0).toString())}`
            // );
            return {
              barHeight: [y(d.value)],
              opacity: [0.7],
              x: [scale(y(d.name).toFixed(0).toString())],
              timing: { duration: 250, ease: easeExpInOut },
            };
          }}
          update={(d, i) => {
            // console.log(`In update, ${JSON.stringify(d)}`);
            return {
              barHeight: [y(d.value)],
              x: [scale(y(d.name).toFixed(0).toString())],
              timing: { duration: 250, delay: i * 25, ease: easeExpInOut },
            };
          }}
          leave={() => {
            // console.log(`In leave`);
            return {
              opacity: [1e-6],
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
                return (
                  <div
                    key={key}
                    style={{ transform: `translate(${state.x}px ,0px)` }}
                  >
                    <Bar
                      data={data}
                      animationProps={state}
                      barWidth={width}
                      containerHeight={400}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </NodeGroup>
        {/* <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <NodeGroup
            data={props.arrList}
            keyAccessor={(_, index) => index}
            start={(data, index) => ({
              opacity: 1e-6,
              x: 1e-6,
            })}
            enter={(d) => ({
              opacity: [0.7],
              x: [scale(d.toString())],
              timing: { duration: 750, ease: easeExpInOut },
            })}
            update={(d, i) => ({
              opacity: [0.7],
              x: [scale(d.toString())],
              timing: { duration: 750, delay: i * 50, ease: easeExpInOut },
            })}
            leave={() => ({
              opacity: [1e-6],
              x: [scale.range()[1]],
              timing: { duration: 750, ease: easeExpInOut },
            })}
          >
            {(nodes) => (
              <g>
                {nodes.map(({ data, key, state: { x, opacity } }) => (
                  <g key={key} transform={`translate(${x},0)`}>
                    <rect
                      height={450 - y(data)}
                      y={y(data)}
                      fill="#ff69b4"
                      width={width}
                      opacity={opacity}
                    />
                    <text
                      x={scale.bandwidth() / 2}
                      y={450 + 15}
                      dx="-.35em"
                      fill="#dadada"
                    >
                      {data}
                    </text>
                  </g>
                ))}
              </g>
            )}
          </NodeGroup>
        </svg> */}
      </Col>
    </Row>
  );
};

export default sorter;
