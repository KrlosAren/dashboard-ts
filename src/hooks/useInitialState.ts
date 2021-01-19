import { useState, useEffect } from "react";
import { NewsProps, NewsType } from "../interfaces/index";

// dummy data
import initialState from "../userData.json";
import news from "../newsData.json";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
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
