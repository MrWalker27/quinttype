import styled from "styled-components"

const StyledText = styled.label`
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "20px"};
    width: ${(props) => props.width ? `${props.width}px` : "601.59px"};
    margin-left:${(props) => props.mleft || "50px"};
    margin-top: ${(props) => props.mtop ? `${props.mtop}px` : "-30px"};
    margin-bottom:${(props) => props.mbottom || "50px"};
    text-align:${(props) => props.talign || "left"};
    font-style: ${(props) => props.tstyle || "normal"};
    @media (max-width: 375px) {
        color:#282828;
        font-size: ${(props) => props.mobilefontSize ? `${props.mobilefontSize}px` : "17px"};
        width: ${(props) => props.mobileWidth ? `${props.mobileWidth}px` : "327px"};
        margin:auto;
        margin-left:${(props) => props.mmleft || "0px"};
        height:108.75px;
        text-align:${(props) => props.mtalign || "left"};
        margin-top: ${(props) => props.mmtop ? `${props.mmtop}px` : "0px"};
    }
    
`

export default StyledText