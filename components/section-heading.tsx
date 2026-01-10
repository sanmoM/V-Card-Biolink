import { cn } from '@/utils/cn'
import React from 'react'

export default function SectionHeading({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            {...props}
            className={cn(`text-4xl font-extrabold text-center bg-white text-transparent bg-clip-text`, className)}
        >
            {children}
        </h1>
    )
}
