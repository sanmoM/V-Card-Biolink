"use client";

import { JSX } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import Container from "../shared/container";
import Logo from "../shared/logo";
import { cn } from "@/utils/cn";

export default function Footer(): JSX.Element {
    return (
        <footer className="px-4 pt-20">
            <Container>
                {/* Top Footer */}
                <div className="grid md:grid-cols-2 lg:grid-cols-[20%_67%] gap-10 md:gap-20 lg:gap-0 justify-between text-center md:text-left">
                    {/* Brand */}
                    <div className="mx-auto md:mx-0">
                        <Logo className="w-20 mx-auto md:mx-0" />

                        <p className="mb-6 text-sm leading-relaxed text-gray-400">
                            Empowering businesses with innovative solutions and exceptional service.
                        </p>

                        <div className="flex justify-center gap-3 md:justify-start">
                            <SocialIcon icon={<FaFacebookF />}
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)"
                                }}
                            />
                            <SocialIcon icon={<FaTwitter />}
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #3B82F6 0%, #FACC15 100%)"
                                }}
                            />
                            <SocialIcon icon={<FaInstagram />}
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)"
                                }}
                            />
                            <SocialIcon icon={<FaLinkedinIn />}
                                style={{
                                    backgroundImage: "linear-gradient(135deg, #3B82F6 0%, #FACC15 100%)"
                                }}
                            />
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-sm md:max-w-none lg:hidden">
                        <h4 className="mb-4 text-lg font-semibold text-yellow-400">
                            Newsletter
                        </h4>

                        <p className="mb-4 text-sm text-gray-400">
                            Subscribe to get the latest updates and offers.
                        </p>

                        <input
                            type="email"
                            placeholder="Your email"
                            className="mb-3 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                        />

                        <button className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-sky-500 py-3 text-sm font-semibold text-black hover:opacity-90">
                            Subscribe
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="grid md:col-span-2 lg:col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 lg:gap-0">
                        <FooterColumn title="Quick Links">
                            <FooterLink>Our Story</FooterLink>
                            <FooterLink>Plans</FooterLink>
                            <FooterLink>Services</FooterLink>
                            <FooterLink>FAQ</FooterLink>
                            <FooterLink>Features</FooterLink>
                        </FooterColumn>

                        {/* Legal */}
                        <FooterColumn title="Legal">
                            <FooterLink>Terms and Conditions</FooterLink>
                            <FooterLink>Privacy and Return Policy</FooterLink>
                            <FooterLink>Support</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                        </FooterColumn>

                        {/* Newsletter */}
                        <div className="mx-auto w-full max-w-sm md:max-w-none hidden lg:block">
                            <h4 className="mb-4 text-lg font-semibold text-yellow-400">
                                Newsletter
                            </h4>

                            <p className="mb-4 text-sm text-gray-400">
                                Subscribe to get the latest updates and offers.
                            </p>

                            <input
                                type="email"
                                placeholder="Your email"
                                className="mb-3 w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-yellow-400 focus:outline-none"
                            />

                            <button className="w-full rounded-lg bg-gradient-to-r from-yellow-400 to-sky-500 py-3 text-sm font-semibold text-black hover:opacity-90">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 lg:my-12 border-t border-white/10" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center gap-4 pb-6 text-center text-sm text-gray-400 md:flex-row md:justify-between md:text-left">
                    <p>
                        © 2024 Madwess. All rights reserved. | Powered by Readdy
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

/* ---------- Sub Components ---------- */

function FooterColumn({
    title,
    children,
    className,
}: {
    title: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={className}>
            <h4 className="mb-4 text-lg font-semibold text-yellow-400">
                {title}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
                {children}
            </ul>
        </div>
    );
}

function FooterLink({ children }: { children: React.ReactNode }) {
    return (
        <li>
            <a href="#" className="transition hover:text-white">
                {children}
            </a>
        </li>
    );
}

function SocialIcon({ icon, style }: { icon: JSX.Element; style?: React.CSSProperties }) {
    return (
        <a
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-400 to-sky-500 text-black transition hover:opacity-90"
            style={style}
        >
            {icon}
        </a>
    );
}
