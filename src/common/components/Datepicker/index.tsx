import clsx from 'clsx';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import DatePicker, { type DatePickerProps, type ReactDatePickerCustomHeaderProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon, type IconNameType } from '../Icon';

type ViewType = 'calendar' | 'year' | 'month';

export type DatePickerPropsType = {
  label?: string;
  labelClass?: string;
  placeholder?: string;
  value: Date | [Date | null, Date | null] | null;
  onChange: (date: Date | [Date | null, Date | null] | null) => void;
  error?: string;
  parentClassName?: string;
  className?: string;
  iconClassName?: string;
  icons?: IconNameType;
  isDisabled?: boolean;
  isAllowSameDay?: boolean;
  isClearable?: boolean;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  wrapperClassName?: string;
  popperClassName?: string;
  isShowPopperArrow?: boolean;
  isShowYearDropdown?: boolean;
  isShowMonthDropdown?: boolean;
  renderCustomHeader?: (props: ReactDatePickerCustomHeaderProps) => JSX.Element;
  dayClassName?: (date: Date) => string;
  calendarClassName?: string;
  errorClass?: string;
  defaultView?: ViewType;
  isChangeView?: boolean;
  isRange?: boolean;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
} & Omit<DatePickerProps, 'value'>;

export const SelectDatePicker: React.FC<DatePickerPropsType> = ({
  label,
  labelClass,
  placeholder,
  value,
  onChange,
  error,
  parentClassName,
  className,
  iconClassName,
  icons = 'calendar',
  isDisabled = false,
  allowSameDay = true,
  isClearable = true,
  placement,
  showPopperArrow = false,
  calendarClassName,
  errorClass,
  maxDate,
  defaultView = 'calendar',
  isChangeView = true,
  isRange = false,
  startDate,
  endDate,
  ...restProps
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<
    Date | [Date | null, Date | null] | null
  >(value);
  const [view, setView] = useState<ViewType>(defaultView);
  const datePickerRef = useRef<DatePicker | null>(null);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  const handleIconClick = () => {
    if (!isDisabled) {
      if (datePickerRef.current) {
        setOpen(true);

        datePickerRef.current.input?.focus();
      }
    }
  };
  const handleCloseIconClick = () => {
    if (datePickerRef.current) {
      setOpen(false);
    }
  };

  const handleView = (defaultViewCal: 'calendar' | 'year' | 'month') => {
    if (isChangeView) {
      setView(defaultViewCal);
    }
  };

  const handleDateChange = (date: Date | [Date | null, Date | null] | null) => {
    if (date) {
      if (isChangeView) {
        if (view === 'year') {
          setView('month');
        } else if (view === 'month') {
          setView('calendar');
        } else if (isRange) {
          const [start, end] = (date as [Date | null, Date | null]) || [
            null,
            null
          ];
          if (start && end) {
            setOpen(false);
          }
        } else {
          setOpen(false);
        }
      } else if (isRange) {
        const [start, end] = (date as [Date | null, Date | null]) || [
          null,
          null
        ];
        if (start && end) {
          setOpen(false);
        }
      } else {
        setOpen(false);
      }
    }

    setSelectedDate(date);
    onChange(date);
  };
  const [dynamicPlacement, setDynamicPlacement] = useState<
    'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
  >(placement || 'bottom-start');

  useEffect(() => {
    if (datePickerRef.current) {
      const rect = datePickerRef.current?.input?.getBoundingClientRect();
      const modalParent = document.querySelector('.modal-parent'); // Adjust according to modal parent class

      let availableRightSpace = window.innerWidth - (rect?.right ?? 0);
      let availableLeftSpace = rect?.left ?? 0;

      if (modalParent) {
        // Check space inside modal
        const modalRect = modalParent.getBoundingClientRect();
        availableRightSpace = modalRect.right - (rect?.right ?? 0);
        availableLeftSpace = (rect?.left ?? 0) - modalRect.left;
      }

      if (availableRightSpace < 250) {
        setDynamicPlacement('bottom-start'); // Open to left
      } else if (availableLeftSpace < 250) {
        setDynamicPlacement('bottom-end'); // Open to right
      } else {
        setDynamicPlacement(placement || 'bottom-start');
      }
    }
  }, []);

  return (
    <div className={`w-full ${parentClassName}`}>
      {label && (
        <label
          className={`text-base leading-18px font-normal text-Primary-900 block mb-2.5 ${labelClass}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <DatePicker
          key={view}
          {...restProps}
          selectsRange={view === 'calendar' && isRange ? true : undefined}
          selected={
            isRange && Array.isArray(selectedDate)
              ? selectedDate?.[0] || null
              : (selectedDate as Date | null)
          }
          startDate={startDate || undefined}
          endDate={endDate || undefined}
          allowSameDay={allowSameDay}
          onChange={handleDateChange}
          maxDate={maxDate}
          popperPlacement={dynamicPlacement}
          placeholderText={placeholder}
          className={`w-full px-4 pr-14 py-2 border rounded-md bg-Gray-400 border-solid !border-Gray-300 text-gray-600 placeholder:text-Gray-600 focus:outline-Primary-400 focus:outline-1 truncate ${className} ${error ? '!border-red-500' : ''
            }`}
          wrapperClassName="w-full date_picker_parent_button"
          popperClassName="date_picker_parent"
          ref={datePickerRef}
          disabled={isDisabled}
          isClearable={isClearable}
          open={open}
          onClickOutside={() => {
            setOpen(false);
            handleView(defaultView);
          }}
          onInputClick={() => setOpen(true)}
          showPopperArrow={showPopperArrow}
          showYearPicker={view === 'year'}
          showMonthYearPicker={view === 'month'}
          showFullMonthYearPicker={view === 'calendar'}
          readOnly
          renderCustomHeader={({
            date,
            prevMonthButtonDisabled,
            prevYearButtonDisabled,
            nextMonthButtonDisabled,
            nextYearButtonDisabled,
            decreaseMonth,
            increaseMonth,
            increaseYear,
            decreaseYear
          }) => (
            <>
              <div className="relative text-end">
                <Icon
                  name="schedulerDatePickerClose"
                  className="cursor-pointer inline-block ml-auto mb-2 mr-0"
                  onClick={handleCloseIconClick}
                />
              </div>
              <div className="flex justify-center items-center mb-4 gap-3 sm:gap-8">
                <Icon
                  name="schedulerDatePickerLeftArrow"
                  className={clsx('cursor-pointer text-Primary-900', {
                    '!text-Gray-600 month': prevMonthButtonDisabled,
                    '!text-Gray-600 year': prevYearButtonDisabled
                  })}
                  onClick={() => {
                    if (view === 'year' && !prevYearButtonDisabled) {
                      decreaseYear();
                    } else if (!prevMonthButtonDisabled) {
                      decreaseMonth();
                    }
                  }}
                />
                <span
                  className="text-base font-medium leading-18px text-Gray-900 font-Roboto cursor-pointer w-120px  "
                  onClick={() => {
                    if (isChangeView) {
                      setView((prevView) => {
                        if (prevView === 'year') {
                          return 'month';
                        } else if (prevView === 'month') {
                          return 'calendar';
                        } else {
                          return 'year';
                        }
                      });
                    }
                  }}>
                  {view === 'calendar'
                    ? `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`
                    : view === 'year'
                      ? date.getFullYear()
                      : `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`}
                </span>
                <Icon
                  name="schedulerDatePickerRightArrow"
                  className={clsx('cursor-pointer text-Primary-900', {
                    '!text-Gray-600 month': nextMonthButtonDisabled,
                    '!text-Gray-600 year': nextYearButtonDisabled
                  })}
                  onClick={() => {
                    if (view === 'year' && !nextYearButtonDisabled) {
                      increaseYear();
                    } else if (!nextMonthButtonDisabled) {
                      increaseMonth();
                    }
                  }}
                />
              </div>
            </>
          )}
          calendarClassName={`bg-white !rounded-10px px-3 pt-3.5 shadow-schedulerdatepicker !border-0 ${calendarClassName}`}
          clearButtonClassName=""
          showFourColumnMonthYearPicker
          dayClassName={(date) =>
            selectedDate &&
              !Array.isArray(selectedDate) &&
              moment(date).isSame(selectedDate, 'dates')
              ? // date.getDate() === selectedDate?.getDate()
              '!text-white !bg-Primary-800 !rounded-full !w-6 sm:!w-8 !leading-6 sm:!leading-8 !m-1 sm:!m-1.5'
              : '!text-Primary-900 hover:!bg-Primary-200 !rounded-full !w-6 sm:!w-8 !leading-6 sm:!leading-8 !m-1 sm:!m-1.5 !font-normal'
          }
          yearClassName={(date) =>
            selectedDate &&
              !Array.isArray(selectedDate) &&
              moment(date).isSame(selectedDate, 'years')
              ? // date.getFullYear() === selectedDate?.getFullYear()
              '!text-white !bg-Primary-800 !rounded-full !w-12 sm:!w-16 !leading-8 !m-1 sm:!m-1.5'
              : '!text-Primary-900 hover:!bg-Primary-200 !rounded-full !w-12 sm:!w-16 !leading-8 !m-1 sm:!m-1.5 !font-normal'
          }
          monthClassName={(date) =>
            selectedDate &&
              !Array.isArray(selectedDate) &&
              moment(date).isSame(selectedDate, 'months')
              ? // date.getMonth() === selectedDate?.getMonth()
              '!text-white !bg-Primary-800 !rounded-full !w-12 sm:!w-16 !leading-8 !m-1 sm:!m-1.5'
              : '!text-Primary-900 hover:!bg-Primary-200 !rounded-full !w-12 sm:!w-16 !leading-8 !m-1 sm:!m-1.5 !font-normal'
          }
        />
        <Icon
          name={icons}
          className={`absolute top-1/2 right-3 transform -translate-y-1/2 text-Gray-900 ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${iconClassName}`}
          onClick={handleIconClick} // Trigger open and focus
        />
      </div>
      {error && (
        <p className={`text-red-500 text-xs mt-1.5 ${errorClass}`}>{error}</p>
      )}
    </div>
  );
};

export default SelectDatePicker;
