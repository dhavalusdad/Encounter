import Tippy, { type TippyProps } from '@tippyjs/react';
import React, { type ReactElement, type ReactNode } from 'react';
import 'tippy.js/dist/tippy.css'; // Optional

export const Tooltip: React.FC<TippyProps> = ({
  children,
  className,
  ...tippyProps // Spread all other Tippy props
}) => {
  // Ensure children are valid React elements
  const childElement: ReactElement = React.isValidElement(children) ? (
    children
  ) : (
    <span>{children as ReactNode}</span>
  );

  return (
    <Tippy className={`${className}`} {...tippyProps}>
      {childElement}
    </Tippy>
  );
};

export default Tooltip;
