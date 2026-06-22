export default function ScrollDown() {
  return (
    <div className="flex flex-col items-center gap-0">

      {/* Mouse + glow */}
      <div className="relative mb-5 flex items-center justify-center">
        <div className="animate-pulse-slow absolute h-14 w-14 rounded-full bg-violet-500/15 blur-xl" />

        <div
          className="relative flex h-10 w-[26px] justify-center rounded-full border border-white/25 pt-[7px]"
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        >
          <div className="animate-scroll h-2 w-[3px] rounded-full bg-white/90" />
        </div>
      </div>

      {/* Single arrow */}
      <div className="animate-arrow mb-3.5 flex flex-col items-center">
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="0" x2="7" y2="16" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="2,11 7,17 12,11" fill="none" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Label */}
      <span className="text-[10px] tracking-[0.18em] text-white/30 uppercase">
        Scroll
      </span>
    </div>
  );
}