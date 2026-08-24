/**
 * Meridian Pantry origin page: human-scale provenance and careful sourcing principles.
 */
import { ArrowUpRight, CircleDotDashed, HandHeart, Sprout, Waves } from "lucide-react";
import { Link } from "wouter";
import { PageLead, SiteFooter, SiteHeader } from "@/components/SiteLayout";

const traceImage = "/manus-storage/karossy-traceability_25ffa369.jpg";

const principles = [
  { icon: Sprout, title: "Stay close to source", copy: "We make our best decisions nearer to the grower, the crop and the realities of the season." },
  { icon: CircleDotDashed, title: "Keep the route visible", copy: "Our export desk builds clarity into the moments that matter, from readiness to arrival." },
  { icon: HandHeart, title: "Grow dependable partnerships", copy: "We value straightforward conversations, repeatable quality and relationships with staying power." },
];

export default function Origin() {
  return (
    <div className="app-shell page-shell">
      <SiteHeader />
      <main>
        <PageLead eyebrow="Our origin" title={<>Export is a people business before it is a logistics business.</>} description="Karossy Foods exists to close the distance between quality at source and confidence at destination." />
        <section className="origin-story section-pad">
          <div className="site-shell origin-story-grid">
            <div className="origin-image"><img src={traceImage} alt="Cultivated green field with a farm worker gathering produce" /><div className="vertical-caption">Built closer to the field</div></div>
            <div className="origin-copy"><div className="route-kicker"><span /> A more considered route</div><h2>We trade in more than produce.</h2><p>We trade in timing, context and care. That means listening carefully to growers and buyers alike, then bringing the right details forward at the right point in the journey.</p><p>Our work is designed to be practical, responsive and distinctly human—qualities that are easy to value and hard to automate.</p><Link href="/contact" className="text-button">Start a conversation <ArrowUpRight size={17} /></Link></div>
          </div>
        </section>
        <section className="principles-section section-pad">
          <div className="site-shell"><div className="section-head compact-head"><div><div className="route-kicker"><span /> Our operating principles</div><h2>Care made<br /><em>practical.</em></h2></div></div><div className="principles-grid">{principles.map(({ icon: Icon, title, copy }, index) => <article className="principle" key={title}><span className="principle-no">0{index + 1}</span><Icon size={26} /><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        </section>
        <section className="origin-quote-section"><div className="site-shell"><Waves size={34} className="quote-icon" /><blockquote>“A good export partner should make the complexity feel held—not hidden.”</blockquote><span>Karossy Foods, the way we work</span></div></section>
        <section className="brief-section section-pad"><div className="site-shell brief-card"><div><span className="brief-label">Bring us your brief</span><h2>Looking for an export partner that stays close?</h2></div><Link href="/contact" className="button button-saffron">Talk to Karossy Foods <ArrowUpRight size={18} /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
