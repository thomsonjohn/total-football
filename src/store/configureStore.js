import { createStore, applyMiddleware, combineReducers } from "redux";
import { router5Middleware, router5Reducer } from "redux-router5";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import {
  matchesByLeague,
  selectedLeague,
  selectedMonth,
  error,
  isSignedIn
} from "../reducers/reducers";

const loggerMiddleware = createLogger();

export default function configureStore(router, preloadedState) {
  return createStore(
    combineReducers({
      matchesByLeague,
      selectedLeague,
      selectedMonth,
      error,
      isSignedIn,
      router: router5Reducer
    }),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        router5Middleware(router),
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
}
