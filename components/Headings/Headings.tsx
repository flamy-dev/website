const Headings = (props) => {
  
  const { size, children } = props;
  
  return (
    <h2 className={`
      justify-start flex md:justify-center items-center 
      font-helvetica font-extrabold text-5xl tracking-wide
      ${size === "large" ? "md:text-8xl": "md-text-6xl"}
      `}>
      {children}
    </h2>
  )
}

export default Headings;