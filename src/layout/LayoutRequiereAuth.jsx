import React, { useContext } from 'react';
import { TodoContext } from '../context/UseTodoProvider';
import { Navigate, Outlet } from 'react-router-dom';
const LayoutRequiereAuth = () => {
  const { login } = useContext(TodoContext);
  if (!login) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutRequiereAuth;
