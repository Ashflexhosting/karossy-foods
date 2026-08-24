/**
 * Meridian Pantry catalogue: tactile product photography and open commercial detail are paired
 * with the approved Nigerian-food category structure from the master document.
 */
import { ArrowUpRight, Check, Leaf, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { PageLead, SiteFooter, SiteHeader } from "@/components/SiteLayout";

const botanicalImage = "/manus-storage/karossy-botanical-detail_d9ef6275.jpg";

const assortment = [
  { name: "Kilishi & dried meat", note: "Traditional Nigerian dried meat products and African meat snacks.", items: ["Kilishi", "Dried meat snacks"], className: "assortment-fruit" },
  { name: "Palm oil & condiments", note: "Nigerian palm oil and traditional cooking ingredients.", items: ["Nigerian palm oil", "Cooking condiments"], className: "assortment-botanical" },
  { name: "Garri & cassava products", note: "Ijebu Garri and other cassava-based staples.", items: ["Ijebu Garri", "Cassava staples"], className: "assortment-grain" },
  { name: "Dried fish & seafood", note: "Selected dried fish products for African food markets.", items: ["Dried fish", "Seafood selections"], className: "assortment-botanical" },
  { name: "Nuts & seeds", note: "African nuts and seeds for retail and wholesale buyers.", items: ["Nuts", "Seeds"], className: "assortment-grain" },
  { name: "Spices & traditional ingredients", note: "Authentic ingredients used in Nigerian and African cooking.", items: ["Spices", "Traditional ingredients"], className: "assortment-fruit" },
];

export default function Products() {
  return <div className="app-shell page-shell"><SiteHeader /><main><PageLead eyebrow="Our products" title={<>Authentic Nigerian and African food products.</>} description="Explore our range of authentic Nigerian and African food products. Product availability, packaging and quantities may vary by market and order requirements." />
    <section className="catalog-intro catalog-intro-media"><div className="site-shell catalog-intro-grid"><p className="large-quote">“The products that bring people home can also bring new customers through your door.”</p><div className="catalog-media"><img src={botanicalImage} alt="Hibiscus, sesame seeds and moringa leaves representing Karossy Foods ingredients" /><div className="catalog-note"><Leaf size={19} /><p>Tell us the product, destination and commercial requirement. We will review current availability and suitable supply options.</p></div></div></div></section>
    <section className="assortment-section section-pad"><div className="site-shell assortment-list">{assortment.map((group, index) => <article className={`assortment-row ${group.className}`} key={group.name}><div className="assortment-number">0{index + 1}</div><div className="assortment-heading"><h2>{group.name}</h2><p>{group.note}</p></div><ul>{group.items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><Link href="/contact" className="round-link" aria-label={`Request a quote for ${group.name}`}><ArrowUpRight size={21} /></Link></article>)}</div></section>
    <section className="format-section"><div className="site-shell format-grid"><div className="format-copy"><div className="route-kicker route-kicker-light"><span /> Supply options</div><h2>Retail, wholesale<br />and <em>export.</em></h2></div><div className="format-list"><span>01 / Product availability by enquiry</span><span>02 / Pack and size options subject to requirements</span><span>03 / Commercial supply planning for your destination</span></div></div></section>
    <section className="brief-section section-pad"><div className="site-shell brief-card"><div><span className="brief-label">Need a product in commercial quantities?</span><h2>Request a quote with your destination, quantity and packaging requirements.</h2><p>We will review availability and suitable supply options for your market.</p></div><div className="brief-actions"><Link href="/contact" className="button button-saffron">Request a quote <ArrowUpRight size={18} /></Link><a className="text-button" href="https://wa.me/2348036481214?text=Hello%20Karossy%20Foods%2C%20I%20am%20interested%20in%20your%20products.%20I%20would%20like%20to%20know%20availability%2C%20price%2C%20pack%20size%20and%20wholesale%2Fexport%20options." target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle size={17} /></a></div></div></section>
  </main><SiteFooter /></div>;
}
