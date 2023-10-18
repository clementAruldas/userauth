import React from "react";
import styled from "styled-components";

const SettingsCotainer = styled.section``;

const SettingsImage = styled.div`
  display: flex;
  padding: 1rem;
  img {
    margin: auto;
    width: 35%;
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
function Settings() {
  return (
    <SettingsCotainer>
      <SettingsImage>
        <img
          alt="settings"
          src="https://th.bing.com/th/id/R.da2fef7e2b315828624307de6ee1d856?rik=fqpHW2UjZ%2bjuBQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_452183.png&ehk=X4wXsoOheajHnDtybuWV%2bOGso8I14oTEB2N1iONizDE%3d&risl=&pid=ImgRaw&r=0"
        />
      </SettingsImage>
      <SettingsContent>
        <p>This is settings page </p>
      </SettingsContent>
    </SettingsCotainer>
  );
}

export default Settings;
