/** Meridian Pantry routes: lazy inner-page handovers reduce initial delivery while maintaining clear buyer return paths. */
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhatsAppAction from "./components/WhatsAppAction";
import RouteFeedback from "./components/RouteFeedback";
import "./styles/readability-enhancement.css";
import "./styles/route-refinement.css";

const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Export = lazy(() => import("./pages/Export"));
const Quality = lazy(() => import("./pages/Quality"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Gallery = lazy(() => import("./pages/Gallery"));

function RouteLoading() { return <main className="route-loading" aria-live="polite" aria-busy="true">Loading sourcing route</main>; }
function AppRoutes() { return <Suspense fallback={<RouteLoading />}><Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/origin" component={About} /><Route path="/products/:slug" component={ProductDetail} /><Route path="/products" component={Products} /><Route path="/gallery" component={Gallery} /><Route path="/export" component={Export} /><Route path="/quality" component={Quality} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch></Suspense>; }
function RoutedApp() { return <><RouteFeedback /><AppRoutes /></>; }
function Router() { return import.meta.env.VITE_DEPLOY_TARGET === "github-pages" ? <WouterRouter hook={useHashLocation}><RoutedApp /></WouterRouter> : <RoutedApp />; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /><WhatsAppAction /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
