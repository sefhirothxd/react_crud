import React, { useState, createContext, useEffect } from 'react';
export const TodoContext = createContext();

const UseTodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);

  return (
    <TodoContext.Provider
      value={{
        setUser,
        user,
        token,
        setToken,
        todos,
        setTodos,
        login,
        setLogin,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default UseTodoProvider;
