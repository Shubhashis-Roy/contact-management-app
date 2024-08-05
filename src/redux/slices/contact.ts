import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------

interface cardListObj {
  id: string;
}

export interface ContactInitialState {
  cardList: Array<cardListObj>;
  card: { [key: string]: string };
}

const initialState: ContactInitialState = {
  cardList: [],
  card: {},
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    // Add card list
    addCard(state, actions) {
      const index = state.cardList.findIndex(
        (item) => item.id === actions.payload.id
      );

      if (index !== -1) {
        state.cardList[index] = actions.payload; // Use 'card' instead of 'data'
      } else {
        // If not found, you can choose to add the 'card' to the array
        state.cardList.push(actions.payload);
      }
    },

    // Delete Card list
    deleteCard(state, action) {
      const index = state.cardList.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.cardList.splice(index, 1);
      }
    },

    // editCard
    editCard(state, action) {
      const cardItem = state.cardList.find(
        (item) => item.id === action.payload
      );
      if (cardItem) {
        state.card = cardItem;
      }
    },

    // Clear single card data
    clearCardData(state) {
      state.card = {};
    },
  },
});

// Reducer
export default slice.reducer;

// Actions

export const { addCard, deleteCard, editCard, clearCardData } = slice.actions;

// ----------------------------------------------------------------------
