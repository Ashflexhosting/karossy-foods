/**
 * Meridian Pantry quality page: precise source-content safeguards prevent unverified certification
 * or regulatory claims, while demonstrating Karossy Foods' quality and sourcing approach.
 */
import { ArrowUpRight, Box, CircleCheck, Leaf, ScanLine, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { PageLead, SiteFooter, SiteHeader } from "@/components/SiteLayout";

const principles = [{ icon: Leaf, title: "Responsible sourcing", copy: "We work with reliable sources and producers." }, { icon: CircleCheck, title: "Product quality", copy: "We apply appropriate product checks before supply." }, { icon: ShieldCheck, title: "Authenticity", copy: "We preserve the character and culinary identity of African foods." }, { icon: Box, title: "Packaging", copy: "We use packaging appropriate to the product and intended market." }, { icon: ScanLine, title: "Traceability", copy: "We maintain relevant sourcing and supply information where applicable." }];

export default function Quality() {
  return <div className="app-shell page-shell"><SiteHeader /><main><PageLead eyebrow="Quality & sourcing" title={<>Quality starts at the source.</>} description="Karossy Foods focuses on sourcing authentic Nigerian and African food products through suitable suppliers and producers." />
    <section className="quality-intro section-pad"><div className="site-shell quality-intro-grid"><div><div className="route-kicker"><span /> The Karossy approach</div><h2>Authentic food deserves careful handling at every step.</h2></div><p>Product requirements, packaging and destination needs are approached with clarity. We believe good supply depends on suitable preparation, relevant information and honest conversations about what a product needs before it moves.</p></div></section>
    <section className="quality-principles"><div className="site-shell quality-principles-grid">{principles.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon size={25} /><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="compliance-section section-pad"><div className="site-shell compliance-grid"><div><div className="route-kicker route-kicker-light"><span /> A clear note on compliance</div><h2>Only verified information belongs on a label.</h2></div><div><p>We do not imply certifications, regulatory approvals, nutritional details, shelf life, export eligibility or destination-market requirements unless they have been verified for the specific product and market.</p><p>Where applicable, relevant documentation may include product information, packaging details, lab reports, food registration or export documentation. Requirements vary by product and destination.</p><Link href="/contact" className="text-button text-button-light">Ask about your market requirements <ArrowUpRight size={17} /></Link></div></div></section>
    <section className="brief-section section-pad"><div className="site-shell brief-card"><div><span className="brief-label">Source with clarity</span><h2>Tell us what you need and where it needs to go.</h2></div><Link href="/contact" className="button button-saffron">Request a quote <ArrowUpRight size={18} /></Link></div></section></main><SiteFooter /></div>;
}
