import React, { type PropsWithChildren, createContext, useContext } from 'react';

interface AccordionContextType {
  openIndex: number | string | null;
  toggleAccordion: (index: number | string) => void;
}

const AccordionContext = createContext<AccordionContextType>({
  openIndex: null,
  toggleAccordion: () => {
    //
  }
});

export const AccordionProvider: React.FC<
  PropsWithChildren & { value: AccordionContextType }
> = ({ children, value }) => (
  <AccordionContext.Provider value={value}>
    {children}
  </AccordionContext.Provider>
);

export const useAccordionContext = () => useContext(AccordionContext);
