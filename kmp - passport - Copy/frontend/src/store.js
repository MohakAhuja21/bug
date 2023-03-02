import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";
import {
  productDetailsReducer,
  productsReducer,
} from "./reducers/productReducer";
import { orderReducer } from "./reducers/orderReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  order:orderReducer,
  auth: authReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };

export const server= "https://kmpserver.onrender.com/api/v1";