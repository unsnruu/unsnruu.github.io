import React from "react";

interface RemixIconProps {
  iconName: string;
}
export default function RemixIcon({ iconName }: RemixIconProps) {
  return <i className={`ri-${iconName}`} />;
}
