import type { tabArray } from '@encounter/constant';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IEncounterType {
  form: { [key in (typeof tabArray)[number]['id']]: (typeof tabArray)[number]['defaultValue'] };
  activeForm: (typeof tabArray)[number]['id'] | null;
}

const initialState: IEncounterType = {
  form: {
    demographics: {
      patientName: '',
      address: '',
      phoneNumber: '',
      dateOfBirth: ''
    },
    abcn: {},
    medications: {},
    chronic: {},
    allergies: {},
    surgeries: {},
    hospitalizations: {},
    reviewSystems: {},
    nurseTriage: {},
    careAdvice: {},
    appointments: {}
  },
  activeForm: null,
};

export const encounterSlice = createSlice({
  name: 'encounter',
  initialState,
  reducers: {
    updateEncounterFormValue: (
      state: IEncounterType,
      action: PayloadAction<Partial<IEncounterType['form']>>
    ) => {
      state.form = {...state.form,...action.payload};
    },
    setActiveForm: (
      state: IEncounterType,
      action: PayloadAction<IEncounterType['activeForm']>
    ) => {
      state.activeForm = action.payload;
    }
  }
});

export const encounterSelector = (state: { encounter: IEncounterType }) => {
  return state.encounter;
};

const { actions, reducer } = encounterSlice;

export const { updateEncounterFormValue, setActiveForm } = actions;

export default reducer;
