export default function PageBanner({ image, title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="page-banner-bg">
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <div className="page-banner-orb page-banner-orb-1"></div>
      <div className="page-banner-orb page-banner-orb-2"></div>
      <div className="page-banner-overlay"></div>
      <div className="page-banner-content">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
