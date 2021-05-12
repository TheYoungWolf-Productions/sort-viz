import React from "react";

interface props {
  data: { id: string; value: number; name: string };
  barWidth: number;
  containerHeight: number;
  animationProps: {
    barHeight: number;
    opacity: number;
    x?: string[] | number[];
    timing?: {
      duration: number;
    };
  };
}

const shouldLabelExist = (
  label: number,
  containerHeight: number,
  barWidth: number
) => {
  if (label > 40 && barWidth > 80) {
    return (
      <label
        style={{
          color: "#E7E247",
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          top: `${containerHeight - 50}px`,
          marginLeft: "1.8rem",
        }}
      >
        {label.toFixed(0)}
      </label>
    );
  }
};
const Bar: React.FC<props> = (props) => {
  // console.log(props.animationProps.x);
  return (
    <div>
      <div
        style={{
          // margin: "10px",
          backgroundColor: "#5F464B",
          opacity: props.animationProps.opacity,
          width: props.barWidth,
          position: "absolute",
          height: props.animationProps.barHeight,
          // transform: `translate(${props.animationProps.x}px, ${
          transform: `translate(0px, ${
            props.containerHeight - props.animationProps.barHeight - 20
          }px)`,
        }}
      />
      {/* {console.log(props.containerHeight - props.animationProps.barHeight - 20)} */}
      {shouldLabelExist(
        props.animationProps.barHeight,
        props.containerHeight,
        props.barWidth
      )}
      <label
        style={{
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          top: `${props.containerHeight}px`,
          marginLeft: 12,
        }}
      >
        {props.data.name}
      </label>
    </div>
  );
};
export default Bar;
// export default React.memo(Bar);
