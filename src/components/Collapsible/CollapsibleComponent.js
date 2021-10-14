import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import './Collapsible.css'

export const ButtonWrapper = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;

  &:hover {
    font-size: 30px;
  }
`
export const TheButton = styled.div``

const Collapsible = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false)

  const onRotated = () => {
    setIsRotated(!isRotated)
  }

  const onOpen = () => {
    setIsOpen(!isOpen)
  }

  const allFunctions = () => {
    onRotated();
    onOpen();
  }

  return (
    <div className="collapsible">
      <ButtonWrapper className="toggle" >
        <h3 className="my_header" style={{paddingBottom: 25, fontSize: '20px', cursor: "pointer", textAlign: "center"}} >Click to see my programming experience</h3>
        <TheButton onClick={() => allFunctions()} style={{cursor: "pointer", transition: "all 0.2s linear"}} spy={true} exact='true' >
          {isRotated ? <FaArrowUp/> : <FaArrowDown/>}
        </TheButton>
      </ButtonWrapper>
      <div className={isOpen ? "content show" : "content"}>{props.children}</div>
    </div>
  );
};

export default Collapsible;