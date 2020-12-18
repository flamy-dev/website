const Input = ({ id, name, type, placeholder, extraClass, ...rest }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 border-2 focus:shadow-inner ${extraClass}`}
      {...rest}
    />
  );
};

export default Input;
