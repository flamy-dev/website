const Button = ({ type, children }) => {
  return (
    <button
      type={type}
      className="h-full w-full mt-6 font-medium tracking-widest uppercase text-blue-600 hover:text-blue-800 border-gray-100 border-2 hover:border-blue-500 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
