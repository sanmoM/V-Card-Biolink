import { cn } from "@/utils/cn";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoBarChartOutline, IoColorPaletteOutline, IoQrCodeOutline } from "react-icons/io5";
import BlueCircle from "../ui/background-images/blue-circle";
import Badge from "../ui/badge";
import MultiTextHeading from "../shared/headings/multi-text-heading";
import SubHeading from "../shared/headings/sub-heading";
import Container from "../shared/container";

export default function Features() {
    return (
        <div className="py-16"
            style={{
                backgroundImage: "linear-gradient(0deg, #000000 0%, #111827 50%, #000000 100%)"
            }}
        >
            <Container>
                {/* Header */}
                <div className="mx-auto mb-6 md:mb-10 xl:mb-16 2xl:mb-20 max-w-2xl text-center  relative z-[1]">
                    <BlueCircle className="absolute top-1/2  -translate-y-[50%] -left-[30%] z-20 mix-blend-exclusion w-full" />
                    <Badge>Features</Badge>
                    <MultiTextHeading text1="Powerful" text2="Features" text2Style={{
                        backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                    }} />
                    <SubHeading>Everything you need to create, customize, and optimize your biolink presence</SubHeading>
                </div>

                {/* Grid */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn("rounded-xl p-8", feature.containerClassName)}
                        >
                            <div className={cn("mb-5 flex h-14 w-14  backdrop-blur-3xl  items-center justify-center rounded-lg text-yellow-400", feature.iconClassName)}>
                                <feature.icon size={28} />
                            </div>

                            <h3 className="mb-2 text-2xl font-semibold text-white">
                                {feature.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

const features = [
    {
        title: "Unlimited Links",
        description:
            "Add as many links as you need to showcase all your content, products, and services in one place.",
        icon: FiLink,
        iconClassName: "shadow-[0px_0px_30px_0px_#FFD7004D] text-secondary bg-[#FFD7001A]",
        containerClassName: "border border-secondary/30"
    },
    {
        title: "Custom Branding",
        description:
            "Personalize your biolink with custom colors, fonts, backgrounds, and your own logo.",
        icon: IoColorPaletteOutline,
        iconClassName: "shadow-[0px_0px_30px_0px_#0080FF4D] text-primary bg-[#0080FF1A]",
        containerClassName: "border border-primary/30"
    },
    {
        title: "Advanced Analytics",
        description:
            "Track clicks, views, and engagement with detailed analytics.",
        icon: IoBarChartOutline,
        iconClassName: "shadow-[0px_0px_30px_0px_#FFD7004D] text-secondary bg-[#FFD7001A]",
        containerClassName: "border border-secondary/30"
    },
    {
        title: "Mobile Optimized",
        description:
            "Your biolink looks perfect on all devices with responsive design.",
        icon: HiOutlineDevicePhoneMobile,
        iconClassName: "shadow-[0px_0px_30px_0px_#0080FF4D] text-primary bg-[#0080FF1A]",
        containerClassName: "border border-primary/30"
    },
    {
        title: "QR Code Generator",
        description:
            "Generate custom QR codes for your biolinks to make offline sharing easy.",
        icon: IoQrCodeOutline,
        iconClassName: "shadow-[0px_0px_30px_0px_#FFD7004D] text-secondary bg-[#FFD7001A]",
        containerClassName: "border border-secondary/30"
    },
    {
        title: "Custom Domains",
        description:
            "Use your own domain name for a professional branded experience.",
        icon: AiOutlineGlobal,
        iconClassName: "shadow-[0px_0px_30px_0px_#0080FF4D] text-primary bg-[#0080FF1A]",
        containerClassName: "border border-primary/30"
    },
];