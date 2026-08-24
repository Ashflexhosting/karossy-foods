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
  approvedSheet?: {
    productName: string;
    description: string;
    ingredients: string[];
    storage: string[];
    usage: string[];
    nutritionTitle: string;
    nutrition: { label: string; value: string }[];
    benefits?: string[];
    artwork: string;
    artworkAlt: string;
  };
};

export const productCategories: ProductCategory[] = [
  { slug: "kilishi", name: "Kilishi & dried meat", label: "Dried meat", summary: "Traditional Nigerian dried meat products and African meat snacks.", buyerFocus: "For buyers sourcing the spiced, dried-meat character of Kilishi for retail, restaurant and wholesale requirements.", routeNote: "Kilishi / authentic Nigerian dried-meat selection", items: ["Kilishi", "Dried meat snacks"], className: "assortment-fruit", image: "/manus-storage/karossy-kilishi-dried-meat_72d30bf1.jpg", imageAlt: "Nigerian dried meat arranged in a woven basket", approvedSheet: { productName: "Karossy Kilishi", description: "Relish beef snack made with beef, ginger, garlic, salt, dried pepper and peanut.", ingredients: ["Beef", "Ginger", "Garlic", "Salt", "Dried pepper", "Peanut"], storage: ["Refer to the approved product sheet for storage and handling guidance."], usage: ["Ready-to-eat beef snack."], nutritionTitle: "Nutrition facts shown per 35 g serving", nutrition: [{ label: "Calories", value: "350" }, { label: "Total fat", value: "14 g" }, { label: "Trans fat", value: "0 g" }, { label: "Protein", value: "48 g" }, { label: "Sodium", value: "276 mg" }, { label: "Carbohydrate", value: "6 g" }], artwork: "/manus-storage/kilishi-approved-sheet_cdfa9932.webp", artworkAlt: "Approved Karossy Kilishi product information sheet" } },
  { slug: "palm-oil", name: "Palm oil & condiments", label: "Cooking essentials", summary: "Nigerian palm oil and traditional cooking ingredients.", buyerFocus: "For buyers looking to build a reliable range around the colour, warmth and character of African cooking essentials.", routeNote: "Palm oil / Nigerian cooking essentials", items: ["Nigerian palm oil", "Cooking condiments"], className: "assortment-botanical", image: "/manus-storage/karossy-palm-oil-condiments_ec23c1b7.jpg", imageAlt: "Nigerian palm oil and cooking condiments", approvedSheet: { productName: "Karossy Foods Palm Oil", description: "Carefully sourced and traditionally processed to retain its rich red colour, natural flavour and essential nutrients; suitable for Nigerian soups, stews and sauces.", ingredients: ["100% pure palm oil", "No preservatives or artificial colouring"], storage: ["Store in a cool, dry place away from direct sunlight.", "Palm oil may solidify at low temperatures; place the container in warm water to liquefy."], usage: ["Suitable for preparing Nigerian soups, stews and sauces."], nutritionTitle: "Nutritional information per 100 g", nutrition: [{ label: "Energy", value: "884 kcal" }, { label: "Total fat", value: "100 g" }, { label: "Saturated fat", value: "50 g" }, { label: "Monounsaturated fat", value: "40 g" }, { label: "Polyunsaturated fat", value: "10 g" }, { label: "Vitamin A", value: "7000 IU" }], benefits: ["Rich in Vitamin A for good eyesight", "Contains healthy fats for energy", "Supports heart health when used in moderation"], artwork: "/manus-storage/palm-oil-approved-sheet_3fca0284.webp", artworkAlt: "Approved Karossy Palm Oil product information sheet" } },
  { slug: "garri", name: "Garri & cassava products", label: "Nigerian staples", summary: "Ijebu Garri and other cassava-based staples.", buyerFocus: "For retailers, distributors and food businesses seeking recognisable Nigerian staple products.", routeNote: "Staple foods from Nigeria", items: ["Ijebu Garri", "Cassava staples"], className: "assortment-grain", image: "/manus-storage/karossy-garri-cassava_e23232ee.jpg", imageAlt: "Ijebu Garri in a wooden bowl with cassava", approvedSheet: { productName: "Karossy Foods Ijebu Garri", description: "A finely processed, sour and crispy cassava granule made to deliver the authentic taste of Ijebu culture.", ingredients: ["100% cassava", "No additives or preservatives"], storage: ["Store in a cool, dry place.", "Keep in an airtight container after opening."], usage: ["Enjoy as a crunchy snack with cold water, sugar and groundnuts.", "Prepare smooth, stretchy eba by mixing with hot water.", "Suitable for light meals and quick energy boosts."], nutritionTitle: "Nutritional information per 100 g", nutrition: [{ label: "Energy", value: "355 kcal" }, { label: "Carbohydrates", value: "85 g" }, { label: "Protein", value: "2 g" }, { label: "Fat", value: "1 g" }, { label: "Fiber", value: "3 g" }], artwork: "/manus-storage/ijebu-garri-approved-sheet_c7f1ab09.jpg", artworkAlt: "Approved Karossy Ijebu Garri product information sheet" } },
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
