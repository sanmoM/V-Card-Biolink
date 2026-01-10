import { cn } from '@/utils/cn'
import Image from 'next/image'

export default function BlueCircle({ className }: { className?: string }) {
    return (
        // <div className={cn('aspect-square bg-[#0080FF] blur-2xl absolute rounded-full', className)} />
        <Image src="/images/blue-circle.png" alt="" width={500} height={500} className={cn('absolute z-10 mix-blend-overlay', className)} />
    )
}
