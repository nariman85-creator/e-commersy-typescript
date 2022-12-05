import { createStore, applyMiddleware, compose } from "redux";
import { reducers } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./sagas";
const sagaMiddleWare = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    store:any
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSagas);
window.store=store||[]

