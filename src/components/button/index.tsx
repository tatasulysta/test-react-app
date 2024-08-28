import React from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: (size: number) => React.ReactNode;
  rightIcon?: (size: number) => React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "medium" | "small";
}

export default function Button(props: ButtonProps) {
  const {
    leftIcon,
    rightIcon,
    variant = "primary",
    size = "medium",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`${styles[variant]} ${styles[size]} ${styles.main}`}
    />
  );
}
