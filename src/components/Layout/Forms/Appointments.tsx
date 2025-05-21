import { Button, InputField } from '@encounter/common'
import SelectDatePicker from '@encounter/common/components/Datepicker'
import React from 'react'
import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';

const Appointments = () => {
  const { form } = useSelector(encounterSelector);

  const { handleSubmit, setValue, getValues, reset, register } = useForm<
    (typeof form)['appointments']
  >({
    mode: 'onChange',
    defaultValues: form['appointments']
  });

  const currentForm = tabArray.find((el) => el.id === 'appointments');
  const defaultValue = currentForm?.defaultValue;
  const previousForm = currentForm?.previousId;

  // const nextForm = currentForm?.nextId;
  return (
    <>
      <div className="w-full">
        <SelectDatePicker
          label="Next Appointment Date"
          placeholder="Select date"
          maxDate={new Date()}
          errorClass="text-red-500"
          value={getValues('apointmentDate')}
          onChange={(date) =>
            setValue('apointmentDate', date?.toISOString(), {
              shouldValidate: true
            })
          }
          isClearable={false}
        />
      </div>
      <InputField
        type="text"
        label="Follow-Up Instructions"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter Follow-Up Instructions"
        name="followUp"
        inputClass="!border-Gray-300 placeholder:!text-Gray-600"
        parentClassName="min-h-50px py-3 rounded-lg w-full sm:w-auto"
        errorClass=""
        register={register}
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
            dispatchUpdateEncounterValue({ appointments: defaultValue });
            dispatchToast('Form reset successfully', 'success')
          }}
          title="Clear"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ appointments: value })
            dispatchToast('Form saved successfully', 'success')
          }
          )}
          title="Save"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          isIconFirst
        />
        {/* <Button
          title="Next"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(nextForm)}
        /> */}
      </div>
    </>
  )
}

export default Appointments