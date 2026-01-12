import SectionHeading from '@/components/shared/headings/section-heading';
import Logo from '@/components/shared/logo';
import BlueCircle from '@/components/ui/background-images/blue-circle';
import YellowCircle from '@/components/ui/background-images/yellow-circle';
import { CgMouse } from 'react-icons/cg';
import SubHeading from '../shared/headings/sub-heading';

export default function Hero() {
    return (
        <section className="xl:h-[calc(100vh-89px)] text-white flex items-center justify-center px-4 md:px-6 relative z-[1] bg-transparent w-full py-10 xl:py-0"
            style={{
                backgroundImage: "linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)"
            }}
        >
            <div className="max-w-4xl w-full text-center bg-transparent">

                {/* Logo */}
                <Logo className="w-20 md:w-24 xl:w-28 mx-auto" />

                <SectionHeading
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FFD700 40%, #FFFFFF 50%, #0080FF 60%)"
                    }}
                    className='text-transparent text-6xl xl:text-8xl my-4 xl:my-10'
                >
                    MADWESS
                </SectionHeading>

                {/* Tagline */}
                <p className="mt-4 mb-4 md:mb-6 xl:mb-7 text-lg md:text-xl xl:text-2xl text-gray-300">
                    Where{" "}
                    <span className="text-secondary font-semibold">Innovation</span>{" "}
                    Meets{" "}
                    <span className="text-primary font-semibold">Excellence</span>
                </p>
                <SubHeading className='mb-4 xl:mb-8 2xl:mb-10 md:w-[70%] mx-auto'>Transform your digital presence with cutting-edge solutions powered by next-generation technology</SubHeading>

                {/* CTA Buttons */}
                <div className="xl:mt-6 2xl:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="cursor-pointer px-8 py-2 xl:py-3 rounded-full bg-yellow-400 text-black font-semibold hover:opacity-90 transition shadow-[0px_0px_30px_0px_#FFD70099]">
                        Explore Products
                    </button>
                    <button className="cursor-pointer px-8 py-2 xl:py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition">
                        Get Started
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-8 xl:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <StatCard value="500+" label="Happy Clients" color="yellow" />
                    <StatCard value="98%" label="Satisfaction Rate" color="blue" />
                    <StatCard value="24/7" label="Support Available" color="yellow" />
                </div>
                <CgMouse className='text-secondary text-4xl block mx-auto mt-8' />
            </div>
            <YellowCircle className='z-[-1] top-[0%] left-[45%] xl:left-[42%] -translate-x-[50%] w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[35%]' />
            <BlueCircle className='z-[-1] top-0 md:top-auto md:bottom-[28%] xl:bottom-[20%] right-[13%] lg:right-[20%] xl:right-[40%] xl:translate-x-[50%] w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[35%]' />
        </section>
    );
}

function StatCard({
    value,
    label,
    color,
}: {
    value: string;
    label: string;
    color: "yellow" | "blue";
}) {
    return (
        <div className="rounded-xl border border-secondary/30 bg-black px-6 py-6 text-center"
            style={{
                backgroundImage: "linear-gradient(135deg, rgba(31, 41, 55, 0.5) 0%, rgba(17, 24, 39, 0.5) 100%)"
            }}
        >
            <div
                className={`text-3xl 2xl:text-4xl font-bold ${color === "yellow" ? "text-secondary" : "text-primary"
                    }`}

            >
                {value}
            </div>
            <p className="mt-2 text-sm text-gray-400 font-normal">{label}</p>
        </div>
    );
}