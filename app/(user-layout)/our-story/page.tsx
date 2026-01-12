"use client";

import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SectionHeading from "@/components/shared/headings/section-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import { JSX } from "react";
import {
    HiGlobeAlt,
    HiHeart,
    HiLightBulb,
    HiSparkles,
    HiUsers,
} from "react-icons/hi2";

export default function OurStoryPage(): JSX.Element {
    return (
        <section className="px-4 py-8 md:py-12 xl:py-20 w-full overflow-hidden">
            {/* Header */}
            <div className="mx-auto mb-8 md:mb-10 xl:mb-16 max-w-3xl text-center">
                <MultiTextHeading text1="Our" text2="Story" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                }} />
                <SubHeading>A New Blueprint for Entrepreneurship</SubHeading>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-6xl space-y-10 relative z-[1] lg:w-[90%] mx-auto">
                <YellowCircle className="absolute top-[0] -translate-y-[50%] left-0 -translate-x-[50%] opacity-[0.7]" />
                <BlueCircle className="absolute bottom-[0] translate-y-[50%] right-0 translate-x-[50%] opacity-[0.7]" />
                {/* Card 1 */}
                <StoryCard
                    icon={<HiHeart size={24} />}
                    title="The Burden of the Hustle"
                    accent="yellow"
                >
                    <p>
                        Madwess, LLC was born not out of simple market research, but out of a
                        deep, personal necessity. Our founder, a mother, a wife, and an
                        entrepreneur, faced the overwhelming reality that plagues so many
                        in the online space: the relentless pressure of consistent social
                        media presence, the financial drain of ineffective marketing, and
                        the constant battle to find personal identity while building a
                        business.
                    </p>
                    <p>
                        After navigating and ultimately pausing efforts in industries from
                        e-commerce to beauty, it became clear that the current model of
                        online entrepreneurship was broken—it demanded too much physical
                        time and emotional energy. We realized the world needed a different
                        solution: a system that allows passion to drive profit, not
                        exhaustion.
                    </p>
                </StoryCard>

                {/* Card 2 */}
                <StoryCard
                    icon={<HiLightBulb size={24} />}
                    title="Our Vision: Automation and Abundance"
                    accent="blue"
                >
                    <p>
                        Madwess is a digital platform created to make life easier for
                        entrepreneurs, creators, influencers, and anyone seeking
                        sustainable online income. Our central goal is simple: financial
                        abundance through intelligent automation and reduced physical
                        effort.
                    </p>

                    <p>
                        We believe income streams should be customized based on your
                        background, passions, and what you genuinely love to do. By
                        harnessing artificial intelligence (AI), Madwess provides the
                        immersion necessary to make money effortlessly.
                    </p>

                    <div className="mt-6 space-y-4">
                        <Feature
                            icon={<HiSparkles size={24} />}
                            title="Faceless Content Creation"
                            description="Generate high-quality, engaging content without requiring your constant personal presence."
                        />
                        <Feature
                            icon={<HiUsers size={24} />}
                            title="Custom Income Streams"
                            description="Integrating TikTok monetization, affiliate programs, and tailored revenue avenues."
                        />
                        <Feature
                            icon={<HiHeart size={24} />}
                            title="Financial Freedom"
                            description="A baseline income already working for you, freeing you to live your life."
                        />
                    </div>
                </StoryCard>

                {/* Card 3 */}
                <StoryCard
                    icon={<HiGlobeAlt size={24} />}
                    title="Global Inclusion: Removing the Barriers"
                    accent="yellow"
                >
                    <p>
                        The need for economic inclusion is woven into the fabric of our
                        mission. In many developing countries—across Africa, Asia, and
                        Latin America—entrepreneurs face unnecessary barriers and lack the
                        “cheat codes” needed to tap into the global online market.
                    </p>

                    <p>
                        At Madwess, we are committed to dismantling those barriers. We are
                        creating a platform where geography does not dictate opportunity.
                        Anyone, from anywhere in the world, can create an account and build
                        a substantial income.
                    </p>
                </StoryCard>

                {/* Card 4 */}
                <StoryCard
                    icon={<HiUsers size={24} />}
                    title="The Ultimate Angle: Community and Ownership"
                    accent="blue"
                >
                    <p>
                        Our long-term vision extends beyond online revenue. We aim to create
                        a community where financial freedom translates into real-world
                        stability. Our housing initiative helps members overcome the high
                        cost of living that often prevents homeownership.
                    </p>

                    <p>
                        While we focus heavily on empowering African countries, we also
                        support American members through credit-building and business
                        funding guidance—helping them leverage business credit to achieve
                        personal financial goals.
                    </p>
                </StoryCard>

                {/* Closing Card */}
                <div className="rounded-2xl space-y-6 border border-yellow-400/30 p-4 lg:p-8 text-center shadow-[0_0_40px_0_#FFD70026]">
                    <SectionHeading
                        style={{
                            backgroundImage: "linear-gradient(90deg, #FACC15 30%, #3B82F6 70%)"
                        }}
                        className="text-3xl md:text-xl"
                    >
                        Welcome to Madwess
                    </SectionHeading>
                    <SubHeading>We are here to change your life by giving you the tools for high
                        income and the peace of mind to enjoy it.</SubHeading>
                </div>
            </div>
        </section>
    );
}

/* ---------- Components ---------- */

function StoryCard({
    icon,
    title,
    accent,
    children,
}: {
    icon: JSX.Element;
    title: string;
    accent: "yellow" | "blue";
    children: React.ReactNode;
}) {
    const accentStyles =
        accent === "yellow"
            ? "border-yellow-400/30 shadow-[0_0_40px_0_#FFD70026]"
            : "border-sky-400/30 shadow-[0_0_40px_0_#38BDF826]";

    const styles = {
        backgroundImage: accent === "yellow" ? "linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)" : "linear-gradient(135deg, #3B82F6 0%, #FACC15 100%)",
    };

    return (
        <div className={`rounded-2xl border p-6 lg:p-8 ${accentStyles}`}>
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-current"
                    style={styles}
                >
                    {icon}
                </div>
                <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-white">
                    {title}
                </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                {children}
            </div>
        </div>
    );
}

function Feature({
    icon,
    title,
    description,
}: {
    icon: JSX.Element;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-3">
            <div className="mt-1 text-yellow-400">{icon}</div>
            <div>
                <p className="font-semibold text-white">{title}</p>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
}
