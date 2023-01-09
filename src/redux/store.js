// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { contactsSlice } from './slice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const myContactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const store = configureStore({
//   reducer: {
//     contacts: myContactsReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);







import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const myContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer, 
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);