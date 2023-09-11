import api from "@/lib/api"
import useSWR from "swr";
export const fetcher = (url: string) => api.get(url).then(res => res.data)

export const useFetcher = (url: string) => {
    return useSWR(url, fetcher)
}

