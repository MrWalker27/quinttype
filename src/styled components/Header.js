import styled from "styled-components";

const StyledHeader = styled.h1`
    grid-row:1;
    grid-column:1;
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "64px"};
    width: ${(props) => props.width ? `${props.width}px` : "auto"};
    font-weight: ${(props) => props.weight ? `${props.weight}` : "bold"};
    margin-left:50px;
  @media (max-width: 375px) {
    margin-left:0px;
    color: #242424;
    font-size: ${(props) => props.mobilefontSize ? `${props.mobilefontSize}px` : "30px"};
    width: ${(props) => props.mobileWidth ? `${props.mobileWidth}px` : "327px"};
    margin: auto;
    height: 72px;
  }
`;

export default StyledHeader;
