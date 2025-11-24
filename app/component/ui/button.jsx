import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(function Button(
  { className, variant = "default", ...props },
  ref
) {
  const variantClasses = {
    default:
      "bg-blue-900 text-white hover:bg-blue-900",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-black"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
