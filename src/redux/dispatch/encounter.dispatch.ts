import { setActiveForm, updateEncounterFormValue, type IEncounterType } from '@encounter/redux/ducks/encounter';
import { store } from '@encounter/redux/store';

export const dispatchUpdateEncounterValue = (
  data: Partial<IEncounterType['form']>
) => {
  store.dispatch(updateEncounterFormValue(data));
};

export const dispatchSetActiveForm = (activeTab: IEncounterType['activeForm']) => {
  store.dispatch(setActiveForm(activeTab));
};
