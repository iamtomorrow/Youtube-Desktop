import React from "react";
import { VideoSearchProps } from "../../../types/Videos";

interface Props {
    title: string 
}

const VideoCard = ({ snippet }: VideoSearchProps) => {
    return (
        <div
        style={{
            width: 340,
            height: 180,
            borderRadius: 12,
            marginLeft: 4,
            marginRight: 4,
        }}>
            <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                borderRadius: 12,
            }}>
                <div
                style={{
                    width: "100%",
                    position: 'absolute',
                    zIndex: -1,
                    borderRadius: 12,
                }}>
                    <img 
                        src={ snippet.thumbnails.high.url }
                        style={{
                            width: 340,
                            height: 180,
                            objectFit: "cover",
                            borderRadius: 12,
                        }}
                    />
                </div>

                <div
                style={{
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.8))",
                    borderRadius: 12,
                }}>
                    <p
                    style={{
                        fontSize: 10,
                        fontWeight: "600",
                        color: "#ffffff"
                    }}>{ snippet.title }</p>
                </div>
            </div>
        </div>
    )
};

export default VideoCard;