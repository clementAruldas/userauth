import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  align-items: center;
  gap: 10px;
  width: fit-content;
  text-transform: capitalize;

  img {
    width: 40px;
    height: 40px;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  p {
    a {
      text-decoration: none;
      color: black;
      text-transform: capitalize;
    }
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 200px;
    height: 100px;
  }
`;

const TextContainer = styled.div`
  line-height: 20px;
  span {
    font-size: 12px;
    color: #c2bec1;
    cursor: pointer;
  }
`;
function Header() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    checkData();
  }, []);
  const checkData = () => {
    const userData = sessionStorage.getItem("userdata");
    console.log(userData);
    let data = JSON.parse(userData);
    if (data?.hasOwnProperty("active_module")) {
      setUserName(JSON.parse(userData));
    } else {
      navigate("/");
    }
  };

  const logoutFun = () => {
    sessionStorage.removeItem("userdata");
    navigate("/");
  };
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img
          src="https://t4.ftcdn.net/jpg/02/04/59/29/360_F_204592965_Xgu7wwQEj8QSnmI0HALnFzyBAIUOMz0j.jpg"
          alt="logo"
        />
      </LogoWrapper>
      <NavLinkContainer>
        {userName.permission?.length > 0 &&
          userName.permission?.map((item) => (
            <p>
              <Link to={`/${item}`}>{item}</Link>
            </p>
          ))}
      </NavLinkContainer>
      <ProfileWrapper>
        <img
          src="https://i.pinimg.com/originals/a8/57/00/a85700f3c614f6313750b9d8196c08f5.png"
          alt="profile"
        />
        <TextContainer>
          {userName.username}
          <br />
          <span onClick={logoutFun}>Logout</span>
        </TextContainer>
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
