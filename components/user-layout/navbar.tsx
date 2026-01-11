"use client";

import { useState } from "react";
import Logo from "../shared/logo";
import Link from "next/link";
import SecondaryButton from "../ui/buttons/secondary-button";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-black text-white">
            <div className="py-3 flex items-center justify-between">

                {/* Logo */}
                <Logo className="w-16 lg:w-20" />

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-gray-300">
                    <li className="hover:text-white cursor-pointer">Our Story</li>
                    <li className="hover:text-white cursor-pointer">Plans</li>
                    <li className="hover:text-white cursor-pointer">Services</li>
                    <li className="hover:text-white cursor-pointer">FAQ</li>
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
                <div className="md:hidden bg-black border-t border-gray-800">
                    <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-gray-300">
                        <li className="hover:text-white">Our Story</li>
                        <li className="hover:text-white">Plans</li>
                        <li className="hover:text-white">Services</li>
                        <li className="hover:text-white">FAQ</li>

                        <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                            <Link href={"/signin"} className="text-left text-gray-300 hover:text-white">
                                Login
                            </Link>
                            <SecondaryButton>
                                <Link href={"/signup"} className="w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold">
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
