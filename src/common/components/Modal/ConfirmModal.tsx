import clsx from 'clsx';
import { type ReactNode } from 'react';
import Modal, { type ModalProps } from '.';
import Button from '../Button';
import Icon, { type IconNameType } from '../Icon';

interface ConfirmModalProps extends ModalProps {
  onConfirm: () => void;
  confirmButtonTitle?: string;
  cancelButtonTitle?: string;
  buttonClassName?: string;
  cancelButtonClassName?: string;
  titleClassName?: string;
  isShowConfirm?: boolean;
  isShowCancel?: boolean;
  customButton?: ReactNode;
  customButtonPlacement?: 'start' | 'end';
  isLoading?: boolean;
  iconName?: IconNameType; // Custom icon
  iconBackgroundClassName?: string; // Background styling for the icon
  confirmButtonColor?: string;
  message?: string; // Message to display below the heading
  header?: string; // Header text
  iconclassName?: string;
  parentClassName?: string;
  width?: 'sm' | 'md' | 'xs' | 'xxs' | 'lg';
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onConfirm,
  children,
  confirmButtonTitle = 'Confirm',
  cancelButtonTitle = 'Confirm',
  buttonClassName,
  cancelButtonClassName,
  titleClassName,
  isShowCancel = false,
  isShowConfirm = true,
  customButton,
  customButtonPlacement = 'start',
  isLoading = false,
  iconName = 'delete',
  message,
  header,
  iconclassName,
  parentClassName,
  iconBackgroundClassName = 'bg-Red-100',
  width = 'xxs',
  ...props
}) => {
  return (
    <Modal
      {...props}
      isLoading={isLoading}
      width={width}
      footer={
        <div
          className={`w-full gap-4 flex ml-auto justify-between  ${parentClassName}`}>
          {customButtonPlacement === 'start' && customButton}
          {isShowCancel && (
            <Button
              variant="filled"
              title={cancelButtonTitle}
              className={clsx(
                'py-4 px-0 sm:px-5 rounded-lg bg-Primary-800 text-xs font-semibold w-2/4 hover:bg-gray-200',
                cancelButtonClassName
              )}
              titleClassName={titleClassName}
              onClick={props?.onClose}
              isDisabled={isLoading}
            />
          )}
          {isShowConfirm && (
            <Button
              isLoading={isLoading}
              isDisabled={isLoading}
              variant="filled"
              title={confirmButtonTitle}
              className={clsx(
                'py-4 px-0 sm:px-5 rounded-lg text-white text-xs font-semibold leading-14px w-2/4',
                buttonClassName
              )}
              onClick={onConfirm}
            />
          )}
          {customButtonPlacement === 'end' && customButton}
        </div>
      }>
      {children ? (
        children
      ) : (
        <div className="flex items-center flex-col gap-4">
          {' '}
          <div
            className={clsx(
              'w-16 h-16 flex items-center justify-center rounded-full',
              iconBackgroundClassName
            )}>
            {iconName && (
              <Icon
                name={iconName}
                className={`icon-wrapper ${iconclassName}`}
              />
            )}{' '}
          </div>
          <h2 className="text-xl font-semibold">{header}</h2>
          {message && (
            <p className="text-base text-Primary-900 text-center">{message}</p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ConfirmModal;
