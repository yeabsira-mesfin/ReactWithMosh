import React from "react";
interface Props {
  children: string;
  color?: string;
  onClick: () => void;
  
}
const Button = ({ children, onClick , color= "dark"}: Props) => {
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
