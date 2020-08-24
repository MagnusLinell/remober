import { v4 as uuidv4 } from "uuid";

const generateSessionId = () => {
  return btoa(Array.from({ length: 40 }, () => 1).map(() => uuidv4()).join("-"));
};

export const createAccount = ({ username }) => {
  localStorage.setItem("sessionId", generateSessionId());
  localStorage.setItem("username", username);
};

export const getAcccount = () => {
  const sessionId = localStorage.getItem("sessionId");
  const username = localStorage.getItem("username");
  if (!sessionId || !username) {
    return null;
  }
  return {
    sessionId,
    username,
  };
};
