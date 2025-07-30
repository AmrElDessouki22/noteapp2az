'use client';

interface NoteItemProps {
  note: string;
  onDelete: () => void;
}

export default function NoteItem({ note, onDelete }: NoteItemProps) {
  return (
    <li className="flex justify-between items-center p-2 border rounded">
      <span>{note}</span>
      <button onClick={onDelete} className="text-red-500 hover:underline">Delete</button>
    </li>
  );
}