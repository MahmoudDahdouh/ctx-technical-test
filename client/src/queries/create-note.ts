import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "../config/axios"

export default function createNote() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data) =>
      axios.post("/api/v1/notes", data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-notes"] })
    },
  })
}
