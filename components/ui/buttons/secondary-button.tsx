import React from 'react'

export default function SecondaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90 cursor-pointer">
            {children}
        </button>
    )
}
