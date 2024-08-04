import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

interface Card {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactState {
  cardList: Card[];
  card: Card | ""; // Make 'card' nullable
}

const initialState: ContactState = {
  cardList: [],
  card: "", // Initialize card as null
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Add card list
    addCard(state, action: { payload: Card }) {
      const index = state.cardList.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.cardList[index] = action.payload;
      } else {
        state.cardList.push(action.payload);
      }
    },

    // Delete Card list
    deleteCard(state, action: { payload: number }) {
      const index = state.cardList.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cardList.splice(index, 1);
      }
    },

    // Update card within the cardList
    editCard(state, action: { payload: Card }) {
      const index = state.cardList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cardList[index] = action.payload;
      }
    },
  },
});

// Reducer
export default slice.reducer;

// Actions

export const { addCard, deleteCard, editCard } = slice.actions;

// -------------------------------------------------------
