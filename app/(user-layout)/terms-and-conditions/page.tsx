
import MultiTextHeading from "@/components/shared/headings/multi-text-heading";
import SubHeading from "@/components/shared/headings/sub-heading";
import BlueCircle from "@/components/ui/background-images/blue-circle";
import YellowCircle from "@/components/ui/background-images/yellow-circle";
import { JSX } from "react";

export default function TermsAndConditions(): JSX.Element {
    return (
        <section className="py-8 md:py-12 xl:py-20 w-full px-4 md:px-6 lg:px-0 overflow-x-clip">
            {/* Header */}
            <div className="mx-auto mb-6 md:mb-8 xl:mb-10 max-w-7xl text-center">
                <MultiTextHeading text1="Terms and " text2="Conditions" text2Style={{
                    backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                }} className="text-3xl md:text-4xl" />
                <SubHeading>Last updated: January 2024</SubHeading>
            </div>

            {/* Content Card */}
            <div className="max-w-6xl space-y-10 relative z-[1] rounded-2xl border border-secondary/30 p-4 md:p-6 xl:p-8 shadow-[0_0_50px_0_#FFD70026]  lg:w-[95%] mx-auto ">
                <YellowCircle className="absolute top-[0] -translate-y-[50%] left-0 -translate-x-[50%] opacity-[0.7]" />
                <BlueCircle className="absolute bottom-[0] translate-y-[50%] right-0 translate-x-[50%] opacity-[0.7]" />
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                    Welcome to Madwess. These Terms and Conditions ("Terms") govern your use
                    of our website and services. By accessing or using our services, you
                    agree to be bound by these Terms. If you do not agree to these Terms,
                    please do not use our services.
                </p>

                <TermsSection title="1. Definitions">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            <strong>“Madwess”</strong> refers to Madwess, LLC, a marketing agency
                            that helps entrepreneurs and digital marketers automate operations
                            using modern tools and systems.
                        </li>
                        <li>
                            <strong>“Services”</strong> refers to the range of services offered
                            by Madwess, including marketing automation, web design, business
                            formation, registration, personal tax identification, and digital
                            courses.
                        </li>
                        <li>
                            <strong>“User”</strong> refers to any individual or entity using our
                            services.
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection title="2. Eligibility">
                    <p>
                        To use our services, you must be at least 18 years old and capable of
                        forming a binding contract. By using our services, you represent and
                        warrant that you meet these requirements.
                    </p>
                </TermsSection>

                <TermsSection title="3. Services">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            Madwess provides services to creators and businesses globally,
                            including in the United States, Africa, and other regions.
                        </li>
                        <li>Services may be provided both online and in person.</li>
                        <li>
                            We reserve the right to modify or discontinue any part of our
                            services at any time without prior notice.
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection title="4. User Responsibilities">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            Users agree to provide accurate and complete information when
                            registering.
                        </li>
                        <li>
                            Users are responsible for maintaining the confidentiality of their
                            account credentials.
                        </li>
                        <li>
                            Users must not use our services for any illegal or unauthorized
                            purpose.
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection title="5. Payments and Fees">
                    <ul className="list-disc space-y-2 pl-5">
                        <li>
                            Users agree to pay all applicable fees associated with the services.
                        </li>
                        <li>
                            Payments must be made according to the payment terms provided at
                            the time of purchase.
                        </li>
                        <li>
                            Madwess reserves the right to change fees at any time with prior
                            notice.
                        </li>
                    </ul>
                </TermsSection>

                <TermsSection title="6. Intellectual Property">
                    <p>
                        All content, trademarks, and intellectual property on our website
                        and services belong to Madwess or its licensors. Users may not
                        reproduce, distribute, or exploit any content without written
                        permission.
                    </p>
                </TermsSection>

                <TermsSection title="7. Limitation of Liability">
                    <p className="mb-2 font-semibold text-white">
                        No Liability for Indirect Damages
                    </p>
                    <p>
                        Madwess shall not be liable for indirect, incidental, special,
                        exemplary, punitive, or consequential damages arising from your use
                        of our services.
                    </p>

                    <p className="mt-4 font-semibold text-white">
                        Total Liability Cap
                    </p>
                    <p>
                        Madwess’s total liability shall not exceed the amount paid by the
                        user to Madwess in the twelve (12) months preceding the claim.
                    </p>
                </TermsSection>

                <TermsSection title="8. Indemnification">
                    <p>
                        Users agree to indemnify and hold harmless Madwess, its affiliates,
                        officers, employees, and agents from any claims, damages, losses,
                        liabilities, or expenses arising from misuse of the services or
                        violation of these Terms.
                    </p>
                </TermsSection>

                <TermsSection title="9. Third-Party Payment Processors">
                    <p>
                        Madwess uses third-party payment processors. We do not store or
                        directly handle your payment information. Users acknowledge and
                        agree that Madwess is not responsible for issues arising from these
                        third-party processors.
                    </p>
                </TermsSection>

                <TermsSection title="10. Termination">
                    <p>
                        We reserve the right to terminate or suspend access to our services
                        at any time for violations of these Terms. Provisions that should
                        survive termination shall remain in effect.
                    </p>
                </TermsSection>

                <TermsSection title="11. Governing Law">
                    <p>
                        These Terms shall be governed and construed in accordance with the
                        laws of the Commonwealth of Virginia, USA.
                    </p>
                </TermsSection>

                <TermsSection title="12. Changes to Terms">
                    <p>
                        We reserve the right to update these Terms at any time. Continued use
                        of our services constitutes acceptance of the revised Terms.
                    </p>
                </TermsSection>

                <TermsSection title="13. Contact Us">
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
                </TermsSection>

                {/* Acknowledgement */}
                <div className="mt-8 rounded-xl bg-secondary/10 p-4 text-center md:text-lg xl:text-xl text-gray-200">
                    By using our services, you acknowledge that you have read, understood,
                    and agree to be bound by these Terms and Conditions.
                </div>
            </div>
        </section>
    );
}

/* ---------- Section Component ---------- */

function TermsSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-white">
                {title}
            </h2>
            <div className="space-y-3 text-lg leading-relaxed text-gray-300">
                {children}
            </div>
        </div>
    );
}
