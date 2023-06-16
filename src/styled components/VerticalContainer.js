import styled from "styled-components";

const StyledVerticalContainer = styled.div`
  height: min-content;
  width: ${(props) => props.width ? `${props.width}px` : "648px"};
  display: flex;
  flex-direction: column;
  background-color:${(props) => (props.backColour || "white")};
  margin-left:${(props) => props.mleft || "0px"};
  margin-bottom:${(props) => props.mbot || "0px"};
  padding-bottom:${(props) => props.pbot || "0px"};
  @media (max-width: 375px) {
    display: ${(props) => (props.mdisplay || "none")};
  }
`;

export default StyledVerticalContainer;
