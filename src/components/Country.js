import React from "react";

const Country = ({ region }) => {
  return (
    <div className="flex justify-center mb-16 items-center w-48 p-0 h-10 text-2xl font-extrabold underline">
      <h1>{region}</h1>
    </div>
  );
};

export default Country;
