import styled from "styled-components";

const StyledHR = styled.hr`
  border: none;
  border-top: 1px solid grey;
  margin: auto auto 10px auto;
  width: 600px;
  @media (max-width: 375px) {
    width: 310px;
  }
`;

export default StyledHR;
