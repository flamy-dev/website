const Button = ({ type, children, ...rest }) => {
  return (
    <button
      type={type}
      className="h-full w-full mt-6 font-medium tracking-widest uppercase text-green-600 hover:text-green-800 border-gray-100 border-2 hover:border-green-500 focus:outline-none disabled:bg-gray-200 disabled:text-green-800 disabled:cursor-not-allowed text-center justify-center items-center flex"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
