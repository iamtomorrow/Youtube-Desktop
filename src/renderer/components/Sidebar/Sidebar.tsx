
import React from "react"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { RiCompassLine, RiHome2Line, RiHome3Line } from "@remixicon/react"

export const Sidebar: React.FC = ( ) => {
    return (
        <div
        style={{
            width: 200,
            height: "100%",
            padding: 10,
            backgroundColor: "#ffffff"
        }}>
            <nav
            style={{
                width: '100%',
                height: '100%',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <SidebarItem
                    icon={ <RiHome2Line size={20}/> }
                    title="Home"
                />

                <SidebarItem
                    icon={ <RiCompassLine size={20}/> }
                    title="Explore"
                />
            </nav>
        </div>
    )
}