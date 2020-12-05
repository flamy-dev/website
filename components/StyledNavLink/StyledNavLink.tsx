const StyledNavLink = (props) => {
  
  const { children } = props;

  return (
    <a className="text-white dark:text-white font-mono no-underline cursor-pointer p-4 px-5 bg-underline bg-bottom bg-no-repeat ">
      {children}
    </a>
  )
}

export default StyledNavLink;