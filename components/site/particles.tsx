export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 to-transparent" />
      <div className="absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-teal-300/[0.045] blur-3xl" />
      <div className="absolute bottom-[14%] right-[10%] h-72 w-72 rounded-full bg-amber-300/[0.04] blur-3xl" />
    </div>
  );
}
