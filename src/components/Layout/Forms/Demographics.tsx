import React, { useState } from 'react';
import { Button, InputField, PhoneField } from '@encounter/common';
import SelectDatePicker from '@encounter/common/components/Datepicker'; // Ensure this path is correct

export const Demographics = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-Primary-900">Demographics / Intake</h1>

      {/* Patient Name */}
      <InputField
        type="text"
        label="Patient Name"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter Patient Name"
        name="patientName"
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
          value={selectedDate}
          onChange={setSelectedDate}
        // icons="calendarNew"
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
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          title="Save"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
          isIconFirst
        />
        <Button
          title="Next"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
        />
        <Button
          title="Close"
          variant="filled"
          className="min-h-50px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
      </div>
    </div>
  );
};

export default Demographics;
