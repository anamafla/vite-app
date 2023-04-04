import React from "react";

export const Header = () => {
  return (
    <>
      <div>Hello World from Colombia!</div>
      {import.meta.env.VITE_API_URL}
    </>
  );
};
