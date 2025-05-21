import { Button, handleRedirect, InputField } from '@encounter/common'
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';


export
  const ABDN = () => {
    const { form } = useSelector(encounterSelector);
    const { handleSubmit, setValue, getValues, reset, register } = useForm<
      (typeof form)['abcn']
    >({
      mode: 'onChange',
      defaultValues: form['abcn']
    });

    const currentForm = tabArray.find((el) => el.id === 'abcn');
    const defaultValue = currentForm?.defaultValue;
    const nextForm = currentForm?.nextId;
    const previousForm = currentForm?.previousId;
    return (
      <>
        <InputField
          type="text"
          label="Chief Complaint"
          labelClass="!text-Primary-900 mb-2.5 block"
          placeholder="Enter Chief Complaint"
          name="chiefComplaint"
          inputClass="!border-Gray-300 placeholder:!text-Gray-600"
          parentClassName="min-h-50px py-3 rounded-lg w-full sm:w-auto"
          errorClass=""
          register={register}
        // maxLength={15}
        />
        <p>To complete this section, launch the ABCN application:</p>
        <Button
          title="Launch ABCN"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          onClick={handleRedirect}
        />
        <Button
          title="Send From Link via SMS"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          onClick={handleRedirect}
        />
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            onClick={handleSubmit((value) => {
              dispatchUpdateEncounterValue({ abcn: value })
              dispatchToast('Form saved successfully', 'success')
            }
            )}
            title="Save"
            variant="filled"
            className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
            isIconFirst
          />
          <Button
            onClick={() => dispatchSetActiveForm(nextForm)}
            title="Next"
            variant="filled"
            className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          />
          <Button
            onClick={() => {
              reset(defaultValue, { shouldValidate: true });
              dispatchUpdateEncounterValue({ abcn: defaultValue });
              dispatchToast('Form reset successfully', 'success')
            }}
            title="Clear"
            variant="filled"
            className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          />
        </div>
      </>
    )
  }

export default ABDN