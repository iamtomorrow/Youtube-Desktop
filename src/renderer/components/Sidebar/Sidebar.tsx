
import React from "react"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { RiCompassLine, RiHome2Line, RiHome3Line, RiNotification2Line, RiSearch2Line, RiVideoAddLine } from "@remixicon/react"

export const Sidebar: React.FC = ( ) => {
    return (
        <div
        style={{
            width: 240,
            height: "100%",
            padding: 10,
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
                <div
                style={{
                    width: "100%",
                    height: 46,
                    marginTop: 4,
                    marginBottom: 4,
                    borderRadius: 8,
                    backgroundColor: "#ffffff",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",

                }}>
                    <div
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: 20,
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                    }}>

                    </div>

                    <p
                    style={{
                        fontSize: 12,
                        fontWeight: "600",
                        marginLeft: 10,
                    }}>Account</p>
                </div>

                <SidebarItem
                    icon={ <RiHome2Line size={20}/> }
                    title="Home"
                />

                <SidebarItem
                    icon={ <RiSearch2Line size={20}/> }
                    title="Search"
                />

                <SidebarItem
                    icon={ <RiCompassLine size={20}/> }
                    title="Explore"
                />

                <SidebarItem
                    icon={ <RiNotification2Line size={20}/> }
                    title="Notifications"
                />

                <SidebarItem
                    icon={ <RiVideoAddLine size={20}/> }
                    title="Add new"
                />
            </nav>
        </div>
    )
}