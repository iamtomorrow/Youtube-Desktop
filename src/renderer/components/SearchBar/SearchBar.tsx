
import React, { useState } from "react"

import { RiSearch2Line  } from "@remixicon/react"

export const SearchBar: React.FC = ( ) => {
    const [ query, setQuery ] = useState("");

    return (
        <div
        style={{
            width: "80%",
            height: 40,
            display: "flex",
            flexDirection: "row",
            borderRadius: 20,
            border: "1px solid rgba(0, 0, 0, 0.2)"
        }}>
            <input 
                style={{
                    paddingLeft: 10,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                }}
                placeholder="Search..."
                value={ query }
                onChange={ (e) => setQuery(e.target.value) }
            />
            <button
            style={{
                width: 60,
                height: "100%",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}>
                <RiSearch2Line     
                    size={20}
                    color="#000000"
                />
            </button>
        </div>
    )
}