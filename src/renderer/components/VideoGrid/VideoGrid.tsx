
import React = require("react")
import { useState, useEffect } from "react"
import VideoCard from "../VideoCard/VideoCard";
import { API } from "../../../api/api";
import { useVideosContext } from "../../../contexts/VideosContexts";

interface Props {
    content: any[]
}

export const VideoGrid = ( ) => {
    const { videos } = useVideosContext( );

    return (
        <div
        style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
        }}>
            {
                videos.map((item) => (
                    <VideoCard 
                        etag={ item.etag }
                        id={ item.id }
                        kind={ item.kind }
                        snippet={ item.snippet }
                    />
                ))
            }
        </div>
    )
}