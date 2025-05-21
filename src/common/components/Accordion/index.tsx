import React, { type PropsWithChildren, useState } from 'react';
import { AccordionProvider } from './context';

interface AccordionProps extends PropsWithChildren {
  className?: string;
  defaultOpenIndex?: number | string | null;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  defaultOpenIndex = null
}) => {
  const [openIndex, setOpenIndex] = useState<number | string | null>(
    defaultOpenIndex
  );

  const toggleAccordion = (index: number | string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionProvider value={{ openIndex, toggleAccordion }}>
      <div className={className}>{children}</div>
    </AccordionProvider>
  );
};

export default Accordion;
export * from './AccordionItem';
