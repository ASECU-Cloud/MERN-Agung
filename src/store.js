import { configureStore } from "@reduxjs/toolkit";
import formData from "./Forms/formSlice";

export const store = configureStore({
  reducer: {
    form: formData,
  },
});
