import GradientText from "@/components/shared/headings/gradient-text";
import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import { JSX } from "react";

export default function PrivacyAndReturnPolicyPage(): JSX.Element {
    return (
        <section className="px-4 py-6 md:py-10 xl:py-20">
            {/* Header */}
            <div className="mx-auto mb-10 max-w-7xl text-center">
                <MultiTextHeading text1="Privacy and " text2="Return Policy" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                }} className="text-4xl" />
                <SubHeading>Last updated: January 2024</SubHeading>
            </div>

            {/* Content Card */}
            <div className="mx-auto max-w-7xl relative rounded-2xl border border-secondary/30 p-8 shadow-[0_0_50px_0_#FFD70026]">
                <YellowCircle className="absolute top-[0] -translate-y-[50%] left-0 -translate-x-[50%] opacity-[0.7]" />
                <BlueCircle className="absolute bottom-[0] translate-y-[50%] right-0 translate-x-[50%] opacity-[0.7]" />
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                    At Madwess, we value your privacy and are committed to protecting your
                    personal information. This Privacy and Return Policy outlines how we
                    collect, use, and safeguard your information, as well as our return
                    policy for services and digital products.
                </p>

                <GradientText className="mb-6 text-3xl font-bold leading-relaxed"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                    }}

                >Privacy Policy</GradientText>

                <PolicySection title="1. Information We Collect">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            <strong>Personal Information:</strong> Name, email address, phone
                            number, payment details, and government identification (when
                            required for payment processing).
                        </li>
                        <li>
                            <strong>Usage Data:</strong> IP address, browser type, pages
                            visited, and interactions with our website. All sensitive data is
                            encrypted and never shared with third parties.
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection title="2. How We Use Your Information">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            <strong>Service Provision:</strong> To deliver, improve, and manage
                            our services and communicate with you.
                        </li>
                        <li>
                            <strong>Business Purposes:</strong> Marketing, analytics, and
                            service enhancements.
                        </li>
                        <li>
                            <strong>No Third-Party Access:</strong> We do not sell or transfer
                            your personal information to external parties.
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection title="3. Data Security">
                    <p>
                        We implement industry-standard security measures to protect your
                        personal information. However, no method of transmission over the
                        internet or electronic storage is 100% secure.
                    </p>
                </PolicySection>

                <PolicySection title="4. Cookies and Tracking Technologies">
                    <p>
                        We use cookies and similar technologies to understand user behavior,
                        save preferences, and analyze site traffic for improved performance.
                    </p>
                </PolicySection>

                <PolicySection title="5. Your Rights">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            <strong>Access and Correction:</strong> You may request access to
                            or correction of your personal information.
                        </li>
                        <li>
                            <strong>Opt-Out:</strong> You may unsubscribe from marketing
                            communications at any time.
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection title="6. Changes to the Privacy Policy">
                    <p>
                        We reserve the right to update this Privacy Policy at any time.
                        Changes will be posted on this page and effective immediately.
                    </p>
                </PolicySection>

                <GradientText className="mb-6 text-3xl font-bold leading-relaxed"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FACC15 40%, #3B82F6 60%)"
                    }}

                >Return Policy</GradientText>
                <PolicySection title="1. No Returns on Services and Digital Products (Including Courses)">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            <strong>Services:</strong> All services provided by Madwess are
                            non-refundable once purchased.
                        </li>
                        <li>
                            <strong>Digital Products & Courses:</strong> Once accessed or
                            downloaded, digital products and courses cannot be returned or
                            refunded.
                        </li>
                    </ul>
                </PolicySection>

                <PolicySection title="2. Exceptions">
                    <p>
                        There are no exceptions to our no-return policy. We encourage you to
                        review all offerings and contact us with questions before making a
                        purchase.
                    </p>
                </PolicySection>

                <PolicySection title="3. Dispute Resolution">
                    <p>
                        If you are dissatisfied with a service or product, please contact
                        our support team at{" "}
                        <span className="text-secondary">Support@madwess.store</span>.
                        While we do not offer refunds, we are committed to addressing your
                        concerns.
                    </p>
                </PolicySection>

                <PolicySection title="4. Contact Us">
                    <div className="rounded-xl border border-secondary/10 p-4 text-sm text-gray-300">
                        <p>
                            <strong>Email:</strong>{" "}
                            <span className="text-secondary">
                                Support@madwess.store
                            </span>
                        </p>
                        <p>
                            <strong>Phone:</strong>{" "}
                            <span className="text-secondary">(804) 488-3517</span>
                        </p>
                        <p>
                            <strong>Address:</strong> 8401 Mayland Dr #7297, Richmond, VA 23294
                        </p>
                    </div>
                </PolicySection>

                {/* Acknowledgement */}
                {/* Acknowledgement */}
                <div className="mt-8 rounded-xl bg-secondary/10 p-4 text-center text-xl text-gray-200">
                    By using our services, you acknowledge that you have read, understood,
                    and agree to be bound by these Terms and Conditions.
                </div>
            </div>
        </section>
    );
}

/* ---------- Reusable Components ---------- */

function SectionHeader({ title }: { title: string }) {
    return (
        <h2 className="my-6 text-center text-xl font-bold text-secondary">
            {title}
        </h2>
    );
}

function PolicySection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-white">
                {title}
            </h3>
            <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                {children}
            </div>
        </div>
    );
}
