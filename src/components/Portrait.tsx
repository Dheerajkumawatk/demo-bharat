import Image from "next/image";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-cream ${className}`}>
      <Image
        src="/images/leader-portrait.png"
        alt="श्री महेश कुमार मीणा"
        fill
        sizes="(max-width: 768px) 80vw, 360px"
        className="object-cover"
        priority
      />
    </div>
  );
}
