import styled from "styled-components";

const StyledMobileContainer = styled.div`
  display: none;
  @media (max-width: 375px) {
    width: ${(props) => props.mwidth ? `${props.mwidth}px` : "315px"};
    margin:auto;
    height: ${(props) => props.mheight ? `${props.mheight}px` : "min-content"};
    display: flex;
    flex-direction: column;
    background-color:${(props) => (props.mbackColour || "white")};
    padding-bottom:${(props) => props.mpbot || "0px"};
  }
`;

export default StyledMobileContainer;
