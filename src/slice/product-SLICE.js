import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductsApi } from '../api/product-API';

export const allProductsSlice = createAsyncThunk(
  'getProduct',
  async () => {
    try {
      const response = await getAllProductsApi();
      return response;
    } catch (error) {
      throw error;
    }
    
  }
);

const getProduct = createSlice({
  name: 'getProduct',
  initialState: {
    product: [],
    isloading: false,
    iserror: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(allProductsSlice.pending, (state) => {
        state.isloading = true;
      })
      .addCase(allProductsSlice.fulfilled, (state, action) => {
        state.isloading = false;
        state.product = action.payload;
      })
      .addCase(allProductsSlice.rejected, (state, action) => {
        state.isloading = false;
        state.iserror = action.error.message;
      })
  },
});


export default getProduct.reducer;
