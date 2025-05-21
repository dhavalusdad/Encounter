import cx from 'clsx';
import { ReactNode } from 'react';

export const Button = ({
  isLink = false,
  href,
  className = '',
  title,
  icon = false,
  isIconFirst = false,
  variant,
  size,
  borderSize = 'sm',
  onClick,
  isActive = false,
  isSquare = false,
  titleClassName,
  type,
  isDisabled,
  isLoading = false,
  rounded,
  text = 'white',
  hoverText = 'white',
  bg = 'Primary-500',
  hoverBg = 'dark',
  border = 'primary',
  hoverBorder = 'dark',
  children,
  buttonRef,
  id
}: {
  isLink?: boolean;
  href?:
    | string
    | {
        pathname: string;
        query: object;
      };
  className?: string;
  title?: string;
  icon?: ReactNode;
  isIconFirst?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
  isSquare?: boolean;
  titleClassName?: string;
  type?: 'submit' | 'reset' | 'button';
  variant: 'filled' | 'outline' | 'none';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  borderSize?: 'sm' | 'md';
  isDisabled?: boolean;
  isLoading?: boolean;
  rounded?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  text?: string;
  hoverText?: string;
  bg?: string;
  dataCopy?: string;
  hoverBg?: string;
  border?: string;
  hoverBorder?: string;
  children?: ReactNode;
  buttonRef?: React.LegacyRef<HTMLButtonElement> | undefined;
  id?: string;
}) => {
  const classes = cx(
    className,
    `group font-bold outline-none inline-flex items-center  justify-center  transit leading-none rounded transition-all ${
      size === 'xs' ? 'text-xs gap-1' : 'text-sm gap-1.5'
    }`,
    { 'select-none': isActive || isLoading },
    { [`rounded-${rounded}`]: rounded },
    { rounded: !rounded },
    { 'aspect-square': isSquare },
    { 'h-6 px-1.5': size === 'xs' },
    { 'h-9 px-3': size === 'sm' },
    { 'h-10 px-4': size === 'md' },
    { 'h-11 px-5': size === 'lg' },
    {
      [`bg-${bg} hover:bg-${hoverBg} text-${text} hover:text-${hoverText} `]:
        variant === 'filled'
    },
    {
      [` ${
        borderSize === 'md' ? 'border-2' : 'border'
      } border-${border} hover:border-${hoverBorder} bg-${bg} hover:bg-${hoverBg} text-${text} hover:text-${hoverText} `]:
        variant === 'outline'
    },
    { 'opacity-50 cursor-not-allowed': isDisabled || isLoading }
  );

  return isLink && href ? null : (
    <button
      onClick={onClick}
      type={type}
      id={id}
      // data-copy={dataCopy}
      className={classes}
      ref={buttonRef}
      disabled={isDisabled}>
      {children && children}
      {isLoading ? (
        <span className="relative h-4 w-4 border-[3px] border-Gray-900 border-b-white rounded-full block animate-spin" />
      ) : isIconFirst && icon ? (
        <span className="">{icon}</span>
      ) : null}
      {title && <span className={titleClassName}>{title}</span>}
      {!isIconFirst && icon ? <span className="text-lg">{icon}</span> : null}
    </button>
  );
};

export default Button;
