const FullPageDiv = (props) => {
  const { children, noPadding } = props;

  return (
    <div
      className={`min-h-screen w-screen flex justify-center items-center flex-col flex-wrap p-4 dark:text-white
      ${noPadding ? "p-2 sm:p-0" : "p-4 md:p-20"}
    `}
    >
      {children}
    </div>
  );
};

export default FullPageDiv;
