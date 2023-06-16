import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 233px;
  height: 164.38px;
  background-color: ${(props) => (props.type ? "rgb(255,255,255)" : "rgb(245,250,249)")};
  border-radius: ${(props) => (props.type ? "10px" : "0px")};
  box-shadow: rgba(177, 177, 177, 0.5) 0px 2px 20px 0px;
  box-shadow: ${(props) => (props.type ? "rgba(177, 177, 177, 0.5) 0px 2px 20px 0px" : "0px 0px 10px 0px rgba(0, 0, 0, 0.0)")};
  margin:0px;
  display:inline-flex;
  flex-direction:column;
  padding: 40px 20px 0px 20px;
`;

const Example = ({ type,setterM,setter1,setter2,setter3,content }) => {

  const handleClick = () => {
      setterM(true);
      setter1(false);
      setter2(false);
      setter3(false);
  };

  return (
    <StyledCard type={type} onClick={handleClick}>
      {content}
    </StyledCard>
  );
};

export default Example;
