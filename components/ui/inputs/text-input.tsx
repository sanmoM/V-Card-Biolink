function TextInput({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) {
    return (
        <div>
            <label className="block text-sm text-gray-300 mb-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-lg bg-black border border-yellow-400/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
        </div>
    );
}
export default TextInput;