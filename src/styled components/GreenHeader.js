import styled from "styled-components";

const StyledGreenHeader = styled.h1`
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "16px"};
    width: ${(props) => props.width ? `${props.width}px` : "auto"};
    height: ${(props) => props.height ? `${props.height}px` : "auto"};
    font-weight: ${(props) => props.weight ? `${props.weight}` : "bold"};
    text-align:${(props) => props.talign || "left"};
    color: rgb(68, 215, 182);
    margin-top: ${(props) => props.mtop ? `${props.mtop}px` : "0px"};
  @media (max-width: 375px) {
    
    color: rgb(68, 215, 182);
    font-size: ${(props) => props.mobilefontSize ? `${props.mobilefontSize}px` : "16px"};
    width: ${(props) => props.mobilewidth ? `${props.mobilewidth}px` : "230px"};
    height: 22.391px;
    margin-top: ${(props) => props.mmtop ? `${props.mmtop}px` : "0px"};
    display:inline;
    font-weight: ${(props) => props.mobileweight ? `${props.mobileweight}` : "bold"};
    text-align:${(props) => props.mtalign || "left"};
    margin-left:${(props) => props.mmleft || "20px"};
    margin-bottom:${(props) => props.mmbot || "0px"};
  }
`;

export default StyledGreenHeader;
