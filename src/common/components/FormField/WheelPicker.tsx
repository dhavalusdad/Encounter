import clsx from 'clsx';
import { useEffect, useState } from 'react';
import MobilePicker from 'react-mobile-picker';

interface WheelPickerProps {
  value: string | null;
  name: string;
  label: string;
  options: string[];
  onChange: (value: number) => void;
  parentClassName?: string;
  labelClassName?: string;
  className?: string;
  addQuote?: string;
}

export const WheelPicker: React.FC<WheelPickerProps> = ({
  value,
  name,
  onChange,
  label,
  options,
  parentClassName,
  labelClassName,
  className,
  addQuote = ''
}) => {
  const [initialValue, setInitialValue] = useState<{
    [key: string]: string | null;
  }>({
    [name]: value
  });

  const handleChange = (data: { [key: string]: string }) => {
    onChange(Number(data[name]));
    setInitialValue(data);
  };

  useEffect(() => {
    setInitialValue({ [name]: value });
  }, [value]);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      e.stopPropagation(); // Prevent parent scroll when picker is touched
    };

    // Add event listeners for touchstart and touchmove
    document.addEventListener('touchstart', handleTouch, {
      passive: false
    });
    document.addEventListener('touchmove', handleTouch, {
      passive: false
    });

    // Clean up event listeners when component is unmounted
    return () => {
      document.removeEventListener('touchstart', handleTouch);
      document.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  return (
    <div
      className={clsx(
        'bg-white rounded-lg px-3 relative text-center',
        parentClassName
      )}>
      {label && (
        <label
          className={clsx(
            'text-Gray-900-opacity-70 text-sm font-medium leading-4 text-center w-full block',
            labelClassName
          )}>
          {label}
        </label>
      )}
      <MobilePicker
        value={initialValue}
        onChange={handleChange}
        wheelMode="normal"
        className={clsx(' mx-auto wheel-picker-parent', className)}>
        <MobilePicker.Column name={name}>
          {options.map((el) => (
            <MobilePicker.Item key={el} value={el} className={clsx('item')}>
              {({ selected }) =>
                selected ? (
                  <div className="text-Primary-500 text-sm font-medium leading-4 ">
                    {el}
                    {addQuote}
                  </div>
                ) : (
                  <div className="text-Primary-900-opacity-20 text-sm font-medium leading-4">
                    {el}
                    {addQuote}
                  </div>
                )
              }
            </MobilePicker.Item>
          ))}
        </MobilePicker.Column>
      </MobilePicker>
    </div>
  );
};

export default WheelPicker;
