import { Button } from '@encounter/common'
import React from 'react'
import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';

const Medications = () => {
  const { form } = useSelector(encounterSelector);

  const { handleSubmit, setValue, getValues, reset, register } = useForm<
    (typeof form)['medications']
  >({
    mode: 'onChange',
    defaultValues: form['medications']
  });

  const currentForm = tabArray.find((el) => el.id === 'medications');
  const defaultValue = currentForm?.defaultValue;
  const nextForm = currentForm?.nextId;
  const previousForm = currentForm?.previousId;

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          title="Previous"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(previousForm)}
        />
        <Button
          onClick={() => {
            reset(defaultValue, { shouldValidate: true });
            dispatchUpdateEncounterValue({ medications: defaultValue });
            dispatchToast('Form reset successfully', 'success')
          }}
          title="Clear"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ medications: value })
            dispatchToast('Form saved successfully', 'success')
          }
          )}
          title="Save"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          isIconFirst
        />
        <Button
          title="Next"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(nextForm)}
        />
      </div></>
  )
}

export default Medications