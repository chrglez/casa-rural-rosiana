
// src/components/ui/input.tsx

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-amber-500 ${className}`}
      {...props}
    />
  );
}
