import React from "react";
import styled from "styled-components";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const App = () => (
  <StyledApp>
    <p>Broccoli & Co.</p>
  </StyledApp>
);

export default App;
