import React, { useState, useEffect, useCallback } from "react";

const useAsync = (asyncFunc, immediate = true) => {
    const [status, setStatus] = useState("idle");
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);
  
    const execute = useCallback(() => {
      setStatus("pending");
      setValue(null);
      setError(null);
  
      return asyncFunc()
        .then(response => {
          setValue(response);
          setStatus("success");
        })
        .catch(error => {
          setError(error.message);
          setStatus("error");
        });
    }, [asyncFunc]);
  
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [execute, immediate]);
  
    return { execute, status, value, error };
  };
  export default useAsync