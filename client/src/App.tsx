/** Meridian Pantry routes: every public page maintains clear return paths and high-intent quote access. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Export from "./pages/Export";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import "./styles/readability-enhancement.css";
import "./styles/route-refinement.css";

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/origin" component={About} /><Route path="/products/:slug" component={ProductDetail} /><Route path="/products" component={Products} /><Route path="/export" component={Export} /><Route path="/quality" component={Quality} /><Route path="/contact" component={Contact} /><Route component={NotFound} /></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
