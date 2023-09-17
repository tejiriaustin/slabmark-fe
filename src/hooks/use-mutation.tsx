import api from "@/lib/api"
import useSWRMutation, { SWRMutationConfiguration} from 'swr/mutation'

type MutateMethods = "put" | "post"

 const mutator = <TArgs, TResponse ,> (method: MutateMethods = "post") => (url: string, { arg }: { arg: TArgs }): Promise<TResponse> => {
    return  api[method](url, arg)
}


interface UseMutationArgs <TResponse = unknown, TMutator = (url: string, arg: unknown) => Promise<unknown>>{
    url: string;
    method?: MutateMethods;
    options?:  SWRMutationConfiguration<TResponse, unknown, any>
}

export const useMutation = <TResponse, TArgs ,>({url, method, options}: UseMutationArgs<TResponse>) => {
   return useSWRMutation<TResponse, any, string, TArgs>(url, mutator<TArgs, TResponse>(method), options)
}