import SectionHeading from '@/components/section-heading';
import Logo from '@/components/shared/logo';
import BlueCircle from '@/components/ui/background-images/blue-circle';
import YellowCircle from '@/components/ui/background-images/yellow-circle';
import React from 'react'

export default function page() {
  return (
    <div>
      <section
        style={{
          backgroundImage: "linear-gradient(135deg, #111827 0%, #000000 50%, #111827 100%)"
        }}
        className='h-[calc(100vh-89px)]'
      >
        <Hero />
      </section>
    </div>
  )
}

function Hero() {
  return (
    <section className="h-full text-white flex items-center justify-center px-6 relative z-[1] bg-transparent">
      <div className="max-w-4xl w-full text-center bg-transparent">

        {/* Logo */}
        <Logo className="w-20 sm:w-32 2xl:w-38 mx-auto mb-16" />

        <SectionHeading
          style={{
            backgroundImage: "linear-gradient(90deg, #FFD700 40%, #FFFFFF 50%, #0080FF 60%)"
          }}
          className='text-transparent text-7xl 2xl:text-8xl mb-16'
        >
          MADWESS
        </SectionHeading>

        {/* Tagline */}
        <p className="mt-4 text-lg sm:text-xl 2xl:text-3xl text-gray-300">
          Where{" "}
          <span className="text-secondary font-semibold">Innovation</span>{" "}
          Meets{" "}
          <span className="text-primary font-semibold">Excellence</span>
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-sm sm:text-base 2xl:text-xl">
          Transform your digital presence with cutting-edge solutions powered by
          next-generation technology
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cursor-pointer px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:opacity-90 transition">
            Explore Products
          </button>
          <button className="cursor-pointer px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition">
            Get Started
          </button>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard value="500+" label="Happy Clients" color="yellow" />
          <StatCard value="98%" label="Satisfaction Rate" color="blue" />
          <StatCard value="24/7" label="Support Available" color="yellow" />
        </div>
      </div>
      <YellowCircle className='z-20 top-[0%] left-[45%] -translate-x-[50%] w-[35%]' />
      <BlueCircle className='z-20 bottom-[8%] right-[40%] translate-x-[50%] w-[35%]' />
    </section>
  );
}

/* ---------- Reusable Stat Card ---------- */

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
      <p className="mt-2 text-sm 2xl:text-lg text-gray-400">{label}</p>
    </div>
  );
}

