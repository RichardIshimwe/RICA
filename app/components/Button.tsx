import React from "react";

// import Spinner from "@assets/icons/spinner.svg";



export default function Button({
  label,
  spinnerStyles,
  icon,
  buttonStyles,
  iconPosition,
  disabled,
  isIconButton,
  onClick,
  type = "button",
  loading = false,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} `}
      type={type}
      disabled={disabled}
    >
        <>
          {iconPosition === "LEFT" && icon}
          {isIconButton && icon}
          {label}
          {iconPosition === "RIGHT" && icon}
        </>
    </button>
  );
}
