import Container from '@/components/shared/container'
import Navbar from '@/components/user-layout/navbar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Container>
                <Navbar />
            </Container>
            {children}
        </>
    )
}
