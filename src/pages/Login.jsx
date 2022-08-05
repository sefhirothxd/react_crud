import React, { useContext, useEffect } from 'react';
import { useAxios } from '../services/useAxios';
import { TodoContext } from '../context/UseTodoProvider';
import Form from '../components/Form';
import { convertJWT } from '../helpers/convertJWT';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setToken, setUser, setLogin } = useContext(TodoContext);
  const { fetchData, loading, error } = useAxios();

  const navegate = useNavigate();

  const checkToken = async () => {
    console.log('holaa');
    const tokenStorages = localStorage.getItem('token');
    const res = await fetchData({
      method: 'GET',
      url: '/auth/check',
      headers: {
        Authorization: `Bearer ${tokenStorages}`,
      },
      data: {},
    });
    console.log(res);
    if (res?.status === 200) {
      console.log('Check token');
      setLogin(true);
      setToken(tokenStorages);
      setUser(convertJWT(tokenStorages));
      navegate('/');
    } else {
      setLogin(false);
    }
  };

  const getDataProfile = async (email, discord) => {
    if (email.trim() === '' || discord.trim() === '') {
      return alert('llene todos los campos');
    }
    console.log(email, discord);
    const res = await fetchData({
      method: 'POST',
      url: '/auth/login',
      headers: {},
      data: {
        email: email,
        discordId: discord,
      },
    });
    console.log(res);
    // res?.status === 200 && setToken(res.data.token);
    if (res?.status === 200) {
      setToken(res.data.token);
      setUser(convertJWT(tokenStorages));
      localStorage.setItem('token', res.data.token);
      setLogin(true);
      navegate('/');
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-2xl text-white font-bold">Cargando...</p>
      ) : (
        <Form getDataProfile={getDataProfile} error={error} />
      )}
    </>
  );
};

export default Login;
