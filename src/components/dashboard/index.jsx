import React from "react";
import styled from "styled-components";
import Layout from "../../layout";

const DashBoardContainer = styled.div`
  // background-color: black;
`;
function DashBoard() {
  return (
    <Layout>
      <DashBoardContainer>dashboard</DashBoardContainer>
    </Layout>
  );
}

export default DashBoard;
