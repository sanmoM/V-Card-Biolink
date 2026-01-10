import PrimaryButton from "@/components/buttons/primary-button";
import SocialButton from "@/components/buttons/social-button";
import TextInput from "@/components/inputs/text-input";
import SectionHeading from "@/components/section-heading";
import { FaGithub, FaGoogle } from "react-icons/fa";
import BlueCircle from "../../components/background-images/blue-circle";
import YellowCircle from "../../components/background-images/yellow-circle";
import Link from "next/link";

export default function CreateAccountCard() {
    return (
        <div className="relative rounded-2xl p-0.5 bg-gradient-primary shadow-glow py-20 2xl:h-screen flex justify-center items-center w-full overflow-hidden">
            <div className="
  w-[90%] sm:w-[23%]
  sm:min-w-[400px]
  rounded-2xl
  px-6 py-8
  border border-[#0080FF4D]
  bg-[#0000000e]
  shadow-[0_0_50px_0_#0080FF4D]
  backdrop-blur-3xl
  relative z-20
">
                <SectionHeading
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FFD700 0%, #0080FF 100%)"
                    }}
                    className="text-nowrap"

                >Create Account</SectionHeading>
                <p className="text-sm text-gray-400 text-center mt-2">
                    Join Madwess and start your journey
                </p>

                {/* Form */}
                <form className="mt-6 space-y-6">
                    <TextInput label="Full Name" placeholder="Enter your full name" />
                    <TextInput label="Email Address" placeholder="Enter your email" />
                    <TextInput label="Password" placeholder="Create a password" type="password" />
                    <TextInput label="Confirm Password" placeholder="Confirm your password" type="password" />

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm text-gray-400">
                        <input type="checkbox" className="mt-1 accent-yellow-400 bg-black" />
                        <p>
                            I agree to the{" "}
                            <span className="text-yellow-400 cursor-pointer">Terms of Service</span>{" "}
                            and{" "}
                            <span className="text-yellow-400 cursor-pointer">Privacy Policy</span>
                        </p>
                    </div>
                    <PrimaryButton>
                        Create Account
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
                    Already have an account?{" "}
                    <Link href={"/signin"} className="text-primary cursor-pointer">Sign In</Link>
                </p>
                <BlueCircle className="w-44 top-0 left-0 transform -translate-x-[40%] -translate-y-[40%]" />
                <YellowCircle className="w-44 bottom-0 right-0 transform translate-x-[40%] translate-y-[40%]" />

                <YellowCircle className="w-full left-0 bottom-0 translate-y-[25%] -translate-x-[85%] lg:min-w-[500px] 2xl:min-w-[600px]" />

                <BlueCircle className="absolute w-full top-0 right-0 -translate-y-[25%] translate-x-[87%] lg:min-w-[500px] 2xl:min-w-[600px]" />
            </div>
        </div>
    );
}


