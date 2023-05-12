import styled from "styled-components"


const StyledMainContainer = styled.div`
    height: 412.28px;
    width:1140px;
    background-color:white;
    margin:auto;
    display:grid;
    grid-template-columns: 752px 327px;
    grid-template-rows: repeat(3,1fr);
    margin-top:50px;    
    @media (max-width: 375px) {
        width:375px;
        height:min-content;
        background-color:white;
        display:flex;
        flex-direction:column;
        padding-top:50px;
        margin-top:0px;
    }
`

export default StyledMainContainer