
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
                    <div
                    style={{
                        width: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <RiMenuFill
                            size={20}
                            color="#000000"
                        />
                    </div>
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
                            src={"https://www.horizont.net/news/media/22/Youtube-Logo-2017-215190.jpeg"}
                            style={{  
                                width: 70,
                            }}
                        />
                    </div>
                </div>

                <div
                style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <SearchBar />
                </div>

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
                    <button
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginLeft: 6,
                        marginRight: 6,
                    }}>
                        <RiNotification2Line 
                            size={20}
                            color="#000000"
                        />
                    </button>

                    <button
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginLeft: 6,
                        marginRight: 6,
                    }}>
                        <RiVideoAddLine
                            size={20}
                            color="#000000"
                        />
                    </button>

                    <button
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginLeft: 6,
                        marginRight: 6,
                    }}>
                        <RiUser3Line
                            size={20}
                            color="#000000"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}