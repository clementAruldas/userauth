import React from "react";
import styled from "styled-components";
import NavBar from "../components/navbar/index";
import Header from "../components/header";

const LayoutContainer = styled.section``;

const HeaderWrapper = styled.section`
  position: fixed;
  height: 100px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: white;
  z-index: 1;
`;

const BodyContainer = styled.section`
  padding-top: 100px;
  // position: fixed;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5, #ffffff);
`;

function Layout(props) {
  const { children } = props;
  return (
    <LayoutContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyContainer>{children}</BodyContainer>
    </LayoutContainer>
  );
}

export default Layout;
