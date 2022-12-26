import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movieSlice';

export default configureStore({
  reducer: {
    movieSlice
  },
})
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()