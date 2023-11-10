function Button(props) {
  const {
    className, btnRef, children, ...rest
  } = props;
  return (
    <button ref={btnRef} className={className} {...rest}>{children}</button>
  );
}

export default Button;
