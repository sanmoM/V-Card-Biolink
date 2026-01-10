function SocialButton({ label, icon }: { label: string, icon: React.ReactNode }) {
    return (
        <button className="flex items-center justify-center gap-2 py-3 rounded-lg border border-yellow-400/40 text-white hover:bg-yellow-400/10 transition">
            {icon}
            {label}
        </button>
    );
}

export default SocialButton;