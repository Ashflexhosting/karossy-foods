/** Meridian Pantry product data: approved category content with quote-led specifications until commercial data is formally supplied. */
export type ProductCategory = {
  slug: string;
  name: string;
  label: string;
  summary: string;
  buyerFocus: string;
  routeNote: string;
  items: string[];
  className: string;
  image: string;
  imageAlt: string;
};

export const productCategories: ProductCategory[] = [
  { slug: "kilishi", name: "Kilishi & dried meat", label: "Dried meat", summary: "Traditional Nigerian dried meat products and African meat snacks.", buyerFocus: "For buyers sourcing the spiced, dried-meat character of Kilishi for retail, restaurant and wholesale requirements.", routeNote: "Kilishi / authentic Nigerian dried-meat selection", items: ["Kilishi", "Dried meat snacks"], className: "assortment-fruit", image: "/manus-storage/karossy-kilishi-dried-meat_72d30bf1.jpg", imageAlt: "Nigerian dried meat arranged in a woven basket" },
  { slug: "palm-oil", name: "Palm oil & condiments", label: "Cooking essentials", summary: "Nigerian palm oil and traditional cooking ingredients.", buyerFocus: "For buyers looking to build a reliable range around the colour, warmth and character of African cooking essentials.", routeNote: "Palm oil / Nigerian cooking essentials", items: ["Nigerian palm oil", "Cooking condiments"], className: "assortment-botanical", image: "/manus-storage/karossy-palm-oil-condiments_ec23c1b7.jpg", imageAlt: "Nigerian palm oil and cooking condiments" },
  { slug: "garri", name: "Garri & cassava products", label: "Nigerian staples", summary: "Ijebu Garri and other cassava-based staples.", buyerFocus: "For retailers, distributors and food businesses seeking recognisable Nigerian staple products.", routeNote: "Staple foods from Nigeria", items: ["Ijebu Garri", "Cassava staples"], className: "assortment-grain", image: "/manus-storage/karossy-garri-cassava_e23232ee.jpg", imageAlt: "Ijebu Garri in a wooden bowl with cassava" },
  { slug: "dried-fish", name: "Dried fish & seafood", label: "Seafood selection", summary: "Selected dried fish products for African food markets.", buyerFocus: "For buyers planning a selected dried seafood offering suited to African food retail and food-service needs.", routeNote: "Selected seafood sourcing", items: ["Dried fish", "Seafood selections"], className: "assortment-botanical", image: "/manus-storage/karossy-dried-fish-seafood_77f4d1c2.jpg", imageAlt: "Selected dried fish and seafood in a woven tray" },
  { slug: "nuts-seeds", name: "Nuts & seeds", label: "Natural pantry", summary: "African nuts and seeds for retail and wholesale buyers.", buyerFocus: "For buyers seeking versatile pantry ingredients across retail, wholesale and commercial requirements.", routeNote: "Natural African pantry ingredients", items: ["Nuts", "Seeds"], className: "assortment-grain", image: "/manus-storage/karossy-nuts-seeds_f8b3f1be.jpg", imageAlt: "African nuts and seeds arranged in woven bowls" },
  { slug: "spices", name: "Spices & traditional ingredients", label: "Aromatic pantry", summary: "Authentic ingredients used in Nigerian and African cooking.", buyerFocus: "For retailers and restaurants seeking the aroma, flavour and familiarity of traditional African ingredients.", routeNote: "Aromatic sourcing for African cooking", items: ["Spices", "Traditional ingredients"], className: "assortment-fruit", image: "/manus-storage/karossy-spices-traditional-ingredients_3d54b592.jpg", imageAlt: "African spices and traditional cooking ingredients" },
  { slug: "other-african-foods", name: "Other African food products", label: "More to explore", summary: "Additional authentic African food products for suitable enquiries.", buyerFocus: "For buyers with a specific product, format or market need beyond the listed range.", routeNote: "Custom African food sourcing", items: ["Product range on request", "Market-led selections"], className: "assortment-botanical", image: "/manus-storage/karossy-african-food-selection_44230189.jpg", imageAlt: "Curated selection of African pantry ingredients" },
];

export const commercialSpecificationGroups = [
  { title: "Pack & format", items: ["Retail pack sizes", "Wholesale / bulk packs", "Packaging format"] },
  { title: "Handling", items: ["Ingredients & allergen information", "Shelf life", "Storage requirements"] },
  { title: "Supply", items: ["Case configuration", "Minimum order quantity", "Export suitability"] },
];
