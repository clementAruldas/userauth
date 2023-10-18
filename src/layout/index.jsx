import React from "react";
import styled from "styled-components";

const LayoutContainer = styled.section``;

const HeaderWrapper = styled.section`
  height: 80px;
  width: 100%;
`;

function Layout(props) {
  const { children } = props;
  return (
    <LayoutContainer>
      <HeaderWrapper></HeaderWrapper>
      {children}
    </LayoutContainer>
  );
}

export default Layout;
