
import React from "react";
import { VideoSearchProps } from "../../../types/Videos";
import "./VideoCard.css";

interface Props {
    title: string 
}

const VideoCard = ({ snippet }: VideoSearchProps) => {
    return (
        <div
        className="video-card--container">
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 12,
            }}>
                <div
                className="video-card-thumbnail--container">
                    <img 
                        src={ snippet.thumbnails.high.url }
                        className="video-card-thumbnail"
                    />
                </div>

                <div
                style={{
                    width: "100%",
                    maxHeight: 60,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: 10,
                }}>
                    <div
                    style={{
                        width: 40,
                        height: "100%",
                        // backgroundColor: "violet"
                    }}>
                        <div
                        style={{
                            width: 34,
                            height: 34,
                            borderRadius: 17,
                            backgroundColor: "rgba(0, 0, 0, 0.1)"
                        }}>

                        </div>
                    </div>
                    <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        paddingLeft: 10,
                        flexDirection: "column",
                        // backgroundColor: "yellow"
                    }}>
                        <h2
                        style={{
                            fontSize: 12,
                            fontWeight: "600",
                            color: "#000000",
                            textAlign: "left",
                        }}>{ snippet.title }</h2>

                        <p
                        style={{
                            fontSize: 10,
                            fontWeight: "600",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "left",
                            marginTop: 4,
                        }}>{ snippet.channelTitle }</p>
                        
                        <p
                        style={{
                            fontSize: 8,
                            fontWeight: "600",
                            color: "rgba(0, 0, 0, 0.7)",
                            textAlign: "left",
                            marginTop: 4,
                        }}>{ snippet.publishTime }</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VideoCard;