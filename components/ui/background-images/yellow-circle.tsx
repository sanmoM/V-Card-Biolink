import { cn } from '@/utils/cn'
import Image from 'next/image'

export default function YellowCircle({ className }: { className?: string }) {
    return (
        // <div className={cn('aspect-square bg-[#ffd900] blur-[120px] absolute rounded-full', className)} />
        <Image src="/images/yellow-circle.png" alt="" width={500} height={500} className={cn('absolute z-10 ', className)} />
    )
}
