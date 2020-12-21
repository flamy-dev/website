import React from "react";

const StyledNavLink = React.forwardRef((props, ref) => {
  // @ts-ignore
  const { children, onClick, href, active } = props;
  return (
    <a
      className={`
        text-white dark:text-white font-mono no-underline cursor-pointer p-4 px-5 
        ${active ? "bg-underline" : ""} 
        bg-bottom bg-no-repeat
        hover:bg-underline
      `}
      onClick={onClick}
      href={href}
      // @ts-ignore
      ref={ref}
    >
      {children}
    </a>
  );
});

export default StyledNavLink;
