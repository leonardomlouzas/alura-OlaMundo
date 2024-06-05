import "./button.css";

export default function Button({ children, isLarge }) {
  return (
    <button className={`${isLarge && "button--large"} button`}>
      {children}
    </button>
  );
}
