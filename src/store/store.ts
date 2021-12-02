import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type RootStoreState = ReturnType<typeof store.getState>;