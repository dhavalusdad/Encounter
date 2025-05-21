import { Button, handleRedirect, handleReviewRedirect, handleReviewSmsRedirect, InputField } from '@encounter/common'
import React from 'react'
import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';

const ReviewSystems = () => {
  const { form } = useSelector(encounterSelector);

  const { handleSubmit, setValue, getValues, reset, register } = useForm<
    (typeof form)['reviewSystems']
  >({
    mode: 'onChange',
    defaultValues: form['reviewSystems']
  });

  const currentForm = tabArray.find((el) => el.id === 'reviewSystems');
  const defaultValue = currentForm?.defaultValue;
  const nextForm = currentForm?.nextId;
  const previousForm = currentForm?.previousId;

  return (
    <>
      <p>To complete this section, launch the Review of Systems application:</p>
      <Button
        title="Launch Review of Systems"
        variant="filled"
        className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        onClick={handleReviewRedirect}
      />
      <Button
        title="Send From Link via SMS"
        variant="filled"
        className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        onClick={handleReviewSmsRedirect}
      />
      <InputField
        type="text"
        label="Review of Systems"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter Review of Systems"
        name="review"
        inputClass="!border-Gray-300 placeholder:!text-Gray-600"
        parentClassName="min-h-50px py-3 rounded-lg w-full sm:w-auto"
        errorClass=""
        register={register}
      // maxLength={15}
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
            dispatchUpdateEncounterValue({ reviewSystems: defaultValue });
            dispatchToast('Form reset successfully', 'success')
          }}
          title="Clear"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ reviewSystems: value })
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

export default ReviewSystems