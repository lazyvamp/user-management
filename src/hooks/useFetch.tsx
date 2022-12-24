import { useEffect, useState } from "react";
import { dispatcher } from "../helper/storeHelper";
import http from "../services/httpService";

const useFetch = (url: string, actionType: string, config?: object) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    async function executeGetRequest() {
      try {
        setLoading(true);
        const response = await http.get(url, config);
        setData(response.data);
        if (actionType) {
            dispatcher(actionType, response.data)
        }
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }
    executeGetRequest();
    return () => {
      setData([]);
      setError({});
    };
  }, [url,actionType, config]);

  return [data, setData, loading, error];
};

export default useFetch;
