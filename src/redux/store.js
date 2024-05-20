import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducer";

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(promiseMiddleware))
  );
}

const store = configureStore();
export default store;
