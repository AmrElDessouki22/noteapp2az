'use client';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}