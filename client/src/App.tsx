/** Meridian Pantry routes: every public page maintains clear return paths and high-intent quote access. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Export from "./pages/Export";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import WhatsAppAction from "./components/WhatsAppAction";
import RouteFeedback from "./components/RouteFeedback";
import "./styles/readability-enhancement.css";
import "./styles/route-refinement.css";

function AppRoutes() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/origin" component={About} /><Route path="/products/:slug" component={ProductDetail} /><Route path="/products" component={Products} /><Route path="/gallery" component={Gallery} /><Route path="/export" component={Export} /><Route path="/quality" component={Quality} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>; }
function RoutedApp() { return <><RouteFeedback /><AppRoutes /></>; }
function Router() { return import.meta.env.VITE_DEPLOY_TARGET === "github-pages" ? <WouterRouter hook={useHashLocation}><RoutedApp /></WouterRouter> : <RoutedApp />; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /><WhatsAppAction /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
