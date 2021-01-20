import { useState, useEffect } from "react";

// dummy data
import initialState from "../userData.json";
import news from "../newsData.json";

const useInitialState = () => {
  const [state] = useState(initialState);
  const [hits, setHits] = useState<any>([]);

  useEffect(() => {
    setHits(news.news);
  }, []);

  return {
    state,
    hits,
  };
};

export default useInitialState;
