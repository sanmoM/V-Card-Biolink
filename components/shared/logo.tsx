import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className }: { className?: string }) {
    return (
        <Link href={'/'} className={className}>
            <Image src="/images/logo.png" alt="Logo" width={100} height={100} className='w-full' />
        </Link>
    )
}