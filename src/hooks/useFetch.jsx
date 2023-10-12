// fetching data

import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
      try {
        //block code
        const res = await fetch(url);
        const response = await res.json();
        setIsLoading(false);
        setIsError(false);
        setData(response);
      }  catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (isLoading, isError, data);
};