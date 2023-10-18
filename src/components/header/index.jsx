import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getSessionData } from "../../session";

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
    width: 50px;
    height: 50px;
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
  @media (max-width: 430px) {
    display: none;
  }
`;

const ResponsiveNav = styled.div`
  display: none;
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
  @media (max-width: 430px) {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    p {
      a {
        text-decoration: none;
        color: black;
        text-transform: capitalize;
      }
      &:hover {
        transform: none;
      }
    }
    div {
      display: flex;
      justify-content: flex-end;
      img {
        width: 40px;
        height: 30px;
      }
    }
  }
`;

const ResponsiveNavContainer = styled.div`
  display: none;
  @media (max-width: 430px) {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
      width: 50px;
      height: 35px;
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    width: 200px;
    height: 100px;
  }
  @media (max-width: 430px) {
    img {
      width: 150px;
      height: 100px;
    }
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
  const [menuShow, setmenuShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    checkData();
  }, []);
  const checkData = async () => {
    // const userData = sessionStorage.getItem("userdata");
    let data = await getSessionData();
    if (data?.hasOwnProperty("active_module")) {
      setUserName(data);
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
              <Link to={item.path}>{item.name}</Link>
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
      {!menuShow && (
        <ResponsiveNavContainer onClick={() => setmenuShow(true)}>
          <img
            src="https://css-tricks.com/wp-content/uploads/2012/10/threelines.png"
            alt="menu"
          />
          Menu
        </ResponsiveNavContainer>
      )}
      {menuShow && (
        <ResponsiveNav>
          <div>
            <img
              onClick={() => setmenuShow(false)}
              src="https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg"
              alt="close"
            />
          </div>

          {userName.permission?.length > 0 &&
            userName.permission?.map((item) => (
              <p>
                <Link to={item.path}>{item.name}</Link>
              </p>
            ))}
        </ResponsiveNav>
      )}
    </HeaderContainer>
  );
}

export default Header;
