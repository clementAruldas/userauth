import React, { useState } from "react";
import styled from "styled-components";
import Cred from "../../json/cred.json";
import Input from "../input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Span = styled.span`
  color: red;
  font-size: 12px;
  width: 90%;
  margin: auto;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const PasswordContainer = styled(InputContainer)``;

const Button = styled.div`
  padding: 1rem;
  font-size: 1rem;
  font-family: Lato;
  color: #000;
  text-align: center;
  background: linear-gradient(120deg, #f09 0%, #0ff 50%, #9f0 100%);
  border-radius: 10px;
  width: 90%;
  margin: auto;
  cursor: pointer;
`;

const LoginHeader = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: Lato;
`;
function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [responseData, setResponseData] = useState({});

  const [errMsg, setErrMsg] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });

    if (errMsg.msg !== "") {
      delete errMsg.msg;
    }
  };

  const checkData = (credData) => {
    let response = {};
    if (credData.username.length !== 0 && credData.password.length !== 0) {
      let dataResult = Cred.users.find(
        (item) =>
          item.username === credData.username &&
          item.password === credData.password
      );
      if (
        dataResult?.hasOwnProperty("username") &&
        dataResult?.hasOwnProperty("password")
      ) {
        response = { status: true, data: dataResult };
      } else {
        response = { status: false, msg: "Enter Valid Credentials" };
      }
    } else {
      response = { status: false, msg: "Enter Credentials" };
    }
    return response;
  };

  const validation = (data) => {
    let err = {};
    if (data.username?.length === 0 || data.password.length === 0) {
      err = { msg: "Check Username or Password" };
    } else {
      err = {};
    }

    return err;
  };

  const handleLogin = async () => {
    const validate = await validation(loginData);
    setErrMsg(validate);
    if (Object.keys(validate)?.length === 0) {
      const checking = await checkData(loginData);

      if (checking.status) {
        setResponseData(checking.data);
        // console.log(checking.data)
        sessionStorage.setItem("userdata",checking.data)
        navigate("/dashboard",{state:checking.data})
      } else {
        // alert(checking.msg);
        toast.error(checking.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error(validate.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <LoginContainer>
      {/* <LoginHeader>Login</LoginHeader> */}
      <InputContainer>
        <Input
          placeholder="Enter Username"
          name="username"
          label="UserName"
          type="text"
          value={loginData.username}
          onChange={(e) => handleChange(e)}
        />
        <Span></Span>
      </InputContainer>
      <PasswordContainer>
        <Input
          placeholder="Enter Password"
          name="password"
          label="Password"
          type="password"
          value={loginData.password}
          onChange={(e) => handleChange(e)}
        />
        <Span></Span>
      </PasswordContainer>
      <ToastContainer />
      <Button onClick={handleLogin}>Login</Button>
    </LoginContainer>
  );
}

export default Login;
