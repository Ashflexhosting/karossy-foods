/** Meridian Pantry quick-access control: a restrained floating WhatsApp handover keeps buyer conversations one tap away across every route. */
import { MessageCircle } from "lucide-react";
import { whatsappEnquiryUrl } from "@/lib/contactDetails";
import "@/styles/whatsapp-action.css";

export default function WhatsAppAction() {
  return <a className="whatsapp-action" href={whatsappEnquiryUrl("Hello Karossy Foods, I would like to make an enquiry.")} target="_blank" rel="noreferrer" aria-label="Chat with Karossy Foods on WhatsApp"><MessageCircle size={20} strokeWidth={2.3} /><span>WhatsApp</span></a>;
}
