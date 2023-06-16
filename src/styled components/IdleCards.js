import styled from "styled-components";

const StyledIdleCard = styled.div`
  width: 202.8px;
  height: 178.95px;
  background-color: "white";
  border-radius: ${(props) => (props.type ? "10px" : "0px")};
  border: 1px solid rgba(177, 177, 177, 0.5);
  box-shadow: rgba(177, 177, 177, 0.5) 0px 2px 20px 0px;
  margin-bottom:24px;
  display:inline-flex;
  flex-direction:column;
  padding: 24px;
  @media (max-width: 375px) {
    width: 311px;
  height: 77px;
  padding: 32px;
  margin-left:-30px;
  margin-bottom:10px;
  display:grid;
  grid-template-columns: 65px 246px;
  grid-template-rows:30.39px 44.78px;
  
  }
`;

export default StyledIdleCard;