import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store.ts";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  chartData: {},
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading } = slice.actions;

// ----------------------------------------------------------------------

export const getChartData = () => async () => {
  //   dispatch(slice.actions.startLoading());
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // dispatch(slice.actions.hasError(error));
  }
};
