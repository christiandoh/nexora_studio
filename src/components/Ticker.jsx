import { memo } from 'react';

const tickerItems = [
  'Sites web premium',
  'Applications mobiles Flutter',
  'Automatisation IA',
  'Formation équipes',
  'Design Sprint',
  'UX/UI sur-mesure',
  'Chatbots WhatsApp',
  'E-commerce mobile money',
  'Dashboards analytics',
];

function TickerItem({ text }) {
  return (
    <span className="ticker-item">
      <span className="ticker-sep"></span> {text}
    </span>
  );
}

const TickerItemMemo = memo(TickerItem);

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <TickerItemMemo key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}
