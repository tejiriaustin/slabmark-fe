import { BsBarChart } from "react-icons/bs";
import { BiMap, BiChalkboard } from "react-icons/bi";
import { FiSettings, FiMenu } from "react-icons/fi";
import {IconButton} from "@chakra-ui/react";
import  {Sidenav} from "@/src/components/sidebar/sidenav";
import {SidenavItem} from "@/src/components/sidebar/sidenav-items/sidenav-items";
import {SidenavProvider, useSidebar} from "@/src/components/sidebar/sidenav-context/sidenav-context";
import SidenavContainer from "@/src/components/sidebar/sidenav-container/sidenav-container";

const Home = () => {
    const navItems: SidenavItem[] = [
        { icon: BsBarChart, label: "Dashboard", to: "" },
        { icon: BiChalkboard, label: "Forecast", to: "forecast" },
        { icon: BiMap, label: "Location", to: "location" },
        { icon: FiSettings, label: "Settings", to: "settings" }
    ];

    const { onOpen } = useSidebar();
    return (
        <SidenavProvider>
            <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
                <main>
                    <div className="App">
                        <h1>Hello CodeSandbox!</h1>
                        <h2>Start editing to see some magic happen!</h2>
                    </div>
                </main>
                <IconButton
                    aria-label="menu"
                    display={{ base: "flex", md: "none" }}
                    onClick={onOpen}
                    icon={<FiMenu />}
                />
            </ SidenavContainer>
        </SidenavProvider>
    );
}

export default Home;