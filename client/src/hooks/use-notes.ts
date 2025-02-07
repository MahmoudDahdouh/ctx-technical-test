import { useQuery } from "@tanstack/react-query"
import axios from "../config/axios"
import { toast } from "sonner"
import { useEffect } from "react"

export default function useNotes() {
  const { data, isSuccess, isLoading, isError, error, refetch, isRefetching } =
    useQuery({
      queryKey: ["all-notes"],
      queryFn: () => axios.get("/api/v1/notes").then((res) => res.data),
      retry: false,
    })

  useEffect(() => {
    if (isError) toast.error(error?.message)
    if (isSuccess) toast.success("Notes fetched successfully")
  }, [isError, isSuccess])

  const notes = data?.data?.notes

  return {
    data,
    notes,
    isSuccess,
    isLoading,
    isError,
    refetch,
  }
}
