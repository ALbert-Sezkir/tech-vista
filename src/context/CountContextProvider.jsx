import PropTypes from "prop-types";
import { useReducer } from "react";
import { getOrders } from "../functions/api";
import { CountContext } from "./countContext";

import {
  getFromLocalStorage,
  savetoLocalStorage,
} from "../functions/functions";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "SET_COUNT":
      return { count: action.payload };
  }
};

export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;

CountContextProvider.propTypes = {
  children: PropTypes.object,
};
