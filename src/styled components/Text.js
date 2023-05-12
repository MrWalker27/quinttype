import styled from "styled-components"

const StyledText = styled.label`
    font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : "20px"};
    width: ${(props) => props.width ? `${props.width}px` : "601.59px"};
    margin-left:50px;
    margin-top: ${(props) => props.mtop ? `${props.mtop}px` : "-30px"};
    margin-bottom: 30px;
    @media (max-width: 375px) {
        color:#282828;
        font-size: ${(props) => props.mobilefontSize ? `${props.mobilefontSize}px` : "17px"};
        width: ${(props) => props.mobileWidth ? `${props.mobileWidth}px` : "327px"};
        margin:auto;
        height:108.75px;
        margin-top:15px;
    }
    
`

export default StyledText