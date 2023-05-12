import styled from "styled-components";

const StyledSmallContainer = styled.div`
  height: min-content;
  width: 1140px;
  margin: auto;
  margin-top: 50px;
  background-color: #f4faf9;
  padding: 24px;
  padding-left: 115px;
  display: grid;
  padding-top: 50px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 501px 500px;
  @media (max-width: 375px) {
    width: 375px;
    height: min-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 0px;
    padding-top: 50px;
    margin-top: -30px;
  }
`;

export default StyledSmallContainer;
