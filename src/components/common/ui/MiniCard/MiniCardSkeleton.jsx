export function MiniCardSkeleton() {
    return (
        <div className="rounded-3xl bg-zinc-900/60 ring-1 ring-white/5 p-4 animate-pulse">
            <div className="space-y-2">
                <div className="h-3 w-1/4 rounded bg-zinc-800" />
                <div className="h-3 w-5/7 rounded bg-zinc-800" />
                <div className="mt-4 flex gap-2">
                    <div className="h-4 w-10 rounded-full bg-zinc-800" />
                    <div className="h-4 w-30 rounded-full bg-zinc-800" />
                    <div className="h-4 w-16 rounded-full bg-zinc-800" />
                </div>
            </div>
        </div>
    );
}