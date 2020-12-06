const FullPageDiv = (props) => {

  const { children } = props;
  
  return (
    <div className=" min-h-screen w-screen flex justify-center items-center flex-col flex-wrap p-10 md:p-20 dark:text-white">
      {children}
    </div>
  )
}

export default FullPageDiv;