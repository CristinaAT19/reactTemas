import React from "react";
import { Link } from "react-router-dom";

const Links = ({ url, name }) => {
  return (
    <>
      <Link
        to={url}
        className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600
         hover:text-white px-5 py-3 text-lg font-semibold rounded-md"
      >
        {name}
      </Link>
    </>
  );
};

export default Links;
