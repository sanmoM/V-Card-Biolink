import React from 'react'

export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="mb-6 inline-block text-secondary border border-secondary/30 px-6 py-2 rounded-full text-sm shadow-[0_0_20px_0_#FFD70033] font-bold">
            {children}
        </span>
    )
}
