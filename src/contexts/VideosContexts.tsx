
import React, { createContext, useContext, useEffect, useState } from "react";
import { API } from "../api/api";

import { ChildrenProps } from "../types/Types";
import { VideoSearchProps } from "../types/Videos"

interface VideosContextProps {
    videos: VideoSearchProps[]
    updateVideos: ( ) => void 
}

const VideosContextInitialState: VideosContextProps = {
    videos: [],
    updateVideos: ( ) => { }
}

const VideosContext = createContext<VideosContextProps>( VideosContextInitialState );

export const VideosContextProvider = ({ children }: ChildrenProps) => {
    const [ videos, setVideos ] = useState<any[]>([])

    useEffect(( ) => {
        updateVideos( );
    }, [ ]);

    const updateVideos = async ( ) => {
        const _videos = await API.getVideosByCategory( );
        setVideos( prev => _videos );
    }

    return (
        <VideosContext.Provider 
        value={{
            videos,
            updateVideos
        }}>
            { children }
        </VideosContext.Provider>
    )
}

export const useVideosContext = ( ) => {
    return useContext( VideosContext );
}