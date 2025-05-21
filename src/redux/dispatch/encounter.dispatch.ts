import { setActiveTab, updateEncounterValue, type IEncounterType } from '@encounter/redux/ducks/encounter';
import { store } from '@encounter/redux/store';

export const dispatchUpdateEncounterValue = (
  data: IEncounterType['value']
) => {
  store.dispatch(updateEncounterValue(data));
};

export const dispatchSetActiveTab = (activeTab: IEncounterType['activeTab']) => {
  store.dispatch(setActiveTab(activeTab));
};
