import React from "react";
import DataPage from "./components/dataPage/DataPage";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 90%;
  width: 1140px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const App = () => {
  return (
    <Container>
      <DataPage />
    </Container>
  );
};

export default App;
