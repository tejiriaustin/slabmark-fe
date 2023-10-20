import React, {createContext, useEffect, useState} from 'react'
import {getToken} from '@/storage'
import {useRouter} from "next/router";


interface AuthContextInterface {
    isAuthenticated: boolean
    role: 'ADMINISTRATOR' | 'EMPLOYEE'
}

export const AuthContext = createContext<AuthContextInterface>({role: 'EMPLOYEE', isAuthenticated: false})

const unprotectedRoutes = ['/login', '/forgot-password', '/reset-password']

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider = ({children}: AuthProviderProps) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const token = getToken();

    useEffect(()=> {
        if (token)  {
            setIsAuthenticated(true)
        } else {
            const currentPath = router.pathname
            if (!unprotectedRoutes.includes(currentPath)) {
                // router.replace('/login')
            } else {
                router.replace('/login')
            }
        }

        },[router, setIsAuthenticated, token])

    return (
        <AuthContext.Provider value={{isAuthenticated: isAuthenticated, role: 'EMPLOYEE'}}>
            {children}
        </ AuthContext.Provider>
    )
}

export default AuthProvider;