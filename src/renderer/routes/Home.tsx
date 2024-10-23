import React, { useEffect } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { VideoGrid } from "../components/VideoGrid/VideoGrid";

export const Home: React.FC = ( ) => {

    useEffect(( ) => {
        console.log("kmkacm");
    }, [ ]);

    return (
        <div
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#ffffff"
        }}>
            <p>jsdncjn</p>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
            }}>
                <Sidebar />

                <VideoGrid />
            </div>
        </div>
    )
}
