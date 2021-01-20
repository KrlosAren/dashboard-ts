import { useState, useEffect } from "react";

// dummy data
import initialState from "../userData.json";
import news from "../newsData.json";

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [hits, setHits] = useState<any>([]);

  useEffect(() => {
    setHits(news.news);
  }, []);

  // const addFounds = (payload: number) => {
  //   setState({
  //     ...state,
  //     money: state.money[0].amount.push(payload),
  //   });
  // };

  return {
    state,
    hits,
    // addFounds,
  };
};

export default useInitialState;
