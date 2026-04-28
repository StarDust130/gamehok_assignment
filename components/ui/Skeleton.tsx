import React from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  width = "100%",
  height = "16px",
}) => {
  const widthStyle = typeof width === "number" ? `${width}px` : width;
  const heightStyle = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      className={`bg-gradient-to-r from-[#0a150f] via-[#1a3a2a] to-[#0a150f] rounded ${className}`}
      style={{
        width: widthStyle,
        height: heightStyle,
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite",
      }}
    />
  );
};
