import React from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 50%;
    margin: auto;
  }
`;

const SettingsImage = styled.div`
  display: flex;
  padding: 1rem;
  img {
    margin: auto;
    width: 35%;
  }
  @media (max-width: 430px) {
    img {
      width: 55%;
    }
  }
`;
const SettingsContent = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-family: Lato;
    font-weight: 600;
    font-size: 24px;
  }
`;
function NotFound() {
  return (
    <NotFoundContainer>
      <SettingsImage>
        <img
          alt="not found"
          src="https://static.vecteezy.com/system/resources/previews/005/883/254/original/page-not-found-404-error-concept-illustration-free-vector.jpg"
        />
      </SettingsImage>
      <SettingsContent>
        <p>
          Unauthorised User,
          <br /> Please Contact Admin{" "}
        </p>
      </SettingsContent>
    </NotFoundContainer>
  );
}

export default NotFound;
