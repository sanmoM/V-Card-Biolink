import { cn } from '@/utils/cn'
import React from 'react'

export default function SecondaryButton({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={cn("inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-2 lg:py-3 text-sm font-semibold text-black hover:opacity-90 cursor-pointer", className)}>
            {children}
        </button>
    )
}
