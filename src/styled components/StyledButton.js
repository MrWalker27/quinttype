import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 30px;
    display: inline-block;
    font-weight:bold;
    border: 1px solid rgb(68, 215, 182);
    background-color: ${(props) => props.backgroundColor || "transparent"};
    color: ${(props) => props.textColor || "black"};
    margin-right:10px;
    height:90%;
    font-size:18px;
    padding: 0 40px;
    width: max-content;
  @media (max-width: 375px) {
    font-size:0.875em;
    padding: 0 15px;
    width: max-content;
    height:100%;
  }
`;

export default StyledButton;