import React from "react";

interface props {
  data: { id: string; value: number; name: string };
  barWidth: number;
  containerHeight: number;
  animationProps: {
    barHeight: number;
    opacity: number;
    x?: string | number;
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
  if (label > 40 && barWidth > 40) {
    return (
      <label
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          top: `${containerHeight - 50}px`,
          marginLeft: "1.1rem",
        }}
      >
        {label.toFixed(0)}
      </label>
    );
  }
};
const Bar: React.FC<props> = (props) => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          backgroundColor: "teal",
          opacity: props.animationProps.opacity,
          width: props.barWidth,
          height: props.animationProps.barHeight,
          transform: `translate(0, ${
            props.containerHeight - props.animationProps.barHeight - 20
          }px)`,
        }}
      />
      {/* {console.log(props.animationProps.barHeight)} */}
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
