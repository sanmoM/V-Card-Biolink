"use client"

import PrimaryButton from "@/components/ui/buttons/primary-button";
import SocialButton from "@/components/ui/buttons/social-button";
import TextInput from "@/components/ui/inputs/text-input";
import SectionHeading from "@/components/shared/headings/section-heading";
import { FaGithub, FaGoogle } from "react-icons/fa";
import BlueCircle from "../../components/ui/background-images/blue-circle";
import YellowCircle from "../../components/ui/background-images/yellow-circle";
import Link from "next/link";
import Checkbox from "@/components/ui/inputs/checkbox";

export default function CreateAccountCard() {
    return (
        <div className="relative rounded-2xl p-0.5 bg-gradient-primary shadow-glow py-8 md:py-12 xl:py-20 md:h-screen flex justify-center items-center w-full overflow-hidden poppins">
            <div className="
  w-[90%] sm:w-[23%]
  sm:min-w-[400px]
  rounded-2xl
  px-6 py-8
  border border-[#FFD7004D]
  bg-[#0000000e]
  shadow-[0_0_50px_0_#FFD7004D]
  backdrop-blur-3xl
  relative z-20
">
                <SectionHeading
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                    }}
                    className="text-nowrap"

                >Welcome Back</SectionHeading>
                <p className="text-sm text-gray-400 text-center mt-2">
                    Sign in to access your dashboard
                </p>

                {/* Form */}
                <form className="mt-6 space-y-6">
                    <TextInput label="Email Address" placeholder="Enter your email" />
                    <TextInput label="Password" placeholder="Create a password" type="password" />

                    {/* Terms */}
                    <div className="flex items-start justify-between gap-2 text-sm text-gray-400">
                        <div className="flex items-start gap-2 text-sm text-gray-400">
                            <Checkbox checked={false} onChange={() => { }} />
                            <p>
                                Remember me
                            </p>
                        </div>
                        <p className="text-primary">Forgot password?</p>
                    </div>
                    <PrimaryButton className="text-black"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                        }}
                    >
                        Sign In
                    </PrimaryButton>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <div className="h-px bg-gray-700 flex-1" />
                    <span className=" text-gray-500">Or sign up with</span>
                    <div className="h-px bg-gray-700 flex-1" />
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <SocialButton label="Google" icon={<FaGoogle className="text-white" />} />
                    <SocialButton label="GitHub" icon={<FaGithub className="text-white" />} />
                </div>

                {/* Footer */}
                <p className="text-sm text-center text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <Link href={"/signup"} className="text-secondary cursor-pointer">Sign Up</Link>
                </p>
                <BlueCircle className="w-44 bottom-0 left-0 transform -translate-x-[40%] translate-y-[40%]" />
                <YellowCircle className="w-44 top-0 right-0 transform translate-x-[40%] -translate-y-[40%]" />

                <YellowCircle className="w-full left-0 top-0 -translate-y-[25%] -translate-x-[85%] lg:min-w-[500px] 2xl:min-w-[600px]" />

                <BlueCircle className="absolute w-full bottom-0 right-0 translate-y-[25%] translate-x-[87%] lg:min-w-[500px] 2xl:min-w-[600px]" />
            </div>
        </div>
    );
}


