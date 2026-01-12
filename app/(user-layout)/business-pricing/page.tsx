"use client";

import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import SecondaryButton from "@/components/ui/buttons/secondary-button";
import { JSX } from "react";
import { HiCheck } from "react-icons/hi2";

type Plan = {
    name: string;
    price: string;
    billing: string;
    description: string;
    features: string[];
};

const plans: Plan[] = [
    {
        name: "Starter",
        price: "$199",
        billing: "/month",
        description:
            "Perfect for individuals just getting started with their business journey.",
        features: [
            "LLC Formation",
            "State fee paid separately",
            "Fastest 1-day processing",
            "100% accuracy guarantee",
            "Ongoing compliance alerts",
            "Operating agreement template",
            "Business document templates",
            "Email support",
        ],
    },
    {
        name: "Professional",
        price: "$399",
        billing: "/month",
        description:
            "Ideal for creators and professionals building their brand with comprehensive support.",
        features: [
            "Everything in Starter",
            "Registered agent service (1 year)",
            "EIN application assistance",
            "Business advisor consultation",
            "Compliance calendar",
            "Annual report filing",
            "Priority email support",
            "Phone support",
        ],
    },
    {
        name: "Business Credit",
        price: "$699",
        billing: "/one-time",
        description:
            "Complete business structure bundle with credit-building tools for serious entrepreneurs.",
        features: [
            "Everything in Professional",
            "Business address (1 year)",
            "Business phone number",
            "Professional email setup",
            "Business bank account setup",
            "DUNS number registration",
            "Google Business Profile setup",
            "Business credit roadmap",
            "Vendor account setup guidance",
            "Invoicing tools access",
            "Dedicated account manager",
        ],
    },
];

export default function BusinessFormationPage(): JSX.Element {
    return (
        <section className="px-4 md:px-6 py-8 md:py-12 xl:py-20 w-full overflow-hidden">
            {/* Header */}
            <div className="mx-auto mb-6 md:mb-10 xl:mb-16 max-w-3xl text-center relative">
                <MultiTextHeading text1="Business" text2="Formation" text2Style={{
                    backgroundColor: "#FFD700"
                }} />
                <SubHeading>
                    Getting started is simple: choose the business formation type that's right for you. From there, our team takes over to professionally draft and assemble your entire corporate profile—ensuring every detail is structured for success.
                </SubHeading>
                <YellowCircle className="absolute top-1/2 -translate-y-[40%] left-0 -translate-x-[60%] opacity-[0.7] w-full" />
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
                <YellowCircle className="absolute bottom-1/2 translate-y-[70%] right-[-10%] opacity-[0.4]" />
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-2xl border border-secondary/20 p-4 lg:p-8 shadow-[0_0_40px_0_#FFD70026]"
                    >
                        <h3 className="mb-2 text-xl font-semibold text-white text-center">
                            {plan.name}
                        </h3>

                        <div className="mb-2 flex items-start justify-center w-full gap-1">
                            <span className="text-4xl font-bold text-secondary">
                                {plan.price}
                            </span>
                            <span className="text-sm text-gray-400">
                                {plan.billing}
                            </span>
                        </div>

                        <p className="mb-6 text-sm text-gray-400 text-center">
                            {plan.description}
                        </p>

                        <ul className="mb-8 space-y-3 text-sm text-gray-300">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <HiCheck className="mt-0.5 text-secondary" size={16} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <SecondaryButton className="mt-auto w-full block">
                            Get Started
                        </SecondaryButton>
                    </div>
                ))}
            </div>
        </section>
    );
}
