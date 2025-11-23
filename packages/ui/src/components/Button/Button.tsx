import * as React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  topText?: string;    // Text for the top 3D layer
  bottomText?: string; // Text for the bottom 3D layer
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, topText = "Have", bottomText = "Fun", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.btm3Layers} ${className || ""}`}
        // Pass these props to CSS 'attr()' via data attributes
        data-top={topText}
        data-bottom={bottomText}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
