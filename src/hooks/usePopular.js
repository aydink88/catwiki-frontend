import axios from 'axios';
import { useEffect, useState } from 'react';

export function usePopular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    let myRequest = axios.CancelToken.source();

    const fetchPopular = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/popular`, {
          cancelToken: myRequest.token,
        });
        const temp = response.data.data.map((item) => item.id);
        setPopular(temp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopular();

    return () => myRequest.cancel();
  }, []);

  return popular;
}
