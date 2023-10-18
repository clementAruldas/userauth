import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../layout";
import Linechart from "./linechart";
import TableData from "./table";

function DashBoard() {
  const [userurl, setUserUrl] = useState({});

  useEffect(() => {
    checkUser();
  }, []);
  const checkUser = () => {
    let dataFetch = JSON.parse(sessionStorage.getItem("userdata"));
    console.log(dataFetch);
    setUserUrl(dataFetch);
  };

  const DashBoardContainer = styled.div`
    padding: 0 1.5rem;
  `;

  const DashBoardHeader = styled.div`
    padding: 1rem;
    text-transform: capitalize;
    font-size: 28px;
    font-family: Lato;
    font-weight: 600;
  `;

  const ChartWrapper = styled.div`
    display: grid;
    // grid-template-columns: 1fr;
    column-gap: 15px;
    row-gap: 30px;
    padding: 0 1rem;
  `;

  return (
    <Layout>
      <DashBoardContainer>
        <DashBoardHeader>dashboard</DashBoardHeader>
        <ChartWrapper>
          {userurl?.active_module === "user" ? (
            <div>
              <Linechart />
            </div>
          ) : (
            <>
              <div>
                <TableData />
              </div>
            </>
          )}
        </ChartWrapper>
      </DashBoardContainer>
    </Layout>
  );
}

export default DashBoard;
