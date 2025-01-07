// Common button jo sab jgh use hoga

import React from "react";

export default function Button({
  children,
  // default values
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  //   ye isliye empty h ki user ko koi apni css daalna ho toh
  className = "",
  ...props
}) {
  return (
    // yha pr default properties jo apn ne upar di hai vo daal dnge
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
