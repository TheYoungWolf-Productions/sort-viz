import React from "react";

interface props {
  data: { id: string; value: number; name: string };
  barWidth: number;
  containerHeight: number;
  animationProps: {
    scale: number;
    shadow: number;
    barHeight: number;
    opacity: number;
    x: number;
    timing?: {
      duration: number;
    };
  };
  mouseDown(
    data: number,
    x: number,
    e: React.MouseEvent<HTMLElement, MouseEvent> | undefined
  ): void;
  touchStart(
    data: number,
    x: number,
    e: React.TouchEvent<HTMLDivElement> | undefined
  ): void;
}

const shouldLabelExist = (
  label: number,
  containerHeight: number,
  barWidth: number,
  x: number
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
          transform: `translate(0px, ${0}px)`,
        }}
      >
        {label.toFixed(0)}
      </label>
    );
  }
};
const Bar: React.FC<props> = (props) => {
  // console.log(typeof props.animationProps.x);
  return (
    <div
      onMouseDown={(e) => {
        console.log(typeof props.animationProps.x);
        return props.mouseDown(props.data.value, props.animationProps.x, e);
      }}
      onTouchStart={(e) =>
        props.touchStart(props.data.value, props.animationProps.x, e)
      }
    >
      <div
        style={{
          // margin: "10px",
          backgroundColor: "#5F464B",
          opacity: props.animationProps.opacity,
          width: props.barWidth,
          position: "absolute",
          height: props.animationProps.barHeight,
          // transform: `translate(${props.animationProps.x}px, ${
          transform: `translate3d(0px, ${
            props.containerHeight - props.animationProps.barHeight - 20
          }px, 0px)`,
        }}
      />
      {/* {console.log(props.containerHeight - props.animationProps.barHeight - 20)} */}
      {shouldLabelExist(
        props.animationProps.barHeight,
        props.containerHeight,
        props.barWidth,
        props.animationProps.x
      )}
      <label
        style={{
          fontSize: 14,
          fontWeight: "bold",
          position: "absolute",
          top: `${props.containerHeight}px`,
          marginLeft: "10px",
          // transform: `translate(0px, ${0}px)`,
        }}
      >
        {props.data.name}
      </label>
    </div>
  );
};
export default Bar;
// export default React.memo(Bar);
