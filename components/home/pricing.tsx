import { JSX } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import MultiTextHeading from "../shared/multi-text-heading";
import SubHeading from "../shared/sub-heading";
import Badge from "../ui/badge";
import YellowCircle from "../ui/background-images/yellow-circle";
import Container from "../shared/container";

type PricingCardProps = {
    title: string;
    subtitle: string;
    price: string;
    features: string[];
    button: string;
    badge?: string;
    highlighted?: boolean;
    style?: React.CSSProperties;
};

export default function Pricing(): JSX.Element {
    return (
        <div className="py-20 w-full overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)"
            }}
        >
            {/* Header */}
            <Container>
                <div className="mx-auto mb-10 xl:mb-16 max-w-4xl text-center relative">
                    <YellowCircle className="top-1/2 -translate-y-[50%] left-[10%] z-10 blur-[100px]" />
                    <Badge>Pricing</Badge>

                    <MultiTextHeading text1="Elevate Your" text2="Digital Presence" text2Style={{
                        backgroundImage: "linear-gradient(90deg, #FACC15 0%, #FEF08A 100%)"
                    }} />
                    <SubHeading>Our bio link is designed to grow with you. Whether you're taking your first step, building a brand, or scaling a company, we have a plan crafted to power your success.</SubHeading>

                    {/* Toggle */}
                    <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-400">
                        <span>Monthly</span>
                        <div className="flex h-6 w-12 items-center rounded-full bg-gray-700 px-1">
                            <div className="h-4 w-4 rounded-full bg-yellow-400" />
                        </div>
                        <span>Annually</span>
                    </div>
                </div>

                {/* Cards */}
                <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 md:gap-4 xl:gap-8 md:grid-cols-3">
                    <YellowCircle className="bottom-0 left-0 translate-x-[70%] translate-y-[30%] z-10 blur-[100px]" />
                    <PricingCard
                        title="Starter"
                        subtitle="Perfect for individuals taking their first step"
                        price="$20"
                        features={[
                            "Up to 10 biolinks",
                            "Basic link customization",
                            "QR code generator",
                            "Basic analytics dashboard",
                            "Mobile responsive design",
                            "Standard support",
                        ]}
                        button="Get Started"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.4) 100%)"
                        }}
                    />

                    <PricingCard
                        highlighted
                        badge="Most Popular"
                        title="Creator"
                        subtitle="Ideal for content creators building their brand"
                        price="$50"
                        features={[
                            "Everything in Starter",
                            "Unlimited biolinks",
                            "Advanced customization",
                            "Priority analytics",
                            "Custom domains",
                            "Email capture forms",
                            "Social media integration",
                            "Priority support",
                        ]}
                        button="Start Now"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(250, 204, 21, 0.2) 40%, rgba(17, 24, 39, 0.4) 100%)",
                            boxShadow: "0px 0px 40px 0px #FFD7004D",
                            backdropFilter: 'blur(4px)'

                        }}
                    />

                    <PricingCard
                        badge="Best Value"
                        title="Business"
                        subtitle="For growing businesses scaling their presence"
                        price="$80"
                        features={[
                            "Everything in Creator",
                            "Team collaboration (5 users)",
                            "Advanced analytics & insights",
                            "API access",
                            "White-label options",
                            "Custom integrations",
                            "Dedicated account manager",
                            "Premium support",
                        ]}
                        button="Start Now"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.4) 100%)"
                        }}
                    />
                </div>
            </Container>
        </div>
    );
}

function PricingCard({
    title,
    subtitle,
    price,
    features,
    button,
    badge,
    highlighted = false,
    style,
}: PricingCardProps): JSX.Element {
    return (
        <div
            className={`relative flex flex-col rounded-2xl p-4 xl:p-8 ${highlighted
                ? "border border-secondary shadow-[0_0_30px_0_#FFD70033]"
                : "border border-white/10"
                }`}
            style={style}
        >
            {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-semibold text-black">
                    {badge}
                </span>
            )}

            <h3
                className={`mb-1 text-xl font-semibold ${highlighted ? "text-yellow-400" : "text-white"
                    }`}
            >
                {title}
            </h3>

            <p className="mb-4 xl:mb-6 text-sm text-gray-400">{subtitle}</p>

            <div className="mb-4 xl:mb-6 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{price}</span>
                <span className="text-sm text-gray-400">/month</span>
            </div>

            <ul className="mb-8 space-y-2 xl:space-y-3 text-sm text-gray-300 grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <IoCheckmarkOutline className="mt-0.5 h-4 w-4 text-yellow-400" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full rounded-lg py-3 text-sm font-semibold transition ${highlighted
                    ? "bg-yellow-400 text-black hover:opacity-90"
                    : "border border-white/20 text-white hover:border-white/40"
                    }`}
            >
                {button}
            </button>
        </div>
    );
}
