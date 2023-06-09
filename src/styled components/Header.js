import styled from "styled-components";

const StyledHeader = styled.h1`
    grid-row:1;
    grid-column:1;
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "64px"};
    width: ${(props) => props.width ? `${props.width}px` : "auto"};
    height: ${(props) => props.height ? `${props.height}px` : "auto"};
    font-weight: ${(props) => props.weight ? `${props.weight}` : "bold"};
    margin-left:${(props) => props.mleft || "50px"};
    text-align:${(props) => props.talign || "left"};
    color: #242424;
    margin-top: ${(props) => props.mtop ? `${props.mtop}px` : "0px"};
  @media (max-width: 375px) {
    margin-left:0px;
    color: #242424;
    font-size: ${(props) => props.mobilefontSize ? `${props.mobilefontSize}px` : "30px"};
    width: ${(props) => props.mobileWidth ? `${props.mobileWidth}px` : "327px"};
    margin: auto;
    height: ${(props) => props.mobileHeight ? `${props.mobileHeight}px` : "72px"};
    margin-top: ${(props) => props.mmtop ? `${props.mmtop}px` : "0px"};
    display:inline;
    font-weight: ${(props) => props.mobileweight ? `${props.mobileweight}` : "bold"};
    text-align:${(props) => props.mtalign || "left"};
    margin-left:${(props) => props.mmleft || "0px"};
    margin-bottom:${(props) => props.mmbot || "0px"};
  }
`;

export default StyledHeader;
