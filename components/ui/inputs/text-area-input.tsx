import { cn } from "@/utils/cn";

function TextAreaInput({
    label,
    placeholder,
    inputClassName,
}: {
    label: string;
    placeholder: string;
    type?: string;
    inputClassName?: string;
}) {
    return (
        <div>
            <label className="block text-sm text-gray-300 mb-1">{label}</label>
            <textarea
                placeholder={placeholder}
                className={cn("w-full rounded-lg bg-black border border-yellow-400/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400", inputClassName)}
            />
        </div>
    );
}
export default TextAreaInput;