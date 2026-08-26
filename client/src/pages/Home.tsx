/**
 * Meridian Pantry homepage: the master-document message is carried through an abundant,
 * route-led Nigerian food-export composition rather than a generic grocery layout.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, MoveUpRight, Sprout } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import "@/styles/home-route-system.css";
import "@/styles/home-motion-system.css";
import "@/styles/seasonal-banners.css";

const heroImage = "/manus-storage/karossy-abstract-harvest-campaign_585d618a.jpg";
const mangoImage = "/manus-storage/karossy-products-mango_c6a8de61.jpg";
const traceImage = "/manus-storage/karossy-traceability_25ffa369.jpg";
const aboutImage = "/manus-storage/sales-girl_4f7b3698.jpg";

const productCategories = [
  { slug: "kilishi", name: "Kilishi & dried meat", copy: "Traditional Nigerian dried meat products and African meat snacks.", tint: "product-mango", image: "/manus-storage/karossy-kilishi-dried-meat_72d30bf1.jpg" },
  { slug: "palm-oil", name: "Palm oil & condiments", copy: "Nigerian palm oil and traditional cooking ingredients.", tint: "product-botanical", image: "/manus-storage/karossy-palm-oil-condiments_ec23c1b7.jpg" },
  { slug: "garri", name: "Garri & cassava", copy: "Ijebu Garri and other cassava-based staples.", tint: "product-grain", image: "/manus-storage/karossy-garri-cassava_e23232ee.jpg" },
  { slug: "dried-fish", name: "Dried fish & seafood", copy: "Selected dried fish products for African food markets.", tint: "product-botanical", image: "/manus-storage/karossy-dried-fish-seafood_77f4d1c2.jpg" },
  { slug: "dried-packaged-snails", name: "Dried & packaged Nigerian snails", copy: "Dried and packaged snails from Nigeria for African food retail, wholesale and specialist buyer enquiries.", tint: "product-mango", image: "/manus-storage/dried-snail_72b85033.jpg" },
  { slug: "nuts-seeds", name: "Nuts & seeds", copy: "African nuts and seeds for retail and wholesale buyers.", tint: "product-grain", image: "/manus-storage/karossy-nuts-seeds_f8b3f1be.jpg" },
  { slug: "spices", name: "Traditional ingredients", copy: "Authentic ingredients used in Nigerian and African cooking.", tint: "product-mango", image: "/manus-storage/karossy-spices-traditional-ingredients_3d54b592.jpg" },
];

const productFocuses = [
  { name: "Palm oil & condiments", copy: "For everyday cooking ranges and market-ready African food assortments." },
  { name: "Ijebu Garri", copy: "A classic cassava staple for retail, food-service and diaspora markets." },
  { name: "Dried snail", copy: "A distinctive seafood line for African pantry buyers and specialist ranges." },
] as const;

const campaigns = {
  harvest: { label: "New harvest selection", title: <>The season’s best.<br /><em>Ready to travel.</em></>, copy: "Build your next range around colourful, source-led African ingredients for retail, wholesale and food-service conversations.", image: "/manus-storage/karossy-abstract-harvest-campaign_585d618a.jpg", action: "Explore our products" },
  festive: { label: "Festive table campaign", title: <>Bring the table<br /><em>together.</em></>, copy: "A warm seasonal presentation of African pantry favourites for festive menus, gifting and community celebrations.", image: "/manus-storage/karossy-abstract-festive-campaign_7ce29f59.jpg", action: "Explore seasonal products" },
  wholesale: { label: "Wholesale planning", title: <>Plan the route.<br /><em>Build the range.</em></>, copy: "Start an export-ready sourcing conversation for commercial quantities, preferred formats and destination-market requirements.", image: "/manus-storage/karossy-abstract-wholesale-campaign_e2321933.jpg", action: "Start a supply brief" },
} as const;

export default function Home() {
  const [focusIndex, setFocusIndex] = useState(0);
  const heroArtRef = useRef<HTMLDivElement>(null);
  const campaignParam = new URLSearchParams(window.location.search).get("campaign");
  const [campaignKey, setCampaignKey] = useState<keyof typeof campaigns>(() => campaignParam === "festive" || campaignParam === "wholesale" ? campaignParam : "harvest");
  const campaign = campaigns[campaignKey];
  const seasonalDestination = campaignKey === "wholesale" ? "/contact" : "/products";
  const campaignPath = (key: keyof typeof campaigns) => key === "harvest" ? "/" : `/?campaign=${key}`;
  const selectCampaign = (key: keyof typeof campaigns) => { setCampaignKey(key); window.history.replaceState({}, "", campaignPath(key)); };

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const timer = window.setInterval(() => setFocusIndex((index) => (index + 1) % productFocuses.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 680px)");
    if (reducedMotion.matches || mobile.matches) return;
    let animationFrame = 0;
    const updateParallax = () => {
      animationFrame = 0;
      heroArtRef.current?.style.setProperty("--hero-parallax-y", `${Math.min(window.scrollY * 0.08, 56)}px`);
    };
    const onScroll = () => { if (!animationFrame) animationFrame = window.requestAnimationFrame(updateParallax); };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const focus = productFocuses[focusIndex];

  return (
    <div className="app-shell home-page">
      <div className="hero-wrap">
        <div ref={heroArtRef} className="hero-art hero-art-parallax" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <SiteHeader inverse />
        <main>
          <section className="hero site-shell">
            <div className="hero-copy">
              <div className="eyebrow eyebrow-light"><span className="pulse-dot" /> Nigerian - African food exporters</div>
              <h1><span className="hero-headline-line">Premium African Foods,</span><em className="hero-headline-line">Sourced from Nigeria.</em></h1>
              <p>From Nigeria to the World — Authentic African Foods, Carefully Sourced and Reliably Supplied.</p>
              <div className="hero-actions"><Link href="/products" className="button button-saffron">View product categories <ArrowUpRight size={18} /></Link><Link href="/contact" className="text-button text-button-light">Start a sourcing brief <ArrowDown size={17} /></Link></div>
              <div className="hero-product-focus" aria-live="polite"><span>Product focus</span><div className="hero-product-focus-copy" key={focus.name}><strong>{focus.name}</strong><p>{focus.copy}</p></div></div>
            </div>
            <div className="hero-origin-stamp"><span className="stamp-ring">Nigeria / Markets / Sourcing / Supply /</span><span className="stamp-center">KF</span></div>
            <div className="hero-bottom-row"><div className="hero-route"><span /> From crop selection to market-ready supply.</div><div className="hero-scroll">Scroll to explore <ArrowDown size={15} /></div></div>
          </section>
        </main>
      </div>

      <section className="feature-strip"><div className="site-shell feature-strip-grid"><div className="feature-stat"><strong>01</strong><span>Proudly Nigerian</span></div><div className="feature-stat"><strong>02</strong><span>African Food Specialists</span></div><div className="feature-stat"><strong>03</strong><span>Wholesale Supply</span></div><div className="feature-stat"><strong>04</strong><span>Export Ready</span></div><div className="feature-stat"><strong>05</strong><span>Quality Focused</span></div></div></section>

      <section className="intro-section section-pad home-route-stage" data-route="01 / origin"><div className="site-shell intro-grid"><figure className="intro-about-visual"><img src={aboutImage} alt="Customer selecting fresh produce in a Nigerian market" /><div className="intro-about-route route-kicker"><span /> About Karossy Foods</div><figcaption><span>From Nigeria</span><strong>Food, familiar everywhere.</strong></figcaption></figure><div className="intro-copy"><h2>Connecting the World to Authentic African Foods</h2><p>Karossy Foods Limited is a Nigerian food sourcing, distribution and export company focused on bringing authentic African food products to customers and businesses around the world.</p><p>From traditional staples such as Ijebu Garri and palm oil to dried meats, snails, fish, nuts, seeds and other African ingredients, our goal is simple: to make authentic African foods accessible wherever our customers are in the world.</p><Link href="/about" className="text-button">Learn more about Karossy Foods <ArrowUpRight size={17} /></Link></div></div></section>

      <section className="products-section product-selection-compact section-pad home-route-stage" data-route="02 / selection"><div className="site-shell product-selection-divider" aria-hidden="true"><span className="product-selection-divider-line product-selection-divider-line-start" /><span className="product-selection-divider-stamp"><b>02</b></span><span className="product-selection-divider-leaf"><i /><i /></span><span className="product-selection-divider-line product-selection-divider-line-end" /></div><div className="site-shell section-head"><div><div className="route-kicker"><span /> Product selection</div><h2>Premium African food,<br /><em>selected for your market.</em></h2></div><Link href="/products" className="button button-forest">Browse product categories <ArrowUpRight size={17} /></Link></div><div className="site-shell product-rail product-rail-expanded">{productCategories.map((product) => <Link href={`/products/${product.slug}`} className={`product-tile ${product.tint}`} key={product.slug}><div className="product-tile-image" style={{ backgroundImage: `url(${product.image})` }} aria-hidden="true" /><div className="tile-content"><span className="tile-stage">Explore category</span><h3>{product.name}</h3><p>{product.copy}</p><span className="tile-arrow"><ArrowUpRight size={20} /></span></div></Link>)}</div></section>

      <section className="seasonal-campaign" data-campaign={campaignKey}><div key={campaignKey} className="seasonal-campaign-image seasonal-campaign-image-switch" style={{ backgroundImage: `url(${campaign.image})` }} aria-hidden="true" /><div className="seasonal-campaign-wash" aria-hidden="true" /><div className="site-shell seasonal-campaign-grid"><div className="seasonal-route-marker"><span>Campaign route</span><i /><i /><i /></div><div className="seasonal-campaign-copy"><div className="route-kicker route-kicker-light"><span /> {campaign.label}</div><h2>{campaign.title}</h2><p>{campaign.copy}</p><div className="seasonal-campaign-actions"><Link href={seasonalDestination} className="button button-saffron">{campaign.action} <ArrowUpRight size={17} /></Link><Link href="/contact" className="text-button text-button-light">Request a quote <ArrowUpRight size={16} /></Link></div></div><div className="seasonal-campaign-switcher" aria-label="Seasonal campaign variants"><span>Campaign view</span><b>Choose a direction to update this campaign.</b>{(Object.keys(campaigns) as Array<keyof typeof campaigns>).map((key) => <button key={key} type="button" onClick={() => selectCampaign(key)} className={campaignKey === key ? "seasonal-switch seasonal-switch-active" : "seasonal-switch"} aria-pressed={campaignKey === key}><span>{campaigns[key].label}</span><small>{campaignKey === key ? "Selected campaign" : "Switch campaign"}</small></button>)}</div></div></section>

      <section className="season-section home-route-stage home-route-stage-dark" data-route="03 / supply"><div className="site-shell season-grid"><div className="season-image-frame"><img src={mangoImage} alt="Fresh golden mangoes available through Nigerian food supply programmes" /><div className="image-tag"><span>From Nigeria</span><strong>Premium produce</strong></div></div><div className="season-copy"><div className="route-kicker route-kicker-light"><span /> Wholesale & retail</div><h2>Your trusted partner for African food supply.</h2><p>Whether you are a supermarket, African food retailer, restaurant, distributor, importer or wholesale buyer, Karossy Foods helps you source authentic Nigerian and African food products.</p><Link href="/export" className="text-button text-button-light">Explore export & wholesale <ArrowUpRight size={17} /></Link></div></div></section>

      <section className="trace-section section-pad home-route-stage" data-route="04 / quality"><div className="site-shell trace-grid"><div className="trace-copy"><div className="route-kicker"><span /> How it works</div><h2>Good supply starts with a clear conversation.</h2><p>Tell us what you need, and we will help you explore suitable supply options around product, quantity, packaging and destination requirements.</p><ul className="check-list"><li><Check size={16} /> Tell us what you need</li><li><Check size={16} /> We source</li><li><Check size={16} /> Quote & confirm</li><li><Check size={16} /> Supply & delivery</li></ul><Link href="/contact" className="button button-outline">Request a wholesale quote <ArrowUpRight size={17} /></Link></div><div className="trace-image-wrap"><img src={traceImage} alt="Nigerian food sourcing at the agricultural source" /><div className="trace-card"><Sprout size={22} /><p>Quality starts close to the source.</p></div></div></div></section>

      <section className="route-section home-route-stage home-route-stage-dark" data-route="05 / handover"><div className="site-shell route-grid"><div className="route-visual" aria-hidden="true"><div className="map-arc arc-one" /><div className="map-arc arc-two" /><div className="route-point point-one" /><div className="route-point point-two" /><div className="route-point point-three" /><span className="route-origin">Nigeria</span><span className="route-destination">Your market</span></div><div><div className="route-kicker route-kicker-light"><span /> Ready when you are</div><h2>Ready to source<br />authentic African <em>foods?</em></h2><p>Tell us what products and quantities you need. Our team will help you explore suitable supply options.</p><Link href="/contact" className="button button-saffron">Request a quote <MoveUpRight size={17} /></Link></div></div></section>
      <SiteFooter />
    </div>
  );
}
