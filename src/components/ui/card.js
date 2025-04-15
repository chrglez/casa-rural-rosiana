import { jsx as _jsx } from "react/jsx-runtime";
// src/components/ui/card.tsx
export function Card({ children, className = "", ...props }) {
    return (_jsx("div", { className: `rounded-xl border bg-white shadow ${className}`, ...props, children: children }));
}
export function CardContent({ children, className = "", ...props }) {
    return (_jsx("div", { className: `p-4 ${className}`, ...props, children: children }));
}
