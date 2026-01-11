import React from 'react'

export default function MultiTextHeading({ text1, text2, text2Style }: { text1: string, text2: string, text2Style?: React.CSSProperties }) {
    return (
        <h2 className="mb-4 text-3xl font-semibold md:text-6xl text-white">
            {text1} <span
                style={text2Style}
                className="text-transparent bg-clip-text"
            >
                {text2}
            </span>
        </h2>
    )
}
