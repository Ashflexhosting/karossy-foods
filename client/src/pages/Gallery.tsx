/** Meridian Pantry Gallery: a visual sourcing journal for Karossy Foods product, ingredient and origin photography. */
import { ArrowUpRight, Route, Sprout } from "lucide-react";
import { Link } from "wouter";
import { PageLead, SiteFooter, SiteHeader } from "@/components/SiteLayout";
import "@/styles/gallery.css";

const galleryImages = [
  { src: "/manus-storage/karossy-hero-ingredients_18d4b704.jpg", alt: "Premium African food ingredients including mangoes, hibiscus and seeds", title: "The African pantry", note: "Products", className: "gallery-feature" },
  { src: "/manus-storage/karossy-palm-oil-condiments_ec23c1b7.jpg", alt: "Palm oil and traditional cooking ingredients", title: "Cooking essentials", note: "Palm oil & condiments", className: "gallery-tall" },
  { src: "/manus-storage/karossy-garri-cassava_e23232ee.jpg", alt: "Ijebu Garri and cassava ingredients", title: "Staples with a story", note: "Garri & cassava", className: "gallery-square" },
  { src: "/manus-storage/karossy-traceability_25ffa369.jpg", alt: "Agricultural sourcing scene in Nigeria", title: "Close to the source", note: "Sourcing", className: "gallery-wide" },
  { src: "/manus-storage/karossy-kilishi-dried-meat_72d30bf1.jpg", alt: "Nigerian Kilishi dried meat in a woven basket", title: "Sun-dried character", note: "Kilishi & dried meat", className: "gallery-square" },
  { src: "/manus-storage/karossy-dried-fish-seafood_77f4d1c2.jpg", alt: "Selected dried fish and seafood products", title: "Seafood selection", note: "Dried fish & seafood", className: "gallery-tall" },
  { src: "/manus-storage/karossy-nuts-seeds_f8b3f1be.jpg", alt: "African nuts and seeds arranged in woven bowls", title: "Natural pantry", note: "Nuts & seeds", className: "gallery-square" },
  { src: "/manus-storage/karossy-spices-traditional-ingredients_3d54b592.jpg", alt: "African spices and traditional ingredients", title: "Aromatic route", note: "Spices & ingredients", className: "gallery-square" },
];

export default function Gallery() {
  return <div className="app-shell page-shell gallery-page"><SiteHeader /><main><PageLead eyebrow="Gallery" title={<>From source to shelf,<br />in <em>full colour.</em></>} description="A visual journal of the products, ingredients and sourcing moments that shape the Karossy Foods supply conversation." bannerImage="/manus-storage/karossy-african-food-selection_44230189.jpg" bannerPosition="center" bannerVariant="gallery" />
    <section className="gallery-intro"><div className="site-shell gallery-intro-grid"><div className="gallery-route-chip"><Route size={17} /><span>Source → selection → supply</span></div><p>Explore the visual character of our Nigerian and African food range: familiar staples, concentrated flavour, crop detail and the ingredients buyers ask us to help source.</p></div></section>
    <section className="gallery-grid-section section-pad"><div className="site-shell"><div className="section-head gallery-section-head"><div><div className="route-kicker"><span /> The Karossy visual journal</div><h2>Ingredients with<br /><em>somewhere to go.</em></h2></div><p>Every image is a route marker: food with a point of origin, a place in the pantry and a possible destination market.</p></div><div className="gallery-grid">{galleryImages.map((item) => <figure key={item.title} className={`gallery-card ${item.className}`}><img src={item.src} alt={item.alt} /><figcaption><span>{item.note}</span><strong>{item.title}</strong></figcaption></figure>)}</div></div></section>
    <section className="gallery-source-section"><div className="site-shell gallery-source-grid"><div className="gallery-source-mark"><Sprout size={28} /><span>Origin matters</span></div><div><div className="route-kicker route-kicker-light"><span /> Sourcing perspective</div><h2>Food carries more<br />than <em>flavour.</em></h2></div><p>It carries familiarity, cooking tradition and the expectation that a buyer can access the right products for the people they serve. Karossy Foods is here to help shape that supply conversation.</p><Link href="/contact" className="button button-saffron">Start a supply brief <ArrowUpRight size={17} /></Link></div></section>
  </main><SiteFooter /></div>;
}
