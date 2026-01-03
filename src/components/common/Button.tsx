import { buttonVariants, type ButtonVariantProps } from '../variants/buttonsVariants'

interface ButtonProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  children,
  color,
  flat,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button 
      className={`${buttonVariants({ color, flat })} ${className || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
};