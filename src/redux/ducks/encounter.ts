import type { tabArray } from '@encounter/constant';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IEncounterType {
  value: { [key in (typeof tabArray)[number]['id']]: object };
  activeTab: (typeof tabArray)[number]['id'] | null;
}

const initialState: IEncounterType = {
  value: {
    demographics: {},
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
  activeTab: null,
};

export const encounterSlice = createSlice({
  name: 'encounter',
  initialState,
  reducers: {
    updateEncounterValue: (
      state: IEncounterType,
      action: PayloadAction<IEncounterType['value']>
    ) => {
      state.value = action.payload;
    },
    setActiveTab: (
      state: IEncounterType,
      action: PayloadAction<IEncounterType['activeTab']>
    ) => {
      state.activeTab = action.payload;
    }
  }
});

export const encounterSelector = (state: { encounter: IEncounterType }) => {
  return state.encounter;
};

const { actions, reducer } = encounterSlice;

export const { updateEncounterValue, setActiveTab } = actions;

export default reducer;
