import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 2px 4px 6px 2px #e5e5e5;
  width: 60%;
  height: 30%;
  margin: auto;
  margin-top: 40px;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
  margin-top: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.advanced ? 25 : 100 / 3)}%;
`;

export const Input = styled.input`
  text-align: center;
`;
