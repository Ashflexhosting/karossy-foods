/** Meridian Pantry utility page: provides a clear return route without breaking the design system. */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteLayout";

export default function NotFound() {
  return <div className="not-found"><SiteHeader /><main className="site-shell not-found-main"><span>404 / Route interrupted</span><h1>This page is not on the current route.</h1><Link href="/" className="button button-forest"><ArrowLeft size={17} /> Return home</Link></main></div>;
}
