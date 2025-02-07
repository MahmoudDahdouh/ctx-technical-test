const notes = Array.from({ length: 6 }).fill(0)

export default function NoteListLoader() {
  return (
    <div className="grid grid-cols-12 gap-3 w-full mt-4">
      {notes.map((_, index) => (
        <div
          key={index}
          className="flex min-h-20 flex-col gap-y-2 rounded-md p-4 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 animate-pulse bg-gray-100"
        >
          <div className="h-4 rounded-full bg-gray-300"></div>
          <div className="h-2 mt-2 rounded-full bg-gray-300 me-4"></div>
          <div className="h-2 rounded-full bg-gray-300 me-6"></div>
        </div>
      ))}
    </div>
  )
}
