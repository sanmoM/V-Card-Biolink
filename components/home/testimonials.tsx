"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import MultiTextHeading from "../shared/headings/multi-text-heading";
import SubHeading from "../shared/headings/sub-heading";
import YellowCircle from "../ui/background-images/yellow-circle";
import Badge from "../ui/badge";
import Container from "../shared/container";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        quote:
            "The Starter plan was perfect for me to begin my biolink journey. I can manage up to 10 biolinks easily and the interface is so intuitive. It's completely free and has everything I need to get started!",
        name: "Sarah Johnson",
        role: "Content Creator · Starter Plan",
        rating: 5,
    },
    {
        quote:
            "Switching to Madwess completely transformed how I share my links. The customization options are incredible and analytics help me grow faster.",
        name: "Alex Morgan",
        role: "Digital Marketer · Creator Plan",
        rating: 5,
    },
    {
        quote:
            "The Business plan gives our team everything we need. Collaboration, analytics, and custom domains make it a no-brainer for scaling.",
        name: "David Lee",
        role: "Founder · Business Plan",
        rating: 5,
    },
];

export default function Testimonials(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <Container className="py-8 md:py-12 xl:py-20 relative">
            <YellowCircle className="absolute top-[60%] -translate-y-[50%] left-1/2 -translate-x-[50%] z-[-1] blur-[100px] w-[40%]" />
            {/* Header */}
            <div className="mx-auto mb-4 md:mb-8 xl:mb-14 max-w-3xl text-center">
                <Badge>Testimonials</Badge>
                <MultiTextHeading text1="What Our" text2="Clients Says" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                }} />

                {/* <p className="text-sm leading-relaxed text-gray-400">
                    Join thousands of satisfied customers who trust Madwess for their success
                </p> */}
                <SubHeading>Join thousands of satisfied customers who trust Madwess for their success</SubHeading>
            </div>

            {/* Slider */}
            <div className="relative mx-auto max-w-3xl overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 rounded-2xl border border-yellow-400/30 p-4 md:p-6 xl:p-10 shadow-[0_0_40px_0_#FFD70026] bg-blend-overlay"
                            style={{
                                backgroundImage: "linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.6) 100%)"
                            }}
                        >
                            <p className="mb-6 md:text-lg xl:text-xl leading-relaxed text-gray-200 relative">
                                <Image
                                    src={"/images/quote.png"}
                                    alt="Quote"
                                    width={500}
                                    height={500}
                                    className="w-8 absolute top-0 -left-2 md:-left-4"
                                />
                                {item.quote}
                            </p>

                            {/* Stars */}
                            <div className="mb-6 flex gap-1">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <IoIosStar
                                        key={i}
                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full border border-yellow-400/50" />

                                <div>
                                    <p className=" font-semibold text-white">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-primary">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="mt-4 md:mt-6 xl:mt-10 flex items-center justify-center gap-6">
                <button
                    onClick={prevSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10"
                >
                    <HiArrowSmallLeft size={18} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`cursor-pointer rounded-full transition-all ${i === activeIndex
                                ? "h-2 w-6 bg-yellow-400"
                                : "h-2 w-2 bg-gray-500"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10"
                >
                    <HiArrowSmallLeft size={18} className="rotate-180" />
                </button>
            </div>
        </Container>
    );
}
