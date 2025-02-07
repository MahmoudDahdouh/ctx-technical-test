"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader, Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { createNoteSchema } from "@/validations/note.validation"
import createNote from "@/queries/create-note"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface AddNoteDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function AddNoteDialog({ isOpen, onOpenChange }: AddNoteDialogProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createNoteSchema),
  })

  const { isPending, mutate } = createNote()

  const onCreateNewNote = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        onOpenChange(false)
        reset()
        toast.success("Note created successfully")
      },
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus />
          Add new note
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[96%]  rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg">
        <DialogHeader className="text-start">
          <DialogTitle>Add new Note</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onCreateNewNote)}>
          <div className="flex flex-col gap-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                className="mt-1"
                id="title"
                placeholder="add note title"
                {...register("title")}
              />
              {errors?.title && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Input
                className="mt-1"
                id="content"
                placeholder="add note content"
                {...register("content")}
              />
              {errors?.content && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-4" disabled={isPending}>
              {isPending && <Loader className="animate-spin" />}
              Create new Note
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
