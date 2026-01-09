import { buttonVariants, type ButtonVariantProps } from "../variants/buttonsVariants";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    ButtonVariantProps {
  children: React.ReactNode;
  className?: string;
  Icon?: React.ElementType<{ size?: number }>; // Made size optional
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
  return (
    <button
      className={`
        ${buttonVariants({ color, flat })}
        ${className}
        ${isActive ? "ring-1 ring-teal-800" : ""}
      `}
      {...rest}
    >
      {/* Render Icon BEFORE children if you want icon on left */}
      {Icon && <Icon size={20} />} {/* Increased size for better visibility */}
      {children}
    </button>
  );
};