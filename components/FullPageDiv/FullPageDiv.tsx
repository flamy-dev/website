const FullPageDiv = (props) => {
  const { children, noPadding, extraClass } = props;

  return (
    <div
      className={`min-h-screen w-screen flex justify-center items-center flex-col flex-wrap p-4 dark:text-white
      ${noPadding ? "p-4 sm:p-0" : "p-4 md:p-20"}
      ${extraClass ? extraClass : ""}
    `}
    >
      {children}
    </div>
  );
};

export default FullPageDiv;
