import { jsx as _jsx } from "react/jsx-runtime";
// src/components/ui/input.tsx
export function Input({ className = "", ...props }) {
    return (_jsx("input", { className: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-amber-500 ${className}`, ...props }));
}
