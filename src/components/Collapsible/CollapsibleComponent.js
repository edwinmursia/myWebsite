import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import './Collapsible.css'

export const ButtonWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
`

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible">
      <ButtonWrapper className="toggle" >
        <h3 style={{paddingBottom: 25}} >My programming experience</h3>
        <FaArrowDown onClick={() => setIsOpen(!isOpen)} style={{cursor: "pointer"}} />
      </ButtonWrapper>
      <div className={isOpen ? "content show" : "content"}>{props.children}</div>
    </div>
  );
};

export default Collapsible;