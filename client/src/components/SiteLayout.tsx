/**
 * Meridian Pantry design system: Canopy Green, harvest saffron, and a visible route-spine
 * create the premium Nigerian food-export identity used across Karossy Foods pages.
 */
import { ArrowUpRight, Building2, CheckCircle2, ChevronRight, House, Images, Mail, Menu, MessageCircle, Package, Phone, ShieldCheck, Ship, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState, type FormEvent } from "react";
import type { CSSProperties, ReactNode } from "react";
import "@/styles/shared-logo.css";
import "@/styles/sticky-header.css";
import "@/styles/mobile-nav-icons.css";
import "@/styles/quote-dialog.css";
import "@/styles/footer-refinement.css";
import "@/styles/desktop-nav-scale.css";
import "@/styles/breadcrumbs.css";
import "@/styles/inner-page-banners.css";
import "@/styles/production-template-refinement.css";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { contactDetails, whatsappEnquiryUrl } from "@/lib/contactDetails";

const logo = "/manus-storage/karossy-foods-wordmark-green-gold_6144b566.png";
const monogram = "/manus-storage/karossy-glossy-leaf-s-favicon_68b5b543.png";

const navItems = [
  { label: "Home", href: "/", icon: House, hint: "Return to the source" },
  { label: "About Us", href: "/about", icon: Building2, hint: "Meet Karossy Foods" },
  { label: "Our Products", href: "/products", icon: Package, hint: "Explore our food range" },
  { label: "Gallery", href: "/gallery", icon: Images, hint: "See products & sourcing" },
  { label: "Export & Wholesale", href: "/export", icon: Ship, hint: "Plan your supply route" },
  { label: "Quality & Sourcing", href: "/quality", icon: ShieldCheck, hint: "Our sourcing approach" },
  { label: "Contact", href: "/contact", icon: Mail, hint: "Contact the export desk" },
];

export function BrandMark({ light = false }: { light?: boolean }) {
  return <div className={light ? "brand-lockup brand-lockup-logo brand-lockup-logo-light" : "brand-lockup brand-lockup-logo"} aria-label="Karossy Foods Limited" style={{height: '60px', width: '144px'}}><img src={logo} alt="Karossy Foods" className="brand-logo" style={{height: '60px', width: '144px'}} /></div>;
}

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items, inverse = false }: { items: BreadcrumbItem[]; inverse?: boolean }) {
  return <nav className={inverse ? "breadcrumbs breadcrumbs-inverse" : "breadcrumbs"} aria-label="Breadcrumb"><Link href="/">Home</Link>{items.map((item, index) => <span className="breadcrumb-segment" key={`${item.label}-${index}`}><ChevronRight size={12} aria-hidden="true" />{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  const [location] = useLocation();
  const innerPage = location !== "/";
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  useEffect(() => setOpen(false), [location]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);
  const isActive = (href: string) => location === href || (href === "/about" && location === "/origin") || (href === "/products" && location.startsWith("/products"));
  const updateQuoteState = (value: boolean) => { setQuoteOpen(value); if (!value) { setQuoteSent(false); setQuoteProduct(""); } };
  useEffect(() => {
    const handleProductQuote = (event: Event) => {
      const quoteEvent = event as CustomEvent<{ product?: string }>;
      setQuoteProduct(quoteEvent.detail?.product ?? "");
      setQuoteSent(false);
      setQuoteOpen(true);
    };
    window.addEventListener("karossy:quote", handleProductQuote);
    return () => window.removeEventListener("karossy:quote", handleProductQuote);
  }, []);
  const handleQuoteSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const product = String(form.get("product") || "");
    const destination = String(form.get("destination") || "");
    const quantity = String(form.get("quantity") || "");
    const requirements = String(form.get("requirements") || "");
    const subject = encodeURIComponent(`Karossy Foods quote request — ${product || "New enquiry"}`);
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone / WhatsApp: ${phone}\nProduct required: ${product}\nDestination market: ${destination}\nEstimated quantity: ${quantity}\nRequirements:\n${requirements}`);
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    setQuoteSent(true);
  };
  return <header className={`${inverse ? "site-header site-header-inverse" : "site-header"}${innerPage ? " site-header-inner-green" : ""}${scrolled ? " site-header-scrolled" : ""}`} style={{paddingBottom: '14px', paddingTop: '14px'}}>
    <div className="site-shell header-inner">
      <Link href="/" className="brand-link"><BrandMark light={inverse || innerPage} /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href} data-nav-hint={item.hint} className={isActive(item.href) ? "nav-link nav-link-active" : "nav-link"}>{item.label}</Link>)}</nav>
      <button type="button" onClick={() => { setQuoteProduct(""); updateQuoteState(true); }} className={inverse || innerPage ? "header-cta header-cta-inverse" : "header-cta"}>Request a quote <ArrowUpRight size={15} strokeWidth={2.2} /></button>
      <button type="button" className="mobile-menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {open && <div className="mobile-menu"><div className="site-shell mobile-menu-inner">{navItems.map((item, index) => { const Icon = item.icon; const active = isActive(item.href); return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={active ? "mobile-nav-link mobile-nav-active" : "mobile-nav-link"} style={{ transitionDelay: `${index * 45}ms` }}><span className="mobile-nav-icon"><Icon size={17} strokeWidth={1.9} /></span><span className="mobile-nav-label">{item.label}</span></Link>; })}<button type="button" onClick={() => { setOpen(false); setQuoteProduct(""); updateQuoteState(true); }} className="button button-saffron mobile-enquiry">Request a wholesale quote <ArrowUpRight size={17} /></button><div className="mobile-quick-contact"><span>Quick contact</span><a href={`mailto:${contactDetails.email}`}><Mail size={15} />{contactDetails.email}</a><a href={`tel:${contactDetails.primaryPhoneTel}`}><Phone size={15} />{contactDetails.primaryPhone}</a><a href={`tel:${contactDetails.internationalPhoneTel}`}><Phone size={15} />{contactDetails.internationalPhone}</a><a href={whatsappEnquiryUrl("Hello Karossy Foods, I would like to make an enquiry.")} target="_blank" rel="noreferrer"><MessageCircle size={15} />Chat on WhatsApp</a></div></div></div>}
    <Dialog open={quoteOpen} onOpenChange={updateQuoteState}><DialogContent className="quote-dialog-shell"><DialogHeader><div className="quote-dialog-route"><img src={monogram} alt="" /><span>Karossy export desk</span><i>Crop → quantity → destination</i></div><DialogTitle>{quoteSent ? "Your enquiry is ready to send." : "Start your export brief."}</DialogTitle><DialogDescription>{quoteSent ? <>Your email application should now be open with the details you provided. If it did not open, email us directly at {contactDetails.email}.</> : "Share the crop or product, quantity and destination. We will review suitable supply options for your brief."}</DialogDescription></DialogHeader>{quoteSent ? <div className="quote-success"><CheckCircle2 size={23} /><p>Thank you. Your sourcing brief is prepared for the Karossy Foods export desk.</p><button type="button" className="button button-forest" onClick={() => updateQuoteState(false)}>Close</button></div> : <form className="quote-form" onSubmit={handleQuoteSubmit}><div className="quote-form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Company name<input name="company" placeholder="Company name" /></label></div><div className="quote-form-row"><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone / WhatsApp<input name="phone" placeholder="Contact number" /></label></div><div className="quote-form-row"><label>Crop / product required<input key={quoteProduct} required name="product" defaultValue={quoteProduct} placeholder="For example: Ijebu Garri" /></label><label>Destination market<input required name="destination" placeholder="Country or market" /></label></div><label>Estimated quantity<input name="quantity" placeholder="Expected quantity" /></label><label>Your supply brief<textarea required name="requirements" rows={4} placeholder="Tell us about your pack, timing and supply requirements." /></label><button type="submit" className="button button-saffron">Prepare export brief <ArrowUpRight size={17} /></button><p className="quote-form-note">Submitting opens your email application with the information you provide. No data is stored by this website.</p></form>}</DialogContent></Dialog>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-shell footer-grid"><div className="footer-brand"><BrandMark light /><p>Nigerian ingredients for retail, wholesale and export buyers.</p></div><div className="footer-list"><span className="footer-label">Explore</span><Link href="/about">About us</Link><Link href="/products">Our products</Link><Link href="/gallery">Gallery</Link><Link href="/export">Export & wholesale</Link><Link href="/quality">Quality & sourcing</Link></div><div className="footer-list"><span className="footer-label">Speak with us</span><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a><a href={`tel:${contactDetails.primaryPhoneTel}`}>{contactDetails.primaryPhone}</a><a href={`tel:${contactDetails.internationalPhoneTel}`}>{contactDetails.internationalPhone}</a><span>{contactDetails.address}</span><Link href="/contact">Request a quote <ArrowUpRight size={14} /></Link></div></div><div className="site-shell footer-base"><span>© 2026 Karossy Foods Limited</span><a className="footer-credit" href="https://ashflexwebdesign.com/" target="_blank" rel="noreferrer">Powered by Ashflex</a><span>Sourcing routes from Nigeria to your market.</span></div></footer>;
}

export function PageLead({ eyebrow, title, description, bannerImage, bannerPosition = "center", bannerVariant = "standard" }: { eyebrow: string; title: ReactNode; description: string; bannerImage?: string; bannerPosition?: string; bannerVariant?: "standard" | "about" | "products" | "export" | "quality" | "gallery" }) {
  const bannerStyle = bannerImage ? { "--page-lead-image": `url(${bannerImage})`, "--page-lead-position": bannerPosition } as CSSProperties : undefined;
  return <section className={bannerImage ? `page-lead page-lead-image page-lead-image-${bannerVariant}` : "page-lead"} style={bannerStyle}>{bannerImage && <><div className="page-lead-media" aria-hidden="true" /><div className="page-lead-seal" aria-hidden="true"><img src={monogram} alt="" /><span>Karossy<br />sourcing route</span></div></>}<div className="page-route-spine" aria-hidden="true"><i /><i /><i /></div><div className="site-shell page-lead-grid"><div className="page-lead-meta"><Breadcrumbs inverse={Boolean(bannerImage)} items={[{ label: eyebrow }]} /><div className="route-kicker"><span /> {eyebrow}</div></div><div className="page-lead-copy"><h1>{title}</h1><p>{description}</p></div></div></section>;
}
