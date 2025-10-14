import { cn } from "@/lib/utils";

interface LogoSVGProps {
  className?: string;
}

export function LogoSVG({ className }: LogoSVGProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <circle cx="24" cy="24" r="23" fill="hsl(36, 36%, 54%)" stroke="hsl(36, 36%, 44%)" strokeWidth="2" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        AC
      </text>
    </svg>
  );
}
