import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IToastType {
  message: string | null;
  type: 'success' | 'error' | 'info' | 'warning' | null;
}

const initialState = {
  message: null,
  type: null
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    toastShow: (state: IToastType, action: PayloadAction<IToastType>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    }
  }
});

export const toastSelector = (state: { toast: IToastType }) => {
  return {
    message: state.toast?.message ? state.toast.message?.toString() : '',
    type: state.toast.type
  };
};

const { actions, reducer } = toastSlice;

export const { toastShow } = actions;

export default reducer;
