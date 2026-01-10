import { cn } from '@/utils/cn'
import React from 'react'

export default function PrimaryButton({ className, children, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={cn(`w-full py-3 rounded-lg bg-gradient-primary text-white font-semibold hover:opacity-90 transition bg-linear-to-r from-[#0080FF] to-[#FFD700]`, className)}
        >
            {children}
        </button>
    )
}
