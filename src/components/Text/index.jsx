import React from "react";

const sizeClasses = {
  txtSeravek15: "font-normal font-seravek",
  txtVarelaRoundRegular40: "font-normal font-varelaround",
  txtVarelaRoundRegular1497: "font-normal font-varelaround",
  txtVarelaRoundRegular30: "font-normal font-varelaround",
  txtVarelaRoundRegular20: "font-normal font-varelaround",
  txtVarelaRoundRegular7624: "font-normal font-varelaround",
  txtVarelaRoundRegular24: "font-normal font-varelaround",
  txtVarelaRoundRegular25: "font-normal font-varelaround",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
