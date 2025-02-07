import { ClipboardList } from "lucide-react"
import NoteCard from "./note-card"
import { useState } from "react"
import { ShowNoteDialog } from "./show-note-dialog"

interface NotesListProps {
  notes: any[]
  className?: string
}
export default function NotesList({ notes, className }: NotesListProps) {
  const [selectedNote, setSelectedNote] = useState(null)

  const onClickNote = (note: any) => {
    setSelectedNote(note)
  }

  return (
    <>
      <div className={`grid grid-cols-12 gap-3 w-full ${className}`}>
        {notes?.length ? (
          <>
            {notes.map((note, index) => (
              <NoteCard
                key={index}
                onClick={() => onClickNote(note)}
                {...note}
              />
            ))}
          </>
        ) : (
          <div className="col-span-12 flex flex-col justify-center items-center mt-12">
            <ClipboardList size={96} className="text-gray-400" />
            <p className="text-xl text-gray-400 mt-4">No notes found</p>
          </div>
        )}
      </div>
      {/* Show Dialog when a note is selected */}
      {selectedNote && (
        <ShowNoteDialog
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
        />
      )}
    </>
  )
}
