const Headings = (props) => {
  
  const { children } = props;
  
  return (
    <h2 className={`
      flex justify-center items-center 
      font-helvetica font-extrabold text-5xl tracking-wide
      md:text-6xl
      `}>
      {children}
    </h2>
  )
}

export default Headings;