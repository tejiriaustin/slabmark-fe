import api from "@/lib/api"
import useSWRMutation, { SWRMutationConfiguration} from 'swr/mutation'

type MutateMethods = "put" | "post"

 const mutator = <T ,> (method: MutateMethods = "post") => (url: string, { arg }: { arg: T }) => {
    return  api[method](url, arg)
}


interface UseMutationArgs <TResponse = unknown, TMutator = (url: string, arg: unknown) => Promise<unknown>>{
    url: string;
    method?: MutateMethods;
    options?:  SWRMutationConfiguration<TResponse, unknown, any>
}

export const useMutation = <TResponse, TArgs ,>({url, method, options}: UseMutationArgs<TResponse>) => {
   return useSWRMutation<TResponse, any, string, TArgs>(url, mutator(method), options)
}