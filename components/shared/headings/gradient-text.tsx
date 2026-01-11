import { cn } from '@/utils/cn'
import React from 'react'

export default function GradientText({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className={cn(`text-center bg-white text-transparent bg-clip-text`, className)}
    >
      {children}
    </h1>
  )
}
