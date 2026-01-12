import Footer from '@/components/user-layout/footer'
import Navbar from '@/components/user-layout/navbar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="sticky top-0 z-[100] bg-black">
                <Navbar />
            </div>
            <div className=''>
                {children}
            </div>
            <Footer />
        </>
    )
}
