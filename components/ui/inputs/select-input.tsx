import React from 'react'

export default function SelectInput({ label, options }: { label: string, options: any[] }) {
    return (
        <div>
            <label className="mb-1 block text-sm text-white">
                {label}
            </label>
            <select className="w-full rounded-lg border border-yellow-400/40 bg-transparent px-4 py-3 text-sm text-gray-400 focus:border-secondary focus:outline-none bg-black">
                {options.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
