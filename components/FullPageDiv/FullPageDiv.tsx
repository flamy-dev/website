const FullPageDiv = (props) => {

  const { children } = props;
  
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col lg:flex-row flex-wrap p-20 dark:text-white">
      {children}
    </div>
  )
}

export default FullPageDiv;