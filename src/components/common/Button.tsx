import { buttonVariants, type ButtonVariantProps } from "../variants/buttonsVariants";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
  Icon?: React.ElementType<{ size: number }>;
  isActive?: boolean;
}

export const Button = ({
  children,
  color,
  flat,
  Icon,
  isActive = false,
  className = "",
  ...rest
}: ButtonProps) => {
  console.log(isActive)
  return (
    <button
      className={`
        ${buttonVariants({ color, flat })}
        ${className}
        ${isActive ? "ring-1 ring-teal-800" : ""}
      `}
      {...rest}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};
