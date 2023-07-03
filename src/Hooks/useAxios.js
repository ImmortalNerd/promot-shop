import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useAxios(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([]);
  const getProducts = async (url) => {
    try {
      const response = await axios(url);
      setLoading(false);
      setData(response.data);

    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getProducts(url);
  }, []);

  return { loading, data };
};