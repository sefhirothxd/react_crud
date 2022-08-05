import { useState } from 'react';

import axios from 'axios';

axios.defaults.baseURL = 'https://ms-discord-upy5mhs63a-rj.a.run.app';

export const useAxios = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      if (result.status === 200) {
        console.log(result);
        console.log(loading);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return result;
      }
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return { error, loading, fetchData };
};
