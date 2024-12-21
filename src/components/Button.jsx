const Button = ({ px = '20', py = '10', fontSize, text, className }) => {
  return (
    <span
      className={` w-fit rounded-xl font-bold text-${fontSize}  transition-all ${className}`}
      style={{
        background: 'var(--primary-gradient)',
        padding: `${py}px ${px}px`,
      }}
    >
      {text}
    </span>
  );
};

export default Button;
