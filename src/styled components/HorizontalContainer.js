import styled from "styled-components";

const StyledHorizontalContainer = styled.div`
  height: min-content;
  width: ${(props) => props.width ? `${props.width}px` : "1140px"};
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => (props.mtop ? `${props.mtop}px` : "0px")};
  margin-bottom: ${(props) => (props.mbot ? `${props.mbot}px` : "0px")};
  @media (max-width: 375px) {
    width: ${(props) => props.mobileWidth ? `${props.mobileWidth}px` : "375px"};
    margin-top: 50px;
    display: ${(props) => (props.mdisplay || "none")};
  }
`;

export default StyledHorizontalContainer;
