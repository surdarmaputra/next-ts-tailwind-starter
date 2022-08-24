import './Button.css';

import classNames from 'classnames';

export enum ButtonVariation {
  primary = 'primary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
}

export enum ButtonSize {
  small = 'small',
  default = 'default',
  large = 'large',
}

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  size?: `${ButtonSize}`;
  variation?: `${ButtonVariation}`;
}

export function Button({
  children,
  className,
  onClick,
  size = ButtonSize.default,
  variation = ButtonVariation.primary,
}: ButtonProps) {
  const finalClassName = `${classNames({
    'button transition hover:shadow-lg text-white': true,
    'bg-primary-500 hover:bg-primary-600':
      variation === ButtonVariation.primary,
    'bg-success-500 hover:bg-success-600':
      variation === ButtonVariation.success,
    'bg-danger-500 hover:bg-danger-600': variation === ButtonVariation.danger,
    'bg-warning-500 hover:bg-warning-600':
      variation === ButtonVariation.warning,
    'bg-info-500 hover:bg-info-600': variation === ButtonVariation.info,
    'px-4 py-2 text-xs': size === ButtonSize.small,
    'px-6 py-3 text-sm': size === ButtonSize.default,
    'px-10 py-4 text-base': size === ButtonSize.large,
  })} ${className}`;

  return (
    <button className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}
