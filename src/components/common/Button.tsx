import { buttonVariants, type ButtonVariantProps } from '../variants/buttonsVariants'

interface ButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
  Icon?: React.ElementType<{ size: number }>;
}

export const Button = ({
  children,
  color,
  flat,
  Icon,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button 
      className={`${buttonVariants({ color, flat })} ${className || ''}`}
      {...rest}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};