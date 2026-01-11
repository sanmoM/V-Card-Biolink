import { cn } from '@/utils/cn'
import React from 'react'

export default function MultiTextHeading({ text1, text2, text2Style, className }: { text1: string, text2: string, text2Style?: React.CSSProperties, className?: string }) {
    return (
        <h2 className={cn("mb-4 text-3xl font-semibold md:text-5xl xl:text-6xl text-white", className)}>
            {text1} <span
                style={text2Style}
                className="text-transparent bg-clip-text"
            >
                {text2}
            </span>
        </h2>
    )
}
