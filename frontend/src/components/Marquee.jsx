import '../styles/marquee.css';

const items = [
  'Imported Wallpapers',
  'Curtain Fabrics',
  'Upholstery',
  'Blinds',
  'Wooden Flooring',
  'Automated Tracks',
  'Artifacts',
  'SPC Flooring',
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <div className="marquee-item" key={`${item}-${i}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}
