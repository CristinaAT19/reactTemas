import React from "react";

const Circle = ({ color }) => {
  return (
    <>
      {/* bg-black */}
      <div className={`bg-${color} w-24 h-24 object-cover rounded-full`}></div>
    </>
  );
};

export default Circle;
