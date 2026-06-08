export default function FloatingBadge({ icon: Icon, label, value, className }) {
  return (
    <div className={`floating-badge ${className}`}>
      <div className="fb-icon">{Icon}</div>
      <div className="fb-text">
        <span className="fb-label">{label}</span>
        <span className="fb-value">{value}</span>
      </div>
    </div>
  );
}
