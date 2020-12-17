const LazyImg = (props) => {
  const { className, src, ...rest } = props;
  return <img className={`${className} lazyload`} data-src={src} {...rest} />;
};

export default LazyImg;
