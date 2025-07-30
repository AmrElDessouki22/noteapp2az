'use client';

import { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Input({ value, onChange, placeholder = '' }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded py-2 px-3 w-full"
    />
  );
}