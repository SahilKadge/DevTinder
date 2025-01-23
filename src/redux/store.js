import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./rootReducer";
import storage from 'redux-persist/lib/storage';
// create persist config 
const persistConfig = {
    key: "root",
    storage,
    blacklist: [],
}

// create  a presist reducer 
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create a store 
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST"], // Ignore redux-persist actions
          ignoredPaths: ['someReducer.someNonSerializableValue']
        },
      }),
  });
  
  // Create a persistor
  export const persistor = persistStore(store);
  
  export default store;