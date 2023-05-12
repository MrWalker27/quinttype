import styled from "styled-components";

const StyledMainImg = styled.img`
  width: ${(props) => props.width || "327px"};
  grid-row: 1 / span 3;
  grid-column: 2;
  margin-left: ${(props) => props.mleft || "0px"};
  margin-top:${(props) => props.mtop || "20px"};
  @media (max-width: 375px) {
    width: ${(props) => props.mobileWidth || "294.3px"};
    margin: auto;
    margin-top: 10px;
  }
`;

export default StyledMainImg;
