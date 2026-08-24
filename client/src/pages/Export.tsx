/**
 * Meridian Pantry export redesign: a buyer-facing Nigerian sourcing route from
 * destination brief to commercial handover, avoiding fixed commercial claims.
 */
import { ArrowUpRight, Boxes, ClipboardCheck, FileCheck2, MapPin, MessageCircle, PackageCheck, PlaneTakeoff, Route, Send, ShoppingBasket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "@/components/SiteLayout";
import { whatsappEnquiryUrl } from "@/lib/contactDetails";
import "@/styles/export-redesign.css";
import "@/styles/export-route-refinement.css";

const palmOilImage = "/manus-storage/karossy-palm-oil-condiments_ec23c1b7.jpg";
const botanicalImage = "/manus-storage/karossy-botanical-detail_d9ef6275.jpg";

const routeStages = [
  { number: "01", icon: ClipboardCheck, title: "Frame the buyer brief", copy: "Tell us the product, intended quantity, preferred format and destination market." },
  { number: "02", icon: PackageCheck, title: "Review the supply route", copy: "We consider current product availability and suitable options against your request." },
  { number: "03", icon: FileCheck2, title: "Clarify commercial details", copy: "Product, quantity, packaging and destination considerations are discussed before a route is proposed." },
  { number: "04", icon: PlaneTakeoff, title: "Agree the next handover", copy: "Where suitable, we share a quotation and confirm the next commercial and delivery steps with you." },
];

const buyerProfiles = [
  ["01", "Retail range builders", "African food retailers and supermarkets shaping a more distinctive shelf."],
  ["02", "Distribution partners", "Wholesale distributors and importers planning reliable Nigerian-food lines."],
  ["03", "Food-service buyers", "Restaurants, caterers and food businesses sourcing recognizable ingredients."],
  ["04", "Market specialists", "Buyers exploring specific Nigerian products for established community demand."],
];

const briefCoordinates: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  { icon: ShoppingBasket, title: "Product", copy: "The category or specific Nigerian ingredient you need." },
  { icon: Boxes, title: "Quantity", copy: "The volume or commercial scope you are planning around." },
  { icon: PackageCheck, title: "Format", copy: "Your preferred packaging or presentation requirements." },
  { icon: MapPin, title: "Destination", copy: "The market and handover point you have in mind." },
];

export default function Export() {
  return (
    <div className="app-shell page-shell export-redesign-page">
      <SiteHeader />
      <main className="export-redesign">
        <section className="export-redesign-hero">
          <div className="export-redesign-hero-image" style={{ backgroundImage: `url(${palmOilImage})` }} aria-hidden="true" />
          <div className="export-redesign-hero-wash" aria-hidden="true" />
          <div className="site-shell export-redesign-hero-grid">
            <div className="export-redesign-hero-copy">
              <div className="export-route-eyebrow"><span /><Route size={14} /> Nigerian sourcing route / buyer brief</div>
              <p className="export-overline">Export & wholesale</p>
              <h1>Build the right<br /><em>export route.</em></h1>
              <p>Bring the destination, product requirement and commercial scope. Karossy Foods will help you explore suitable Nigerian and African food supply options.</p>
              <div className="export-redesign-actions"><Link href="/contact" className="button button-saffron">Start a sourcing brief <ArrowUpRight size={18} /></Link><a href={whatsappEnquiryUrl("Hello Karossy Foods, I would like to discuss a Nigerian food sourcing brief for my market.")} target="_blank" rel="noreferrer" className="text-button text-button-light">Talk through a buyer brief <MessageCircle size={17} /></a></div>
              <div className="export-hero-route-strip"><span>Origin brief</span><i /><span>Commercial review</span><i /><span>Buyer handover</span></div>
            </div>
            <aside className="export-brief-docket">
              <div className="export-brief-docket-head"><span>Buyer brief</span><strong>01 / route intake</strong></div>
              <p>A focused starting point for conversations about Nigerian food supply.</p>
              <dl><div><dt>Origin</dt><dd>Nigeria</dd></div><div><dt>Terms</dt><dd>Available on request</dd></div><div><dt>Route</dt><dd>Buyer-led</dd></div></dl>
              <div className="export-docket-seal"><span>Karossy</span><strong>KF</strong><small>Source / Supply</small></div>
            </aside>
          </div>
        </section>

        <section className="export-coordinates-section">
          <div className="site-shell export-coordinates-grid">
            <div className="export-section-heading"><div className="route-kicker"><span /> The working brief</div><h2>Four coordinates.<br /><em>One clearer conversation.</em></h2><p>There is no one-size-fits-all export promise. The more clearly the brief is framed, the more useful the next conversation can be.</p><div className="export-provenance-seal"><span>Karossy / export route</span><strong>KF</strong><small>Origin → market</small></div></div>
            <div className="export-coordinates-list">{briefCoordinates.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={21} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="export-route-section">
          <div className="site-shell export-route-layout">
            <div className="export-route-intro"><div className="route-kicker"><span /> The Karossy route</div><h2>From a market need<br />to a considered <em>handover.</em></h2><p>Each stage keeps the conversation connected to the product, commercial scope and destination that matter to your business.</p><div className="export-route-legend"><span><i /> Origin</span><span><i /> Brief</span><span><i /> Handover</span></div></div>
            <div className="export-stage-list">{routeStages.map(({ number, icon: Icon, title, copy }) => <article className="export-stage" key={number}><div className="export-stage-marker"><span>{number}</span><i /></div><div className="export-stage-icon"><Icon size={22} /></div><div className="export-stage-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </section>

        <section className="export-buyer-section">
          <div className="site-shell"><div className="export-buyer-heading"><div><div className="route-kicker route-kicker-light"><span /> Buyer fit</div><h2>For the businesses<br />that keep African food <em>moving.</em></h2></div><p>Built around buyer conversations rather than fixed terms, the route can begin wherever your market need begins.</p></div><div className="export-buyer-grid">{buyerProfiles.map(([number, title, copy], index) => <article key={number} className={`export-buyer-card export-buyer-card-${index + 1}`}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true" /></article>)}</div><div className="export-buyer-handover"><span>04 / buyer fit</span><i /><strong>Brief ready for commercial discussion</strong><div className="export-provenance-seal export-provenance-seal-light"><span>Karossy / buyer handover</span><strong>KF</strong><small>Market brief</small></div></div></div>
        </section>

        <section className="export-briefing-section">
          <div className="site-shell export-briefing-grid">
            <div className="export-briefing-image"><img src={botanicalImage} alt="Nigerian food ingredients arranged for a sourcing brief" /><div><span>Product + market</span><strong>Discuss the route.</strong></div></div>
            <div className="export-briefing-copy"><div className="route-kicker"><span /> Commercial handover</div><h2>Keep the conversation <em>specific.</em></h2><p>Useful supply discussions begin with details that move the buyer forward. We welcome enquiries around product categories, commercial quantities, formats and destination requirements.</p><ul><li><Send size={16} /> Bulk supply and wholesale range enquiries</li><li><Send size={16} /> Specific Nigerian product requests</li><li><Send size={16} /> Distributor and importer conversations</li><li><Send size={16} /> Destination-led food-service requirements</li></ul><Link href="/products" className="text-button">Explore product categories <ArrowUpRight size={17} /></Link></div>
          </div>
        </section>

        <section className="export-handover-section">
          <div className="site-shell export-handover-card"><div className="export-handover-route"><span>Origin</span><i /><span>Market brief</span><i /><span>Next handover</span></div><div><p className="export-overline">Bring the destination</p><h2>Let’s shape a sourcing brief for <em>your market.</em></h2></div><div className="export-handover-actions"><Link href="/contact" className="button button-saffron">Start a sourcing brief <ArrowUpRight size={18} /></Link><a href={whatsappEnquiryUrl("Hello Karossy Foods, I would like to share a product and destination brief for wholesale or export supply.")} target="_blank" rel="noreferrer" className="text-button text-button-light">Send a WhatsApp brief <MessageCircle size={17} /></a></div></div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
