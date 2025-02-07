export interface NoteCardProps {
  title: string
  content?: string
  onClick?: () => void
}

export default function NoteCard({ title, content, onClick }: NoteCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col min-h-28 gap-y-2 shadow hover:shadow-md cursor-pointer transition shadow-gray-200 rounded-md p-4 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
    >
      <h2 className="text-lg font font-bold">{title}</h2>
      <p className="text-base text-gray-400 line-clamp-3">
        {content || "No content"}
      </p>
    </div>
  )
}
