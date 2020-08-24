import React from "react";
import styled from "styled-components";
import { getAcccount, createAccount } from "./localstorage/localstorage";

const AppStyled = styled.div`
  text-align: center;
`;

const HeaderStyled = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Login = styled.button`
  border: 1px solid black;
  background-color: gray;
  color: white;
  padding: 8px;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`;

const Heading = styled.h1`
  color: white;
`;

const Input = styled.input`
  border: 1px solid black;
  background-color: gray;
  padding: 8px;
  outline: none;
  color: white;

  margin-bottom: 16px;
`;

const App = () => {
  const account = getAcccount();
  
  const handleCreateAccount = (e) => {
    createAccount({ username: e.target.username.value });
  };

  return (
    <AppStyled>
      <HeaderStyled>
        <Heading>Remober</Heading>
        {account && <div>Hello {account.username}!</div>}
        {!account && (
          <form onSubmit={handleCreateAccount}>
            <Input name="username" />
            <Login type="submit">Create account</Login>
          </form>
        )}
      </HeaderStyled>
    </AppStyled>
  );
};

export default App;
