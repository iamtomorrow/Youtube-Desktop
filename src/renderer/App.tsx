
import React from "react";
import { Header } from "./components/Header/Header";
import VideoCard from "./components/VideoCard/VideoCard";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { VideoGrid } from "./components/VideoGrid/VideoGrid";
import { VideosContextProvider } from "../contexts/VideosContexts";

const data = [
    1, 2, 3, 4, 5
]

const App: React.FC = ( ) => {
    return (
        <VideosContextProvider>
            <div
            style={{
                width: "100%",
                height: "100vh"
            }}>
                <Header />

                <div
                style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "red",
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Sidebar />

                    <VideoGrid />
                </div>
            </div>
        </VideosContextProvider>
    )
}


export default App;