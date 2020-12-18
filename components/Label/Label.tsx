const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold text-gray-800 uppercase"
    >
      {children}
    </label>
  );
};

export default Label;
