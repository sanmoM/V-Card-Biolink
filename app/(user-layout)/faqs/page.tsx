"use client";

import GradientText from "@/components/shared/headings/gradient-text";
import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import { JSX, useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

type FAQ = {
    question: string;
    answer: string;
};

type FAQGroup = {
    title: string;
    items: FAQ[];
};

const faqData: FAQGroup[] = [
    {
        title: "Getting Started",
        items: [
            {
                question: "How soon can I use my benefits?",
                answer:
                    "Most benefits are available immediately after signing up. However, some premium features may have a waiting list. You will be notified once you gain access.",
            },
            {
                question: "What is the best package for me?",
                answer:
                    "The best package depends on your goals. Starter is ideal for beginners, Creator for content creators, and Business for scaling teams.",
            },
            {
                question: "How many pages can I have?",
                answer:
                    "The number of pages depends on your plan. Higher-tier plans offer unlimited pages.",
            },
        ],
    },
    {
        title: "Account & Membership",
        items: [
            {
                question: "Can my account be suspended?",
                answer:
                    "Yes. Accounts may be suspended if they violate our terms of service or acceptable use policy.",
            },
            {
                question: "Do you take mobile payment?",
                answer:
                    "Yes, we support mobile payments depending on your region and payment provider.",
            },
        ],
    },
    {
        title: "Partnership Program",
        items: [
            {
                question: "What are the requirements for partnership?",
                answer:
                    "Partnership requirements vary. Please contact our support team for detailed eligibility information.",
            },
        ],
    },
    {
        title: "Dropshipping Services",
        items: [
            {
                question: "How does your dropshipping service work?",
                answer:
                    "We handle product sourcing, fulfillment, and shipping while you focus on marketing and sales.",
            },
            {
                question: "How can I dropship my products to USA?",
                answer:
                    "You can dropship to the USA using our approved shipping partners available in your dashboard.",
            },
        ],
    },
];

export default function FaqPage(): JSX.Element {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggle = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <section className="px-4 py-6 md:py-10 xl:py-20  w-full overflow-hidden">
            <div className="mx-auto mb-6 md:mb-10 xl:mb-16 max-w-3xl text-center">
                <MultiTextHeading text1="Frequently Asked" text2="Questions" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                }} />
                <SubHeading>Find answers to common questions about our platform, membership plans, and services</SubHeading>
            </div>

            {/* FAQ Content */}
            <div className="mx-auto max-w-7xl space-y-6 md:space-y-8 xl:space-y-12 relative">
                <YellowCircle className="absolute top-[0] -translate-y-[50%] left-0 -translate-x-[50%] opacity-[0.7] w-[50%]" />
                <BlueCircle className="absolute bottom-[0] right-0 translate-x-[50%] opacity-[0.7] w-[50%]" />
                {faqData.map((group, groupIndex) => (
                    <div key={groupIndex}>

                        <GradientText className="text-xl md:text-2xl xl:text-3xl font-bold leading-relaxed w-fit mb-2 md:mb-4 xl:mb-6"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                            }}

                        >{group.title}</GradientText>

                        <div className="space-y-4">
                            {group.items.map((faq, itemIndex) => {
                                const key = `${groupIndex}-${itemIndex}`;
                                const isOpen = openIndex === key;

                                return (
                                    <div
                                        key={key}
                                        className="rounded-xl border border-secondary/20"
                                    >
                                        <button
                                            onClick={() => toggle(key)}
                                            className="flex w-full cursor-pointer items-center justify-between p-4 md:p-6 text-left"
                                        >
                                            <span className="text-sm md:text-lg font-medium text-white">
                                                {faq.question}
                                            </span>

                                            <HiChevronDown
                                                className={`text-secondary transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                                size={18}
                                            />
                                        </button>

                                        <div
                                            className={`grid overflow-hidden px-6 transition-all duration-300 ${isOpen
                                                ? "grid-rows-[1fr] pb-5"
                                                : "grid-rows-[0fr]"
                                                }`}
                                        >
                                            <div className="overflow-hidden text-sm text-gray-400">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* CTA */}
                <div className="rounded-2xl border border-secondary/30 p-10 text-center shadow-[0_0_40px_0_#FFD70026]">
                    <MultiTextHeading text1="Still Have" text2="Questions?" text2Style={{
                        backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                    }} className="text-xl md:text-2xl xl:text-3xl" />
                    <SubHeading className="text-xs md:text-sm 2xl:text-base">Cannot find the answer you are looking for? Our support team is here
                        to help!</SubHeading>
                    <PrimaryButton className="text-black mt-6 w-fit px-8"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #FACC15 0%, #3B82F6 100%)"
                        }}
                    >
                        Contact Support
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
}
