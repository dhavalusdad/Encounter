import { InputField, type InputFieldProps } from '@encounter/common';
import { type ChangeEventHandler, useState } from 'react';
import { type FieldValues } from 'react-hook-form';
interface PasswordFieldProps<TFormValues extends FieldValues>
  extends InputFieldProps<TFormValues> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
  labelClass?: string;
  inputClass?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  parentClassName?: string;
}

export const PasswordField = <TFormValues extends Record<string, unknown>>(
  props: Omit<PasswordFieldProps<TFormValues>, 'type'>
) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <InputField
      inputClass={props.inputClass}
      {...props}
      type={show ? 'text' : 'password'}
      icon={show ? 'passwordVisible' : 'passwordEye'}
      onIconClick={() => setShow(!show)}
      autoComplete={props.autoComplete || 'new-password'}
      className="relative"
      iconClassName="mt-[9px] !top-0 !translate-y-0 text-Gray-600 icon-wrapper w-6 h-6"
    />
  );
};

export default PasswordField;
