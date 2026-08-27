/** Meridian Pantry performance safeguard: analytics loads only when the deployment provides a valid configured endpoint. */
export function loadAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT?.replace(/\/+$/, "");
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!endpoint || !websiteId || document.querySelector('script[data-karossy-analytics="true"]')) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = `${endpoint}/umami`;
  script.dataset.websiteId = websiteId;
  script.dataset.karossyAnalytics = "true";
  document.head.append(script);
}
