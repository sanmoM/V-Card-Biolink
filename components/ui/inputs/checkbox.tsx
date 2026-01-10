type CheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
};

export default function Checkbox({
    checked,
    onChange,
    className = "",
}: CheckboxProps) {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`
        w-5 h-5
        flex items-center justify-center
        rounded
        transition-all cursor-pointer
        ${checked ? "bg-secondary" : "bg-black  border border-white/30"} 
        ${className}
      `}
        >
            <svg
                className={`
          w-4 h-4
          text-black
          transition-opacity
          ${checked ? "opacity-100" : "opacity-0"}
        `}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                />
            </svg>
        </button>
    );
}
