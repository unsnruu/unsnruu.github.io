import React from "react";

interface RemixIconProps {
  iconName: string;
  style?: React.CSSProperties;
}
export default function RemixIcon({ iconName, style }: RemixIconProps) {
  return (
    <i
      className={`ri-${iconName}`}
      style={style ? style : { fontSize: "1.75rem" }}
    />
  );
}
