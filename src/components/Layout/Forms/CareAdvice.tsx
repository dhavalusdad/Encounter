import { Button, InputField } from '@encounter/common'
import React from 'react'

const CareAdvice = () => {
  return (
    <>
      <InputField
        type="text"
        label="Care Advice"
        labelClass="!text-Primary-900 mb-2.5 block"
        placeholder="Enter Care Advice"
        name="careAdvice"
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

export default CareAdvice