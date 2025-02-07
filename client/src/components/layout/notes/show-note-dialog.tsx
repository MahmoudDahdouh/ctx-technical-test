"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface ShowNoteDialogProps {
  note: any
  onClose: () => void
}

export function ShowNoteDialog({ note, onClose }: ShowNoteDialogProps) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(true)
  }, [note])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          setIsOpen(false)
          onClose()
        }
      }}
    >
      <DialogContent className="max-w-[96%] max-h-[96vh] rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg">
        <DialogHeader className="text-start">
          <DialogTitle>Note</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-4 overflow-hidden max-h-[80vh] ">
          <h2 className="text-2xl font-semibold">{note?.title}</h2>
          <p className="text-base text-gray-400 overflow-auto">
            {note?.content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
