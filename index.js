import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./rootReducer";

// Allow redux devtools only for development build 
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));

export function configureStore() {
    return createStore(
        rootReducer,
        devTools
    );
}

