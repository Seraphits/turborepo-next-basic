"use client";

import { ReactNode } from "react";
import styles from "./Button.module.scss";

// Ensure this interface is exported and includes 'variant'
export interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  appName?: string;
  topText?: string;
  bottomText?: string;
  variant?: 'primary' | 'secondary'; // This MUST be here
}

export const Button = ({
  children,
  onClick,
  className,
  topText,
  bottomText,
  variant = 'primary'
}: ButtonProps) => {

  const buttonClass = `${styles.pushable} ${variant === 'secondary' ? styles.secondary : ''} ${className || ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>
        {topText || bottomText ? (
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
            <span style={{ fontSize: '0.8em', opacity: 0.9 }}>{topText}</span>
            <span>{bottomText}</span>
          </div>
        ) : (
          children
        )}
      </span>
    </button>
  );
};
