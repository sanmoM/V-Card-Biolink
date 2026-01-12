"use client";

import { JSX } from "react";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import MultiTextHeading from "../shared/headings/multi-text-heading";
import SubHeading from "../shared/headings/sub-heading";
import YellowCircle from "../ui/background-images/yellow-circle";
import PrimaryButton from "../ui/buttons/primary-button";
import TextAreaInput from "../ui/inputs/text-area-input";
import TextInput from "../ui/inputs/text-input";
import Container from "../shared/container";

export default function Contact(): JSX.Element {
    return (
        <section className="py-12 md:py-16 xl:py-20 relative">
            <Container>
                <YellowCircle className="absolute top-[60%] -translate-y-[50%] left-1/2 -translate-x-[50%] z-[-1] opacity-[0.5] w-[70%]" />
                {/* Header */}
                <div className="mb-6 md:mb-10 xl:mb-16 text-center">
                    <MultiTextHeading text1="Get In" text2="Touch" text2Style={{
                        backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                    }} />
                    <SubHeading>We’d love to hear from you</SubHeading>
                </div>

                {/* Content */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:gap-6 xl:gap-10 lg:grid-cols-2">
                    {/* Left Info Cards */}
                    <div className="space-y-6">
                        <InfoCard
                            icon={<HiEnvelope size={22} />}
                            title="Email Us"
                            value="Support@madwess.store"
                            accent="yellow"
                        />

                        <InfoCard
                            icon={<HiPhone size={22} />}
                            title="Call Us"
                            value="(804) 488-3517"
                            accent="blue"
                        />

                        <InfoCard
                            icon={<HiMapPin size={22} />}
                            title="Virtual Address"
                            value={
                                <>
                                    8401 Mayland Dr #7297 <br />
                                    Richmond, VA 23294
                                </>
                            }
                            accent="yellow"
                        />
                    </div>

                    {/* Form */}
                    <form className="rounded-2xl border border-yellow-400/20 p-4 md:p-6 xl:p-8 bg-[#00000066]">
                        <div className="space-y-5">
                            <TextInput label="Name" placeholder="" />
                            <TextInput label="Email" placeholder="" />
                            <TextInput label="Phone" placeholder="" />
                            <TextAreaInput label="Message" placeholder="" inputClassName="h-32 resize-none" />
                        </div>
                        <PrimaryButton className="text-black mt-4"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #FACC15 0%, #3B82F6 100%)"
                            }}
                        >
                            Send Message
                        </PrimaryButton>
                    </form>
                </div>
            </Container>
        </section>
    );
}

/* ---------- Sub Components ---------- */

function InfoCard({
    icon,
    title,
    value,
    accent,
}: {
    icon: JSX.Element;
    title: string;
    value: JSX.Element | string;
    accent: "yellow" | "blue";
}) {
    const style = {
        backgroundImage: accent === "yellow" ? "linear-gradient(135deg, #FACC15 0%, #3B82F6 100%)" : "linear-gradient(135deg, #38BDF8 0%, #FFD700 100%)",
        boxShadow: accent === "yellow" ? "0px 9px 6px 0px #EAB30880" : "0px 9px 6px 0px #3B82F680"

    }
    const accentStyles =
        accent === "yellow"
            ? "border-secondary/30"
            : "border-primary/30 ";

    return (
        <div className={`flex items-center gap-4 rounded-xl border p-4 md:p-6 bg-[#00000066] ${accentStyles}`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-current text-black"
                style={style}
            >
                {icon}
            </div>

            <div>
                <p className="text-sm font-semibold text-white">
                    {title}
                </p>
                <p className="text-xs text-gray-400">
                    {value}
                </p>
            </div>
        </div>
    );
}
