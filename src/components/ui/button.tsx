
// src/components/ui/button.tsx

export function Button({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-amber-600 text-white font-medium py-2 px-4 rounded-md hover:bg-amber-700 transition ${className}`}
      {...props}
    />
  );
}
