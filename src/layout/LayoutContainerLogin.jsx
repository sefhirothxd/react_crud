import React, { useContext } from 'react';
import { TodoContext } from '../context/UseTodoProvider';
import { Navigate, Outlet } from 'react-router-dom';
const LayoutContainerLogin = () => {
  const { login } = useContext(TodoContext);
  if (login) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutContainerLogin;
