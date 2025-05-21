import { Button, handleRedirect, InputField } from '@encounter/common'
import React from 'react'

const NurseTriage = () => {
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

export default NurseTriage