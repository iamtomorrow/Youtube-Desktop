
import React from "react";
import "./Header.css";
import { Image } from "../Image/Image";

import { RiCamera2Fill, RiCamera3Line, RiMenuFill, RiUser3Line, RiUser4Line, RiVideoAddLine } from "@remixicon/react";
import { RiNotification2Line } from "@remixicon/react";
import { SearchBar } from "../SearchBar/SearchBar";

export const Header: React.FC = ( ) => {
    return (
        <div style={{
            width: "100%",
            height: 90,
            // backgroundColor: "blue"
        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <div
                style={{
                    width: 'auto',
                    height: "100%",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingLeft: 10,
                    paddingRight: 10,
                }}>

                </div>

                {/* <div
                style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <SearchBar />
                </div> */}

                <div
                style={{
                    width: 'auto',
                    height: "100%",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingLeft: 10,
                    paddingRight: 10,
                }}>
                    <div
                    style={{
                        height: '100%',
                        paddingLeft: 20,
                        paddingRight: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img 
                            src={"https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"}
                            style={{  
                                width: 90,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}