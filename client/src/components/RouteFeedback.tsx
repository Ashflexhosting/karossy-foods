/** Meridian Pantry route feedback: every route handover resets to its opening context and receives a brief saffron progress cue. */
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "@/styles/route-feedback.css";

export default function RouteFeedback() {
  const [location] = useLocation();
  const [transitioning, setTransitioning] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setTransitioning(true);
    const timeout = window.setTimeout(() => setTransitioning(false), 420);
    return () => window.clearTimeout(timeout);
  }, [location]);
  return <div className={transitioning ? "route-transition route-transition-active" : "route-transition"} aria-hidden="true" />;
}
