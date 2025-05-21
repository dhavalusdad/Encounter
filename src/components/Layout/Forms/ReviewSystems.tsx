import { Button, handleRedirect, handleReviewRedirect, handleReviewSmsRedirect, InputField } from '@encounter/common'
import React from 'react'

const ReviewSystems = () => {
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
      // maxLength={15}
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

export default ReviewSystems