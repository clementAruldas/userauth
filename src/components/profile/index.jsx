import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSessionData } from "../../session";
const ProfileContainer = styled.section`
  padding: 1rem 2rem;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  img {
    height: 200px;
    width: 200px;
    border-radius: 25%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
const DetailsContainer = styled.div`
  p {
    text-transform: capitalize;
    font-family: Lato;
    font-size: 18px;
    font-weight: 500;

    span {
      color: #878684;
    }
  }
`;
function Profile() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchData = async () => {
    const data = await getSessionData();
    if (data?.active_module !== "admin") {
      setUserDetails(data);
    } else {
      setUserDetails({});
    }
  };
  return (
    <ProfileContainer>
      <ImageContainer>
        <img
          src="https://bestprofilepictures.com/wp-content/uploads/2021/08/Amazing-Profile-Picture-for-Facebook.jpg"
          alt="profile "
        />
      </ImageContainer>
      <DetailsContainer>
        <p>
          Name : <span>{userDetails?.username}</span>
        </p>
        <p>
          User Type : <span>{userDetails?.active_module}</span>
        </p>
      </DetailsContainer>
    </ProfileContainer>
  );
}

export default Profile;
