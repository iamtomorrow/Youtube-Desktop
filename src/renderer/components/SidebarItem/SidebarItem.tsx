
import React from "react";

interface Props {
    title: string 
    icon: any
}

export const SidebarItem = ({ title, icon }: Props) => {
    return (
        <div
        style={{
            width: "100%",
            height: 46,
            marginTop: 4,
            marginBottom: 4,
            borderRadius: 8,
            backgroundColor: "#ffffff"
        }}>
            <button
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 4,
                borderRadius: 8,
            }}>
                <div
                style={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}> 
                    { icon }
                </div>

                <div
                style={{
                    width: "80%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginLeft: 20,
                }}>
                    <p
                    style={{
                        fontWeight: "600",
                        fontSize: 12,
                    }}>{ title }</p>
                </div>
            </button>
        </div>
    )
}