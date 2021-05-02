import styled from "styled-components";
import "./App.css";
import CalculatorForm from "./Components/calculator-form/calculatorForm";
import NavBar from "./Components/navbar";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppWrapper>
      <NavBar />
      <CalculatorForm />
    </AppWrapper>
  );
}

export default App;
