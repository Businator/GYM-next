import { configureStore } from '@reduxjs/toolkit';
import langReducer from './slices/langSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
