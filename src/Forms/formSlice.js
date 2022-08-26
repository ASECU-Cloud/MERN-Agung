import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [123], errDisp: [] };

export const formSlice = createSlice({
  name: "formThing",
  initialState,
  reducers: {
    showForm: (state) => {
      return state.data;
    },
  },
});

export const { showForm } = formSlice.actions;

export default formSlice.reducer;
