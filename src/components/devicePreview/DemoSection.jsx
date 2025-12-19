export default function DemoSection({ demoVideoSrc }) {
  return (
    <div>
      <video src={demoVideoSrc} controls muted autoPlay playsInline />
    </div>
  );
}
