import { cn } from '@/utils/cn'
import React from 'react'

export default function SubHeading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={cn("text-lg leading-relaxed text-gray-300", className)}>
            {children}
        </p>
    )
}
