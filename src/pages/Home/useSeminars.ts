import { useEffect, useState } from 'react';
import { ISeminarsResponse } from '../../types/Seminar';
import { fetchData } from '../../services/Seminars';

const useFetch = () => {
  const [seminars, setSeminars] = useState<ISeminarsResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        const data = await response?.json();

        setSeminars(data);
        console.log(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(
            error ? error.message : 'Что-то пошло не так, попробуйте позже',
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    seminars,
    isLoading,
    error,
    setSeminars,
    setIsLoading,
    setError,
  };
};

export default useFetch;
