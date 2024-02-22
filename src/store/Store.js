// store.js
import { configureStore } from '@reduxjs/toolkit';
import getProduct from '../slice/product-SLICE';

const store = configureStore({
  reducer:{
    getProduct : getProduct,
  }
});

export default store;
