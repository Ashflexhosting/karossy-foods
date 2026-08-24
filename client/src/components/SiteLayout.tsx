/**
 * Meridian Pantry design system: Canopy Green, harvest saffron, and a visible route-spine
 * create the premium Nigerian food-export identity used across Karossy Foods pages.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const mark = "/manus-storage/karossy-logomark_32223915.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Export & Wholesale", href: "/export" },
  { label: "Quality & Sourcing", href: "/quality" },
];

export function BrandMark({ light = false }: { light?: boolean }) {
  return <div className="brand-lockup" aria-label="Karossy Foods Limited"><img src={mark} alt="" className="brand-mark" /><span className={light ? "brand-name brand-name-light" : "brand-name"}>Karossy<span>Foods</span></span></div>;
}

export function SiteHeader({ inverse = false }: { inverse?: boolean }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [location]);
  return <header className={inverse ? "site-header site-header-inverse" : "site-header"}>
    <div className="site-shell header-inner">
      <Link href="/" className="brand-link"><BrandMark light={inverse} /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className={location === item.href || (item.href === "/about" && location === "/origin") ? "nav-link nav-link-active" : "nav-link"}>{item.label}</Link>)}</nav>
      <Link href="/contact" className={inverse ? "header-cta header-cta-inverse" : "header-cta"}>Request a quote <ArrowUpRight size={15} strokeWidth={2.2} /></Link>
      <button type="button" className="mobile-menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
    {open && <div className="mobile-menu"><div className="site-shell mobile-menu-inner">{navItems.map((item, index) => <Link key={item.href} href={item.href} className={location === item.href ? "mobile-nav-link mobile-nav-active" : "mobile-nav-link"} style={{ transitionDelay: `${index * 45}ms` }}><span>0{index + 1}</span>{item.label}</Link>)}<Link href="/contact" className="button button-saffron mobile-enquiry">Request a wholesale quote <ArrowUpRight size={17} /></Link></div></div>}
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-shell footer-grid"><div className="footer-brand"><BrandMark light /><p>Premium African foods, sourced from Nigeria.</p></div><div className="footer-list"><span className="footer-label">Explore</span><Link href="/about">About us</Link><Link href="/products">Our products</Link><Link href="/export">Export & wholesale</Link><Link href="/quality">Quality & sourcing</Link></div><div className="footer-list"><span className="footer-label">Speak with us</span><a href="mailto:info@karossyfoods.com">info@karossyfoods.com</a><a href="tel:+2348036481214">+234 803 648 1214</a><Link href="/contact">Request a quote <ArrowUpRight size={14} /></Link></div></div><div className="site-shell footer-base"><span>© 2026 Karossy Foods Limited</span><span>Authentic African Foods. From Nigeria to the World.</span></div></footer>;
}

export function PageLead({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description: string }) {
  return <section className="page-lead"><div className="page-route-spine" aria-hidden="true"><i /><i /><i /></div><div className="site-shell page-lead-grid"><div className="route-kicker"><span /> {eyebrow}</div><div><h1>{title}</h1><p>{description}</p></div></div></section>;
}
