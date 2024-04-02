import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]" };
const variants = {
  gradient: {
    purple_A400_purple_A700: "bg-gradient1  text-white-A700",
    purple_A700_purple_A400: "bg-gradient  text-white-A700",
  },
  outline: {
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
};
const sizes = { xs: "p-[11px]", sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient", "outline"]),
  color: PropTypes.oneOf([
    "purple_A400_purple_A700",
    "purple_A700_purple_A400",
    "white_A700",
  ]),
};

export { Button };
