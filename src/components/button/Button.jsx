import React from "react";

const Button = ({ color, text, opcion }) => {
  return (
    <>
      {/* border-violet-600 */}
      <button
        onClick={opcion}
        className={`border-2 border-${color} text-${color} rounded-md px-6 py-2 font-medium
         text-center text-xl hover:bg-${color} hover:text-white`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
