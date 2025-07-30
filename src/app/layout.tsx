import '@/app/globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '@/contexts/NotesContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}