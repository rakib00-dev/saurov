const Button = ({
  px = '20',
  py = '10',
  border = 'xl',
  fontSize,
  text,
  className,
  children,
}) => {
  return (
    <span
      className={` w-fit rounded-${border} font-bold text-${fontSize}  transition-all ${className}`}
      style={{
        background: 'var(--primary-gradient)',
        padding: `${py}px ${px}px`,
      }}
    >
      {children}
      {text}
    </span>
  );
};

export default Button;
