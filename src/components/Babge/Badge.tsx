import React from "react";

type BadgeLabel = "area" | "population";

interface BabgeProps {
  color: string;
  value: number;
  label: BadgeLabel;
}

export const Badge = ({ color, value, label }: BabgeProps) => {
  return (
    <p className={`{width:100} p-2 m-2 badge ${color}`}>
      {label}: {value}
    </p>
  );
};
