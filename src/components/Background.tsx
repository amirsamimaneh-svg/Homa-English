/** Fixed dark space background with drifting aurora glow blobs + grid fade. */
export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute top-0 inset-x-0 h-[600px] grid-fade" />
      <div className="absolute -top-32 right-[-10%] w-[560px] h-[560px] blob bg-brand-violet/25 animate-drift" />
      <div
        className="absolute top-[8%] left-[-12%] w-[520px] h-[520px] blob bg-brand-cyan/20 animate-drift"
        style={{ animationDelay: "-6s" }}
      />
    </div>
  );
}
