import { useState } from 'react';
import { Button, InputField, PhoneField } from '@encounter/common';
import SelectDatePicker from '@encounter/common/components/Datepicker'; // Ensure this path is correct
import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';

export const Demographics = () => {
  const { form } = useSelector(encounterSelector);

  const { handleSubmit, setValue, getValues, reset, register } = useForm<
    (typeof form)['demographics']
  >({
    mode: 'onChange',
    defaultValues: form['demographics']
  });

  const currentForm = tabArray.find((el) => el.id === 'demographics');
  const defaultValue = currentForm?.defaultValue;
  const nextForm = currentForm?.nextId;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-Primary-900">
        Demographics / Intake
      </h1>

      {/* Patient Name */}
      <InputField
        type="text"
        label="Patient Name"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter Patient Name"
        name="patientName"
        register={register}
        inputClass="!border-Gray-300 placeholder:!text-Gray-600"
        parentClassName="w-full sm:w-2/4"
        errorClass=""
        maxLength={15}
      />

      {/* Date of Birth */}
      <div className="w-full sm:w-2/4">
        <SelectDatePicker
          label="Start Date"
          placeholder="Select date"
          maxDate={new Date()}
          errorClass="text-red-500"
          value={getValues('dateOfBirth')}
          onChange={(date) =>
            setValue('dateOfBirth', date?.toISOString(), {
              shouldValidate: true
            })
          }
        />
      </div>

      {/* Contact Number */}
      <div className="flex gap-6 flex-col sm:flex-row">
        <PhoneField
          label="Contact Number"
          labelClass="!text-Primary-900 block mb-2.5"
          inputClass="placeholder:!text-Gray-600"
          parentClassName="w-full sm:w-[calc(50%-12.5px)]"
          placeholder="Enter Phone Number"
          value={getValues('phoneNumber')}
          onChange={(phoneNumber) =>
            setValue('phoneNumber', phoneNumber, { shouldValidate: true })
          }
        />
      </div>

      {/* Address */}
      <InputField
        type="text"
        label="Address"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter address"
        name="address"
        inputClass="!border-Gray-300 placeholder:!text-Gray-600"
        parentClassName="w-full sm:w-2/4"
        errorClass=""
        maxLength={15}
        register={register}
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ demographics: value })
            dispatchToast('Form saved successfully', 'success')
          }
          )}
          title="Save"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          isIconFirst
        />
        <Button
          title="Next"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(nextForm)}
        />
        <Button
          onClick={() => {
            reset(defaultValue, { shouldValidate: true });
            dispatchUpdateEncounterValue({ demographics: defaultValue });
            dispatchToast('Form reset successfully', 'success')
          }}
          title="Clear"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
      </div>
    </div>
  );
};

export default Demographics;
