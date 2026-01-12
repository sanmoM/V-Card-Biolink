"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../shared/logo";
import SecondaryButton from "../ui/buttons/secondary-button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const activeClassName = (href: string) =>
        cn(
            "hover:text-white cursor-pointer transition",
            pathname === href ? "text-secondary font-semibold" : "text-gray-400"
        );

    return (
        <nav className="w-full bg-black text-white px-4 md:px-6 lg:px-0 lg:w-[95%] max-w-[1600px] mx-auto">
            <div className="py-3 flex items-center justify-between">

                {/* Logo */}
                <Logo className="w-12 md:w-14 xl:w-16" />

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-gray-300">
                    <Link className={activeClassName("/our-story")} href={"/our-story"}>Our Story</Link>
                    <Link className={activeClassName("/business-pricing")} href={"/business-pricing"}>Plans</Link>
                    <Link className={activeClassName("#")} href={"#"}>Services</Link>
                    <Link className={activeClassName("/faqs")} href={"/faqs"}>FAQ</Link>
                </ul>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href={"/signin"} className=" text-gray-300 hover:text-white">
                        Login
                    </Link>
                    <Link href={"/signup"} className="px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:opacity-90 transition">
                        Sign Up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden focus:outline-none"
                >
                    <div className="space-y-1">
                        <span className="block w-6 h-0.5 bg-white" />
                        <span className="block w-6 h-0.5 bg-white" />
                        <span className="block w-6 h-0.5 bg-white" />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-black border-t border-gray-800 absolute top-16 left-0 right-0">
                    <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-300">
                        <Link className={cn(activeClassName("/our-story"))} href={"/our-story"}>Our Story</Link>
                        <Link className={cn(activeClassName("/business-pricing"))} href={"/business-pricing"}>Plans</Link>
                        <Link className={cn(activeClassName("#"))} href={"#"}>Services</Link>
                        <Link className={cn(activeClassName("/faqs"))} href={"/faqs"}>FAQ</Link>

                        <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                            <Link href={"/signin"} className="text-left text-gray-300 hover:text-white">
                                Login
                            </Link>
                            <SecondaryButton>
                                <Link href={"/signup"} className="w-full rounded-lg bg-yellow-400 text-black font-semibold">
                                    Sign Up
                                </Link>
                            </SecondaryButton>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
}
