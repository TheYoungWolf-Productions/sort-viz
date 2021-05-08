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
      {console.log(props.animationProps.barHeight)}
      <label
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          top: `${props.containerHeight - 50}px`,
          marginLeft: 20,
        }}
      >
        {props.animationProps.barHeight.toFixed(0)}
      </label>

      <label
        style={{
          fontSize: 18,
          fontWeight: "bold",
          position: "absolute",
          top: `${props.containerHeight}px`,
          marginLeft: 10,
        }}
      >
        {props.data.name}
      </label>
    </div>
  );
};
export default Bar;
// export default React.memo(Bar);
