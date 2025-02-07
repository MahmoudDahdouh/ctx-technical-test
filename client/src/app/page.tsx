"use client"
import { AddNoteDialog } from "@/components/layout/notes/add-note-dialog"
import NotesList from "@/components/layout/notes/notes-list"
import NoteListLoader from "@/components/layout/notes/notes-loader"
import ErrorResponseWithRefetch from "@/components/ui/error-response-with-refetch"
import useNotes from "@/hooks/use-notes"
import { useState } from "react"

export default function Home() {
  const [isAddNoteDialogOpen, setIsAddNoteDialogOpen] = useState(false)

  const { notes, isLoading, isError, refetch } = useNotes()

  return (
    <div className="container">
      <div className="flex justify-between mt-12">
        <h2 className="text-4xl">Notes list</h2>
        <AddNoteDialog
          isOpen={isAddNoteDialogOpen}
          onOpenChange={setIsAddNoteDialogOpen}
        />
      </div>
      {isLoading ? (
        <NoteListLoader />
      ) : (
        <>
          {isError ? (
            <ErrorResponseWithRefetch
              onRefetch={refetch}
              msg="Something went wrong"
            />
          ) : (
            <NotesList notes={notes} className="my-4" />
          )}
        </>
      )}
    </div>
  )
}
