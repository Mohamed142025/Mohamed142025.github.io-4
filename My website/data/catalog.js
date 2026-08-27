const icon = path => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
export const services = [
  { slug: 'erpnext-implementation', icon: icon('<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>') },
  { slug: 'erpnext-development', icon: icon('<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12"/>') },
  { slug: 'erpnext-integration', icon: icon('<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>') },
  { slug: 'business-analysis', icon: icon('<path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/>') },
  { slug: 'training', icon: icon('<path d="M4 6h16v11H4z"/><path d="M9 21h6M12 17v4M8 10h8"/>') },
  { slug: 'support', icon: icon('<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2M6.5 5.5l-2-2M17.5 5.5l2-2"/>') }
];
export const modules = [
  { slug: 'accounting', icon: icon('<path d="M5 3h14v18H5z"/><path d="M8 7h8M8 11h8M8 15h4"/>') },
  { slug: 'buying', icon: icon('<path d="M4 5h2l2 11h9l2-7H7"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/>') },
  { slug: 'selling', icon: icon('<path d="M4 4h11l5 5-9 9-7-7V4Z"/><circle cx="9" cy="9" r="1"/>') },
  { slug: 'stock', icon: icon('<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="m3 12 9 4 9-4M3 17l9 4 9-4"/>') },
  { slug: 'assets', icon: icon('<path d="M5 21V9l7-5 7 5v12"/><path d="M9 21v-6h6v6M9 10h.01M15 10h.01"/>') },
  { slug: 'manufacturing', icon: icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.5 2.5-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-3.6v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L5.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4v-3.6h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1L7.8 5l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V4h3.6v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2.5 2.5-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v3.6H21a1.7 1.7 0 0 0-1.6.6Z"/>') },
  { slug: 'hr', icon: icon('<circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0M18 8h3M19.5 6.5v3"/>') },
  { slug: 'healthcare', icon: icon('<path d="M12 21s8-4.4 8-10.3V5.5L16 4l-4 2-4-2-4 1.5v5.2C4 16.6 12 21 12 21Z"/><path d="M12 8v6M9 11h6"/>') },
  { slug: 'subcontracting', icon: icon('<path d="M7 7h11l-3-3M17 17H6l3 3M18 7l3 3-3 3M6 17l-3-3 3-3"/>') },
  { slug: 'project-management', icon: icon('<path d="M5 4h14v16H5z"/><path d="m8 9 2 2 4-4M8 15h8"/>') }
];
export const clients = [
  { name: 'tawreda.com', image: '/Customer/441950956_982148760581704_4750039257768009608_n.jpg', className: 'logo-tawreda' },
  { name: 'Conagra', image: '/Customer/443928540_850540383761297_7494007671172417250_n - Copy-Pica.png', className: 'logo-conagra' },
  { name: 'GESC', image: '/Customer/logo.webp', className: 'logo-gesc' },
  { name: 'المكتب الاستشاري دكتور عبدالرحمن', className: 'client-name' }
];
