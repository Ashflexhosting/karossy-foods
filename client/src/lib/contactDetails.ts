/** Meridian Pantry content source: approved Karossy Foods contact details are shared here so every buyer touchpoint stays aligned. */
export const contactDetails = {
  email: "info@karossyfoods.com",
  address: "Suite 45, NAF Shopping Plaza, Local Airport Road, Lagos, Nigeria.",
  primaryPhone: "+234(802)054-3007",
  primaryPhoneTel: "+2348020543007",
  internationalPhone: "+44(759)771-0383",
  internationalPhoneTel: "+447597710383",
} as const;

export const whatsappEnquiryUrl = (message: string) => `https://wa.me/${contactDetails.primaryPhoneTel.slice(1)}?text=${encodeURIComponent(message)}`;
