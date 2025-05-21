import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import PhoneInput, { CountryData, PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputEventProps {
  onChange: (
    value: string,
    data: CountryData | object,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  onMount: (
    value: string,
    data: CountryData | object,
    formattedValue: string
  ) => void;
}

export interface PhoneFieldProps extends PhoneInputProps {
  label?: string;
  labelClass?: string;
  isRequired?: boolean;
  inputClass?: string;
  parentClassName?: string;
  inputParentClassName?: string;
  error?: string;
  isReadOnly?: boolean;
  onChange?: PhoneInputEventProps['onChange'];
  onMount?: PhoneInputEventProps['onMount'];
  portalId?: string;
}

export const PhoneField: React.FC<PhoneFieldProps> = ({
  label,
  labelClass,
  isRequired,
  parentClassName,
  inputParentClassName,
  country = 'us',
  enableSearch = true,
  inputClass,
  buttonClass,
  error,
  isReadOnly = false,
  disabled,
  onChange,
  onMount,
  portalId = '',
  dropdownClass,
  ...props
}) => {
  const [dropDownPosition, setDropDownPosition] = useState<number>(0);
  const phoneDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (portalId && !isReadOnly) {
      const updateDropDownPosition = () => {
        if (phoneDivRef.current) {
          const scrollTop = phoneDivRef.current.getBoundingClientRect();
          setDropDownPosition(scrollTop.top);
        }
      };

      updateDropDownPosition();
      window.addEventListener('resize', updateDropDownPosition);
      document
        .querySelector(`#${portalId}`)
        ?.addEventListener('scroll', updateDropDownPosition);

      // Observe changes to the span element
      const observer = new MutationObserver(updateDropDownPosition);

      if (phoneDivRef.current) {
        observer.observe(phoneDivRef.current, {
          childList: true
        }); // Observe text content changes
      }

      return () => {
        if (portalId) {
          document
            .querySelector(`#${portalId}`)
            ?.removeEventListener('scroll', updateDropDownPosition);
        }
        window.removeEventListener('resize', updateDropDownPosition);

        observer.disconnect();
      };
    }
  }, [portalId, isReadOnly]);

  if (isReadOnly && (!props.value || props.value === '-')) {
    return <span className="text-sm text-gray-600">-</span>;
  }

  return (
    <div className={clsx('relative group', parentClassName)}>
      {label && (
        <label
          className={clsx(
            'text-Primary-900 text-base font-normal leading-18px',
            labelClass,
            isReadOnly && '!hidden'
          )}>
          {label}{' '}
          {isRequired && (
            <span className="text-Red-500 font-bold text-lg">*</span>
          )}
        </label>
      )}
      <div ref={phoneDivRef} className={clsx('relative', inputParentClassName)}>
        <PhoneInput
          dropdownStyle={portalId ? { top: dropDownPosition } : undefined}
          country={country}
          enableSearch={enableSearch}
          dropdownClass={clsx(dropdownClass, {
            '!fixed !z-10 !mt-12': !!portalId
          })}
          {...props}
          containerClass=""
          inputClass={clsx(
            'phonefield_input !h-auto  text-sm !leading-6',
            inputClass,
            error &&
              '!border-red-500 shadow-none group-focus-within:!border-transparent',
            isReadOnly
              ? '!cursor-text !bg-transparent !border-none !rounded-none !p-0 !pr-0 !py-0 group-focus-within:!ring-0 group-focus-within:!ring-transparent !w-auto'
              : '!py-2 !pr-2 !bg-Gray-400 !rounded-md !border !border-solid border-Gray-200 group-focus-within:ring-2 group-focus-within:ring-Primary-400 rounded-md !w-full'
          )}
          buttonClass={clsx(
            'dropdown_button !border !border-solid border-Gray-200 !bg-Gray-400 hover:!bg-Gray-400 !rounded-l-md group-focus-within:!ring-2 group-focus-within:!ring-Primary-400',
            buttonClass,
            isReadOnly && '!hidden',
            {
              '!border-red-500 shadow-none  group-focus-within:!border-transparent':
                error
            }
          )}
          searchClass=""
          onMount={onMount}
          onChange={onChange}
          disabled={isReadOnly || disabled}
        />
        {error && (
          <p
            className={clsx(
              'text-red-500 text-xs mt-1.5',
              isReadOnly && '!hidden'
            )}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default PhoneField;
