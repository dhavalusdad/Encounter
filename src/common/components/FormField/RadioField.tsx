import clsx from 'clsx';
import React from 'react';

interface RadioProps {
  id: string;
  label: string;
  isChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelPlacement?: 'start' | 'end';
  name?: string;
  value?: string;
  isDefaultChecked?: boolean;
  labelClass?: string;
  parentClassName?: string;
  isDisabled?: boolean;
  errorMessage?: string;
}

export const RadioField: React.FC<RadioProps> = ({
  id,
  label,
  isChecked,
  onChange,
  className,
  labelPlacement = 'end',
  name,
  value,
  isDefaultChecked,
  labelClass,
  parentClassName,
  isDisabled = false
}) => {
  const renderLabel = () =>
    label ? (
      <label
        htmlFor={id}
        className={clsx(
          'text-sm text-Primary-900 leading-21px cursor-pointer',
          labelClass
        )}>
        {label}
      </label>
    ) : null;
  return (
    <div className={clsx('relative flex items-center gap-2', parentClassName)}>
      {labelPlacement === 'start' && renderLabel()}
      <input
        id={id}
        type="radio"
        disabled={isDisabled}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        className={clsx(
          'appearance-none w-4 h-4 rounded-full border-2 border-solid border-Gray-600 cursor-pointer checked:bg-Primary-700 checked:border-Primary-700',
          className
        )}
        defaultChecked={isDefaultChecked}
      />
      {labelPlacement === 'end' && renderLabel()}
    </div>
  );
};

export default RadioField;
