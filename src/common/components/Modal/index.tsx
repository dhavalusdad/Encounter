import clsx from 'clsx';
import React, { type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  isHideCloseIcon?: boolean;
  additionalIcon?: JSX.Element;
  width?: 'sm' | 'md' | 'xs' | 'xxs' | 'lg';
  parentClassName?: string;
  titleClassname?: string;
  footer?: JSX.Element;
  mainContentParentClassName?: string;
  isFullScreen?: boolean;
  isLoading?: boolean;
  footerclassName?: string;
  id?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  title,
  parentClassName,
  titleClassname,
  isHideCloseIcon = false,
  isFullScreen = false,
  additionalIcon,
  width = 'md',
  mainContentParentClassName,
  footer,
  isLoading = false,
  footerclassName,
  id = 'modal-root'
}) => {
  if (isOpen) {
    return createPortal(
      <div
        id={id}
        className={clsx(
          'modal-parent fixed inset-0 bg-BlackLight-opacity-90 z-50 flex items-center justify-center',
          parentClassName
        )}>
        <div
          className={clsx(
            ' bg-white rounded-10px mx-4 md:mx-0 w-[calc(100%-32px)] min-h-[150px] transition-all duration-500 ease-in-out',
            {
              'lg:max-w-850px': width === 'lg',
              'md:max-w-742px': width === 'md',
              'sm:max-w-600px': width === 'sm',
              'sm:max-w-500px': width === 'xs',
              'sm:max-w-450px': width === 'xxs',
              '!max-w-[calc(100%-40px)] !min-h-[calc(100dvh-40px)]':
                isFullScreen // Non-fullscreen fallback
            }
          )}>
          {title && (
            <div
              className={
                'flex items-center justify-between bg-Primary-100 px-5 py-18px rounded-t-10px'
              }>
              <h5
                className={`text-lg sm:text-xl font-semibold leading-23px text-Primary-300 white ${titleClassname}`}>
                {title}
              </h5>
              <div className="flex items-center gap-2.5">
                {additionalIcon}
                {!isHideCloseIcon && (
                  <Icon
                    name="close"
                    className="cursor-pointer"
                    onClick={
                      isLoading && isLoading
                        ? () => {
                            //
                          }
                        : onClose
                    }
                  />
                )}
              </div>
            </div>
          )}
          <div
            className={clsx(
              'p-5 overflow-y-auto max-h-[calc(100dvh-170px)] md:max-h-[calc(100dvh-200px)]',
              mainContentParentClassName,
              {
                'rounded-b-10px': !footer,
                'h-[calc(100dvh-100px)] md:h-[calc(100dvh-180px)] max-h-[calc(100dvh-100px)] md:max-h-[calc(100dvh-180px)]':
                  isFullScreen
              }
            )}>
            {children}
          </div>
          {footer && (
            <div className={clsx('p-4 w-full rounded-b-10px', footerclassName)}>
              {footer}
            </div>
          )}
        </div>
      </div>,
      document.body
    );
  }

  return null;
};

export default Modal;
export * from './ConfirmModal';
