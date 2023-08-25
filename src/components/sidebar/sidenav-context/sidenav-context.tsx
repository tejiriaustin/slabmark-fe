import { useDisclosure } from "@chakra-ui/react";
import React, { useContext, createContext } from "react";

const SidenavContext = createContext<ReturnType<typeof useDisclosure> | null>(
    null
);

export function useSidebar() {
    const sidebar = useContext(SidenavContext);
    if (!sidebar) {
        throw new Error("Cannot use `sidebar context` outside SidebarProvider");
    }

    return { ...(sidebar as ReturnType<typeof useDisclosure>)}
}

export function SidenavProvider({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    const disclosure = useDisclosure();
    return (
        <SidenavContext.Provider value={{ ...disclosure }} {...props}>
            {children}
        </SidenavContext.Provider>
    );
}

