"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import SectionHeading from "../shared/headings/section-heading";
import SubHeading from "../shared/headings/sub-heading";
import SecondaryButton from "../ui/buttons/secondary-button";
import Container from "../shared/container";
import YellowCircle from "../ui/background-images/yellow-circle";
import BlueCircle from "../ui/background-images/blue-circle";

type FaqItem = {
    question: string;
    answer: string;
};

const faqs: FaqItem[] = [
    {
        question: "How soon can I use my benefits?",
        answer:
            "You can start using your benefits immediately after signing up. All features are activated instantly.",
    },
    {
        question: "What is the best package for me?",
        answer:
            "The best package depends on your needs. Starter is great for individuals, Creator for content creators, and Business for teams.",
    },
    {
        question: "How many pages can I have?",
        answer:
            "You can create multiple pages depending on your selected plan. Higher plans offer unlimited pages.",
    },
    {
        question: "Can my account be suspended?",
        answer:
            "Accounts may be suspended if they violate our terms of service or acceptable use policy.",
    },
    {
        question: "Do you take mobile payment?",
        answer:
            "Yes, we support mobile payments through supported providers depending on your region.",
    },
    {
        question: "What are the requirements for partnership?",
        answer:
            "Partnership requirements vary. Please contact us directly to discuss partnership opportunities.",
    },
    {
        question: "How does your dropshipping service work?",
        answer:
            "Our dropshipping service allows you to list products while we handle storage, fulfillment, and shipping.",
    },
    {
        question: "How can I dropship my products to USA?",
        answer:
            "You can dropship to the USA by selecting supported shipping partners in your dashboard.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8 md:py-12 xl:py-20"
            style={{
                backgroundImage: "linear-gradient(0deg, #000000 0%, #111827 50%, #000000 100%)"
            }}
        >
            <Container>
                {/* Header */}
                <div className="mx-auto mb-6 md:mb-8 xl:mb-12 max-w-3xl text-center">
                    <SectionHeading className="mb-4 xl:mb-6 text-3xl md:text-5xl">
                        Frequently Asked Questions
                    </SectionHeading>
                    <SubHeading>Everything you need to know about our platform and services</SubHeading>
                </div>

                {/* FAQ List */}
                <div className="mx-auto max-w-3xl space-y-4 relative">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-xl border border-white/10 bg-white/5"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex w-full items-center justify-between p-4 md:p-6 text-left  cursor-pointer"
                                >
                                    <span className="text-sm md:text-lg font-medium text-white">
                                        {faq.question}
                                    </span>

                                    <span className="text-yellow-400">
                                        {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
                                    </span>
                                </button>

                                <div
                                    className={`grid overflow-hidden px-4 md:px-6 transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden text-gray-400">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-6 md:mt-10 xl:mt-14 text-center">
                    <p className="mb-4 text-gray-400 text-sm md:text-base">
                        Still have questions?
                    </p>
                    <SecondaryButton>
                        Contact Us
                        <span>→</span>
                    </SecondaryButton>
                </div>
            </Container>
        </section>
    );
}
