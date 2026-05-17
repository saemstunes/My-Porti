import ceka0 from "../../../assets/images/projects/ceka/0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "CEKA",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "cloudflare", "capacitor"],
  videoBorder: false,
  live: "https://civiceducationkenya.com",
  description:
    "Civic Education Kenya (CEKA) is an open-source civic technology platform designed to close the information and accountability gap in Kenyan democratic processes.<br/><br/>The platform includes a geocoding pipeline for 24,000+ voter registration centres, a zero-server privacy voter card generator (Niko Kadi), and an offline-capable mesh networking tool (Nasaka WEWE).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ceka0,
        alt: "CEKA Platform",
        caption: "Bridge the Gap - Civic Technology for Kenya",
      },
    },
    {
      type: "text",
      props: {
        title: "Nasaka IEBC",
        text: "A stratified multi-provider geocoding pipeline that processed 24,000+ IEBC voter registration centres, using Ministry of Education school data as a high-value fuzzy-match layer to resolve imprecise source data.",
      },
    },
    {
      type: "text",
      props: {
        title: "Malpractice Reporting",
        text: "A documentation-heavy microsite for reporting electoral malpractice, featuring client-side OCR, behavioral bot detection, and a real-time Telegram notification pipeline.",
      },
    },
  ],
} as const satisfies ProjectContent;
