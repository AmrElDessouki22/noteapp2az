'use client';

import { useState } from 'react';
import { useNotes } from '@/contexts/NotesContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import NoteItem from '@/components/features/NoteItem';

export default function HomePage() {
  const [noteText, setNoteText] = useState('');
  const { notes, addNote, deleteNote } = useNotes();

  const handleAddNote = () => {
    if (noteText.trim()) {
      addNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <div className="mb-4">
        <Input value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Enter your note here..." />
        <Button onClick={handleAddNote} className="mt-2">Add Note</Button>
      </div>
      <ul className="space-y-2">
        {notes.map((note, index) => (
          <NoteItem key={index} note={note} onDelete={() => deleteNote(index)} />
        ))}
      </ul>
    </div>
  );
}