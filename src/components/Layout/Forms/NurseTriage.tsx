import { Button, handleRedirect, InputField } from '@encounter/common'
import React from 'react'
import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';

const NurseTriage = () => {
  const { form } = useSelector(encounterSelector);

  const { handleSubmit, setValue, getValues, reset, register } = useForm<
    (typeof form)['nurseTriage']
  >({
    mode: 'onChange',
    defaultValues: form['nurseTriage']
  });

  const currentForm = tabArray.find((el) => el.id === 'nurseTriage');
  const defaultValue = currentForm?.defaultValue;
  const nextForm = currentForm?.nextId;
  const previousForm = currentForm?.previousId;

  return (
    <>
      <p>To complete this section, launch the Nurse Protocol application:</p>
      <Button
        title="Launch Protocol application"
        variant="filled"
        className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        onClick={handleRedirect}
      />
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          onClick={() => dispatchSetActiveForm(previousForm)}
          title="Previous"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
        />
        <Button
          onClick={() => {
            reset(defaultValue, { shouldValidate: true });
            dispatchUpdateEncounterValue({ nurseTriage: defaultValue });
            dispatchToast('Form reset successfully', 'success')
          }}
          title="Clear"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ nurseTriage: value })
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

      </div>
    </>
  )
}

export default NurseTriage