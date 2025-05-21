import { useEffect, useMemo, useRef, useState } from 'react';

interface NumberPickerProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (data: number) => void;
  children?: (data: number) => React.ReactNode;
  label?: string;
}

const rangeArray = (start: number, end: number) =>
  start > end
    ? Array.from({ length: start - end + 1 }, (_, index) => start - index)
    : Array.from({ length: end - start + 1 }, (_, index) => start + index);

export const NumberPicker: React.FC<NumberPickerProps> = ({
  value,
  min = 1,
  max = 100,
  onChange,
  children,
  label
}) => {
  const [initialValue, setInitialValue] = useState<number>(value);
  const numberArr = useMemo(() => rangeArray(min, max), [min, max]);

  const containerRef = useRef<HTMLDivElement>(null);

  const setValue = (num: number) => {
    setInitialValue(num);
    onChange?.(num);
  };

  useEffect(() => {
    if (containerRef.current) {
      const aa = containerRef.current.querySelector(`[id='${initialValue}']`);
      aa?.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  }, [initialValue]);

  useEffect(() => {
    if (value !== initialValue) {
      setInitialValue(value);
    }
  }, [value]);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
    function getMiddleDivId() {
      const items = e.currentTarget.querySelectorAll('div'); // Get all the divs inside the scrollable container

      const middlePosition =
        e.currentTarget.getBoundingClientRect().top +
        e.currentTarget.getBoundingClientRect().height / 2;

      let closestItem: HTMLElement | null = null;
      let minDistance = Infinity;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;

        // Calculate the distance between the middle position of the container and the center of the item
        const distance = Math.abs(itemCenter - middlePosition);

        // Find the item that is closest to the middle of the container
        if (distance < minDistance) {
          minDistance = distance;
          closestItem = item;
        }
      });

      // Return the id of the closest (middle) div element
      return closestItem ? closestItem.id : null;
    }
    const tempValue = getMiddleDivId();

    if (tempValue) {
      setValue(Number(tempValue));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-32">
      {label && (
        <div className="text-center text-lg font-semibold text-gray-800 mb-2">
          {label}
        </div>
      )}
      <div
        className="border-t border-Gray-300 pt-2 h-36 overflow-y-scroll"
        onScroll={handleScroll}
        ref={containerRef}>
        {numberArr.map((num) => (
          <div
            id={`${num}`}
            key={num}
            onClick={() => setValue(num)}
            className={`text-center cursor-pointer text-xl ${num === initialValue ? 'text-Primary-300 font-semibold border-t border-b border-Primary-300' : 'text-Gray-500'}`}>
            {children ? children(num) : num}
          </div>
        ))}
      </div>
    </div>
  );
};
