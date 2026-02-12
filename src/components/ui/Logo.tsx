export function Logo({ className = "h-6 w-auto" }: { className?: string }) {
    return (
        <div className="flex items-center gap-2">
            <svg
                className={className}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Terminal Symbol > */}
                <path
                    d="M8 6L14 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-neon"
                />
                {/* Dot */}
                <circle
                    cx="17"
                    cy="18"
                    r="2"
                    fill="currentColor"
                    className="text-neon"
                />
            </svg>
            <span className="font-mono text-xl font-medium tracking-tight text-white">
                On Code<span className="text-neon">_IT</span>
            </span>
        </div>
    );
}
