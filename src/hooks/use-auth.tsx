import {AuthContext} from "@/providers/auth";
import {useContext} from "react";

export const useAuth = () => {
    const {isAuthenticated, role} = useContext(AuthContext)

    return {isAuthenticated, role}
}