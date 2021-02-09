import axios from 'axios';
import { useEffect, useState } from 'react';

export function useCats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    let myRequest = axios.CancelToken.source();

    const fetchCats = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/breeds`, {
          cancelToken: myRequest.token,
        });
        setCats(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCats();

    return () => myRequest.cancel();
  }, []);

  return cats;
}
