export function PlayIcon({ playing = false, className = '' }: { playing?: boolean; className?: string }) {
 return <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{playing ? <><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></> : <path d="m7 3 15 9-15 9z" />}</svg>;
}
export function Chevron() { return <svg aria-hidden="true" width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="m4 6 4 4 4-4" /></svg>; }
