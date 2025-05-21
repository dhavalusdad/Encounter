import { useAccordionContext } from '@encounter/common/components/Accordion/context';
import Icon from '@encounter/common/components/Icon';
import clsx from 'clsx';
import React, { type PropsWithChildren } from 'react';

interface AccordionItemProps extends PropsWithChildren {
  index: number | string;
  title: string;
  subTitle?: string;
  hasOpen?: boolean;
  onClick?: (hasOpen: boolean) => void;
  parentClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  index,
  title,
  subTitle,
  hasOpen = false,
  onClick,
  parentClassName,
  iconClassName,
  titleClassName,
  subtitleClassName
}) => {
  const { openIndex, toggleAccordion } = useAccordionContext();
  const isOpen = openIndex === index || hasOpen;

  return (
    <div
      className={clsx(
        'relative w-full transition-all ease-in-out duration-300',
        parentClassName
      )}>
      <div
        className="flex items-start justify-between w-full cursor-pointer"
        onClick={() => {
          toggleAccordion(index);
          if (onClick) onClick(!isOpen);
        }}>
        <div className="flex flex-col gap-2.5">
          <h6
            className={clsx(
              'text-base font-medium leading-18px text-Primary-700',
              titleClassName
            )}>
            {title}
          </h6>
          {subTitle && (
            <p
              className={clsx(
                'text-sm font-normal leading-4 text-Primary-900',
                subtitleClassName
              )}>
              {subTitle}
            </p>
          )}
        </div>
        <Icon
          name="accordionArrow"
          className={clsx(
            'transition-transform ease-in-out duration-300 text-Primary-900',
            isOpen && '-rotate-180',
            iconClassName
          )}
        />
      </div>

      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out'
          // { 'max-h-0': !isOpen },
          // { 'max-h-500px': isOpen }
        )}>
        {isOpen && (
          <div className="flex flex-col gap-5 mt-26px">{children}</div>
        )}
      </div>
      <hr className="h-1px max-w-[calc(100%-100px)] w-full bg-Primary-900 mt-26px" />
    </div>
  );
};

export default AccordionItem;
