import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface Input {
  text: string;
  history: string[];
};

const initialState: Input = {
  text: '',
  history: [],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.history.push(state.text);
      state.text = action.payload;
    },
  },
});

export const { setText } = inputSlice.actions;
export default inputSlice.reducer;
