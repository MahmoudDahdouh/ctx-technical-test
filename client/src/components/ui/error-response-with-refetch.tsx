import { CircleAlert } from "lucide-react"
import { Button } from "./button"

interface ErrorResponseWithRefetchProps {
  msg: string
  refetchText?: string
  onRefetch: () => void
}

export default function ErrorResponseWithRefetch({
  msg,
  refetchText,
  onRefetch,
}: ErrorResponseWithRefetchProps) {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center my-12">
      <CircleAlert size={96} className="text-gray-400" />
      <p className="text-2xl ">{msg}</p>
      <Button onClick={onRefetch}>{refetchText || "Refetch"}</Button>
    </div>
  )
}
