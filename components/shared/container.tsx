import { cn } from '@/utils/cn'
import React from 'react'

export default function Container({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
    return (
        <div className={cn('px-4 md:px-6 lg:px-0 lg:w-[95%] max-w-[1600px] mx-auto', className)}
            style={style}
        >
            {children}
        </div>
    )
}
