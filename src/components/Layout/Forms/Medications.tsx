import { Button, CustomAsyncSelect } from '@encounter/common'
import React, { useEffect, useState } from 'react'
import type { GroupBase } from 'react-select';

import { useForm } from 'react-hook-form';
import { dispatchSetActiveForm, dispatchUpdateEncounterValue } from '@encounter/redux/dispatch/encounter.dispatch';
import { useSelector } from 'react-redux';
import { encounterSelector } from '@encounter/redux/ducks/encounter';
import { tabArray } from '@encounter/constant';
import { dispatchToast } from '@encounter/redux/dispatch/toast.dispatch';
import { fetchRxnormMedications } from '@encounter/api/user';

const Medications = () => {
  const { form } = useSelector(encounterSelector);
  const [selectedMedication, setSelectedMedication] = useState<{
    label: string | undefined;
    value: string | undefined;
  } | null>(null);

  const {
    handleSubmit,
    setValue,
    getValues,
    reset,
    register,
    formState: { errors }
  } = useForm<(typeof form)['medications']>({
    mode: 'onChange',
    defaultValues: form['medications']
  });

  const currentForm = tabArray.find((el) => el.id === 'medications');
  const defaultValue = currentForm?.defaultValue;
  const nextForm = currentForm?.nextId;
  const previousForm = currentForm?.previousId;

  type OptionType = {
    value?: string | null | undefined;
    label?: string | null | undefined;
  };


  const { form: persistData } = useSelector(encounterSelector);
  // console.log(persistData);

  const dataSelected = { label: persistData?.medications?.medications?.label, value: persistData?.medications?.medications?.value }
  const data = localStorage.getItem('persist:encounter') || {};

  useEffect(() => {
    setSelectedMedication(dataSelected);
    setValue('medications', dataSelected);
  }, [])

  return (
    <>
      <div className="flex gap-4 2xl:gap-25px flex-col sm:flex-row w-full ">
        <CustomAsyncSelect<
          OptionType,
          false,
          GroupBase<OptionType>,
          Awaited<ReturnType<typeof fetchRxnormMedications>>
        >
          key={selectedMedication?.value}
          queryKey={['rxnormSearch']}
          queryFn={async ({ pageParam = 0, meta }) => {
            return await fetchRxnormMedications({
              query: meta?.search,
              limit: 25,
              page: pageParam + 1
            });
          }}
          getNextPageParam={(lastPage) => {
            const { nextOffset, total } = lastPage;
            return (nextOffset - 1) * 25 < total ? nextOffset - 1 : undefined;
          }}
          select={(responseData) => {
            const flatOptions = responseData?.pages.flatMap((page) => page.rows) ?? [];
            if (!selectedMedication && flatOptions.length > 0) {
              const selected = flatOptions[0];
              setSelectedMedication(selected);
              setValue('medications', selected);
            }

            return flatOptions;
          }}
          value={selectedMedication || dataSelected}
          onChange={(data) => {
            if (data) {
              setSelectedMedication(data);
              setValue('medications', data, {
                shouldValidate: true
              });
            }
          }}
          placeholder="Search medication"
          isClearable={false}
          labelClassName="block text-Primary-900"
          className="w-full"
          parentClassName='w-full'
          StylesConfig={{
            control: () => ({
              width: '100%',
              background: 'var(--Gray-400) !important',
              borderColor: 'var(--Gray-300) !important',
              border: '1px solid var(--Gray-300) !important',
              minHeight: '42px'
            }),
            valueContainer: () => ({
              padding: '2px 8px'
            }),
            placeholder: () => ({
              color: 'var(--Gray-600)'
            }),
            singleValue: () => ({
              color: 'var(--Primary-900)'
            }),
            dropdownIndicator: () => ({
              color: 'var(--Gray-600)',
              '&:hover': {
                color: 'var(--Gray-600)'
              }
            }),
            loadingIndicator: () => ({
              display: 'none'
            })
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button
          title="Previous"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(previousForm)}
        />
        <Button
          onClick={() => {
            reset(defaultValue, { shouldValidate: true });
            dispatchUpdateEncounterValue({ medications: defaultValue });
            // window.location.reload();
            dispatchToast('Form reset successfully', 'success');
          }}
          title="Clear"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          onClick={handleSubmit((value) => {
            dispatchUpdateEncounterValue({ medications: value });
            dispatchToast('Form saved successfully', 'success');
          })}
          title="Save"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto bg-Primary-500 text-white"
        />
        <Button
          title="Next"
          variant="filled"
          className="min-h-30px py-3 px-6 rounded-lg w-full sm:w-auto !bg-Primary-500 text-white"
          onClick={() => dispatchSetActiveForm(nextForm)}
        />
      </div>
    </>
  );
};


export default Medications