import styled from "styled-components"


const StyledButtonContainer = styled.div`
        width:752px;
        height:60.69px;
        padding-left:${(props) => props.pleft || "50px"};
        margin-top: ${(props) => props.mtop ? `${props.mtop}px` : "0px"};
        margin-bottom: ${(props) => props.mbot ? `${props.mbot}px` : "0px"};
    @media (max-width: 375px) {
        width:327px;
        height:52.09px;
        display:flex;
        flex-direction:row;
        margin:auto;
        justify-content:center;
        padding-left:0px;
        margin-top: ${(props) => props.mmtop ? `${props.mmtop}px` : "0px"};
        margin-bottom: ${(props) => props.mmbot ? `${props.mmbot}px` : "0px"};
        margin-left: ${(props) => props.mmleft ? `${props.mmleft}px` : "0px"};
    }
`

export default StyledButtonContainer