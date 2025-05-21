import { Button, InputField } from '@encounter/common'
import SelectDatePicker from '@encounter/common/components/Datepicker'
import React from 'react'

const Appointments = () => {
  return (
    <>
      <div className="w-full sm:w-2/4">
        <SelectDatePicker
          label="Next Appointment Date:"
          placeholder="Select date"
          maxDate={new Date()}
          errorClass="text-red-500"
        // value={getValues('dateOfBirth')}
        // onChange={(date) =>
        //   setValue('dateOfBirth', date?.toISOString(), {
        //     shouldValidate: true
        //   })
        // }
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
      />
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-0">
        <Button
          title="Save"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          isIconFirst
        />
        <Button
          title="Next"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
        />
        <Button
          title="Close"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
      </div>
    </>
  )
}

export default Appointments