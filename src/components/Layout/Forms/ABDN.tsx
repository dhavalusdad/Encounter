import { Button, handleRedirect, InputField } from '@encounter/common'
import React from 'react'

export
  const ABDN = () => {
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
          maxLength={15}
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

export default ABDN