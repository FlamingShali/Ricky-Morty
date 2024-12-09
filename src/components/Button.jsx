const Button = ({ role, children }) => {
  return <button onClick={role}>{children}</button>;
};

export default Button;
