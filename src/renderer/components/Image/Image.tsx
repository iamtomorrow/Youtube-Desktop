
import React from "react";

interface Props {
    url: string 
    width: string 
    height: string
}

export const Image = ({ url, width, height }: Props) => {
    return (
        <img 
            src={`${url}`}
            style={{
                width,
                height
            }}
        />
    )
}