import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-4 md:px-6 lg:px-0 lg:w-[95%] max-w-[1600px] mx-auto'>
            {children}
        </div>
    )
}
