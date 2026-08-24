/**
 * Meridian Pantry quality redesign: a source-to-market quality route that
 * distinguishes responsible sourcing conversations from unverified claims.
 */
import { ArrowUpRight, Box, CircleCheck, FileCheck2, Leaf, MapPin, MessageCircle, PackageCheck, Route, ScanLine, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import { whatsappEnquiryUrl } from "@/lib/contactDetails";
import "@/styles/quality-redesign.css";

const botanicalImage = "/manus-storage/karossy-botanical-detail_d9ef6275.jpg";
const sourceImage = "/manus-storage/karossy-traceability_25ffa369.jpg";

const sourceStages = [
  { number: "01", icon: Leaf, title: "Source with context", copy: "We begin with the product, its origin and the intended buyer conversation." },
  { number: "02", icon: CircleCheck, title: "Review product details", copy: "Relevant product information is considered before supply options are discussed." },
  { number: "03", icon: Box, title: "Match the presentation", copy: "Packaging is approached around the product and intended market, not a generic format." },
  { number: "04", icon: ScanLine, title: "Keep the route visible", copy: "Relevant sourcing and supply information is retained where applicable to the request." },
];

const buyerQuestions: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  { icon: PackageCheck, title: "Product identity", copy: "What product is being discussed, and for which buyer need?" },
  { icon: Box, title: "Packaging context", copy: "What presentation is suitable for the product and intended market?" },
  { icon: FileCheck2, title: "Relevant information", copy: "Which product or supply details are available for review?" },
  { icon: MapPin, title: "Destination context", copy: "What market-specific considerations should shape the conversation?" },
];

export default function Quality() {
  return (
    <div className="app-shell page-shell quality-redesign-page">
      <SiteHeader />
      <main className="quality-redesign">
        <section className="quality-redesign-hero">
          <div className="quality-redesign-hero-image" style={{ backgroundImage: `url(${botanicalImage})` }} aria-hidden="true" />
          <div className="quality-redesign-hero-wash" aria-hidden="true" />
          <div className="site-shell quality-redesign-hero-grid">
            <div className="quality-redesign-hero-copy"><div className="quality-route-eyebrow"><span /><Route size={14} /> Source → product → buyer brief</div><p className="quality-overline">Quality & sourcing</p><h1>Care begins<br /><em>at the source.</em></h1><p>Authentic Nigerian and African foods deserve sourcing conversations that respect the product, its presentation and the market it is moving toward.</p><div className="quality-hero-actions"><Link href="/contact" className="button button-saffron">Start a sourcing brief <ArrowUpRight size={18} /></Link><a href={whatsappEnquiryUrl("Hello Karossy Foods, I would like to discuss sourcing and product information for my market.")} target="_blank" rel="noreferrer" className="text-button text-button-light">Discuss your requirements <MessageCircle size={17} /></a></div><div className="quality-hero-route"><span>Source context</span><i /><span>Product detail</span><i /><span>Market handover</span></div></div>
            <aside className="quality-dossier"><div className="quality-dossier-head"><span>Quality dossier</span><strong>01 / source note</strong></div><p>Good supply starts by asking the right questions, not by assuming fixed claims.</p><dl><div><dt>Origin</dt><dd>Nigeria</dd></div><div><dt>Approach</dt><dd>Product-led</dd></div><div><dt>Terms</dt><dd>Available on request</dd></div></dl><div className="quality-dossier-seal"><span>Karossy</span><strong>KF</strong><small>Source / care</small></div></aside>
          </div>
        </section>

        <section className="quality-intent-section"><div className="site-shell quality-intent-grid"><div className="quality-intent-heading"><div className="route-kicker"><span /> The Karossy standard</div><h2>Quality is a<br /><em>working route.</em></h2><p>We approach product requirements, packaging and destination needs with clarity, because careful supply is built through relevant information and honest conversations.</p><div className="quality-provenance-seal"><span>Karossy / route standard</span><strong>KF</strong><small>Source → market</small></div></div><div className="quality-intent-image"><img src={sourceImage} alt="Agricultural source setting for Nigerian food sourcing" /><div><span>From source</span><strong>Keep the product in view.</strong></div></div></div></section>

        <section className="quality-route-section"><div className="site-shell quality-route-layout"><div className="quality-route-intro"><div className="route-kicker"><span /> Quality checkpoints</div><h2>Four checks before the next <em>handover.</em></h2><p>These checkpoints express how a buyer conversation can remain connected to the product from initial source context through to intended market requirements.</p><div className="quality-route-legend"><span><i /> Source</span><span><i /> Detail</span><span><i /> Handover</span></div></div><div className="quality-stage-list">{sourceStages.map(({ number, icon: Icon, title, copy }) => <article className="quality-stage" key={number}><div className="quality-stage-marker"><span>{number}</span><i /></div><div className="quality-stage-icon"><Icon size={22} /></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

        <section className="quality-questions-section"><div className="site-shell"><div className="quality-questions-heading"><div><div className="route-kicker route-kicker-light"><span /> Buyer conversation</div><h2>Information worth<br /><em>asking for.</em></h2></div><p>Details are discussed against the specific product and market. They are not implied as universal certifications, approvals or commercial guarantees.</p></div><div className="quality-questions-grid">{buyerQuestions.map(({ icon: Icon, title, copy }, index) => <article key={title} className={`quality-question quality-question-${index + 1}`}><span>0{index + 1}</span><Icon size={23} /><h3>{title}</h3><p>{copy}</p><i aria-hidden="true" /></article>)}</div><div className="quality-questions-note"><ShieldCheck size={19} /><p>Only information verified for the relevant product and market should be used in labels, listings or buyer communication.</p><Link href="/contact" className="text-button text-button-light">Ask about your market context <ArrowUpRight size={17} /></Link></div></div></section>

        <section className="quality-clarity-section"><div className="site-shell quality-clarity-grid"><div className="quality-clarity-copy"><div className="route-kicker"><span /> Clear claims</div><h2>Specific beats<br /><em>assumed.</em></h2><p>Karossy Foods does not imply certifications, regulatory approvals, nutritional details, shelf life, export eligibility or destination-market requirements unless they have been verified for the specific product and market.</p><p>Where relevant, a conversation may include product information, packaging details, lab reports, food registration or export documentation. Requirements can vary by product and destination.</p></div><div className="quality-clarity-docket"><span>Documentation route</span><strong>Ask for what is relevant to your product and market.</strong><ul><li>Product information</li><li>Packaging details</li><li>Relevant laboratory information</li><li>Registration or export documents where applicable</li></ul><Link href="/export" className="text-button">Explore export & wholesale <ArrowUpRight size={17} /></Link></div></div></section>

        <section className="quality-handover-section"><div className="site-shell quality-handover-card"><div className="quality-handover-route"><span>Source</span><i /><span>Product brief</span><i /><span>Market question</span></div><div><p className="quality-overline">Bring the market context</p><h2>Start with the product. <em>Then ask what it needs.</em></h2></div><div className="quality-handover-actions"><Link href="/contact" className="button button-saffron">Start a sourcing brief <ArrowUpRight size={18} /></Link><Link href="/products" className="text-button text-button-light">Browse product categories <ArrowUpRight size={17} /></Link></div></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
