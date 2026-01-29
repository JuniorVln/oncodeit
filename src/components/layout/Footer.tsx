import { Terminal } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 py-12">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-zinc-500" />
                    <span className="font-mono text-sm text-zinc-500">
                        On Code IT © 2026. São Paulo, SP.
                    </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="font-mono text-xs font-medium text-emerald-500">
                        System: Online
                    </span>
                </div>
            </div>
        </footer>
    );
}
