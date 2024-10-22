import { VideoSearchProps } from "../types/Videos";

const API_KEY = "AIzaSyALCb09HUmzFXF1qwPvyLv_DoyxWh7pDX0";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const API_ACCESS_TOKEN_TMDB = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjBmZTU0YTBkNDYxNDZhMGMwYzM1OWM5MGEzMTIxYSIsIm5iZiI6MTcyMTY3NzUyMC41NjEyOTMsInN1YiI6IjY2OWViNjA2ZTA2Y2RmOWM5MTBjMjUwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eJFAAfT1VD45dV2L9w5kR7VW9zpSQkNWXZuUshtQ4y4";
const API_KEY_TMDB = "360fe54a0d46146a0c0c359c90a3121a";

export const API = {
    getVideosByCategory: async ( ): Promise<VideoSearchProps[]> => {
        const cat = 10;
        let response = await fetch(`${BASE_URL}/videos?part=snippet&maxResults=5&videoCategoryId=${cat}&order=relevance&chart=mostPopular&key=${API_KEY}`)
        let data = await response.json( );

        return data.items;
    }
}