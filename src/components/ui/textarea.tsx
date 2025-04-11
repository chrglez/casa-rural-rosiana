
// src/components/ui/textarea.tsx

export function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-amber-500 ${className}`}
      {...props}
    />
  );
}
