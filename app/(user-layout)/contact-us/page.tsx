import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import SelectInput from "@/components/ui/inputs/select-input";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import { JSX } from "react";
import {
    HiChevronRight,
    HiClock,
    HiEnvelope,
    HiPhone,
} from "react-icons/hi2";

export default function SupportCenterPage(): JSX.Element {
    return (
        <section className="py-6 md:py-10 xl:py-20 w-full overflow-x-clip px-4 md:px-6 lg:px-0">
            {/* Header */}
            <div className="mx-auto mb-6 md:mb-10 xl:mb-16 max-w-3xl text-center">
                <MultiTextHeading text1="Support " text2="Center" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                }} />
                <SubHeading
                className="w-[95%] mx-auto"
                >We are here to help! Send us a message and our team will get back to you
                    as soon as possible</SubHeading>
            </div>

            {/* Content */}
            <div className="grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 relative lg:w-[95%] mx-auto">
                <YellowCircle className="absolute top-[0] -translate-y-[50%] left-0 -translate-x-[50%] opacity-[0.7]" />
                <BlueCircle className="absolute bottom-[0] translate-y-[50%] right-0 translate-x-[50%] opacity-[0.7]" />
                {/* LEFT */}
                <div className="space-y-6">
                    {/* Get In Touch */}
                    <div className="rounded-2xl border border-secondary/20 p-8 shadow-[0_0_40px_0_#FFD70026]">
                        <h2 className="mb-2 text-xl font-semibold text-white">
                            Get In Touch
                        </h2>
                        <p className="mb-6 text-sm text-gray-400">
                            Have a question or need assistance? Our support team is ready to
                            help you succeed.
                        </p>

                        <InfoRow
                            icon={<HiEnvelope />}
                            title="Email Us"
                            value="Support@madwess.store"
                            accent="yellow"
                        />
                        <InfoRow
                            icon={<HiPhone />}
                            title="Call Us"
                            value="(804) 488-3517"
                            accent="blue"
                        />
                        <InfoRow
                            icon={<HiClock />}
                            title="Response Time"
                            value="We typically respond within 24 hours on business days"
                            accent="yellow"
                        />
                    </div>

                    {/* Quick Links */}
                    <div className="rounded-2xl border border-white/10 p-8">
                        <h2 className="mb-4 text-xl font-semibold text-white">
                            Quick Links
                        </h2>

                        <ul className="space-y-3 text-sm text-gray-400">
                            <QuickLink text="Frequently Asked Questions" />
                            <QuickLink text="Terms and Conditions" />
                            <QuickLink text="Return Policy" />
                        </ul>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form className="rounded-2xl border border-secondary/30 p-8 shadow-[0_0_40px_0_#FFD70026]">
                    <h2 className="mb-6 text-xl font-semibold text-white">
                        Send Us a Message
                    </h2>

                    <div className="space-y-5">
                        <TextInput label="Name" placeholder="Enter your name" />
                        <TextInput label="Email" placeholder="Enter your email" type="email" />
                        <SelectInput label="Category" options={[
                            { label: "Select a category", value: "" },
                            { label: "Technical Support", value: "technical-support" },
                            { label: "Billing", value: "billing" },
                            { label: "General Inquiry", value: "general-inquiry" },
                        ]} />

                        <TextInput label="Subject" placeholder="Enter your subject" />

                        <TextAreaInput label="Message" placeholder="Enter your message" inputClassName="h-32 resize-none" />
                    </div>
                    <PrimaryButton className="text-black mt-6"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #FACC15 0%, #3B82F6 100%)"
                        }}
                    >
                        Send Message
                    </PrimaryButton>
                </form>
            </div>
        </section>
    );
}

/* ---------- Components ---------- */

function InfoRow({
    icon,
    title,
    value,
    accent,
}: {
    icon: JSX.Element;
    title: string;
    value: string;
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
        <div className="mb-4 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-current text-black"
                style={style}
            >
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-gray-400">{value}</p>
            </div>
        </div>
    );
}

function QuickLink({ text }: { text: string }) {
    return (
        <li className="flex cursor-pointer items-center gap-2 hover:text-white">
            <HiChevronRight className="text-secondary" />
            {text}
        </li>
    );
}

function Input({
    label,
    type = "text",
    required,
}: {
    label: string;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="mb-1 block text-sm text-white">
                {label} {required && "*"}
            </label>
            <input
                type={type}
                className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white focus:border-secondary focus:outline-none"
            />
        </div>
    );
}
