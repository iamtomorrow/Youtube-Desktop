
import React from "react";
import ReactDOM from "react-dom/client";
import { VideosContextProvider } from "../contexts/VideosContexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
    <VideosContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
            </Routes>
        </BrowserRouter>
    </VideosContextProvider>
    </>
)
