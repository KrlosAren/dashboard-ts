import { useState } from "react";

// dummy data
import initialState from "../userData.json";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  return {
    state,
  };
};

export default useInitialState;
