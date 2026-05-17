import nod0 from "../../../assets/images/projects/nod/0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Number Our Days",
  theme: "light",
  tags: ["react", "typescript", "supabase", "capacitor", "paystack"],
  videoBorder: true,
  live: "https://nod.saemstunes.com",
  description:
    "Number Our Days (NOD) is a faith-focused Christian mobile app designed as a daily companion for spiritual growth.<br/><br/>It features a dynamic flame animation system tied to spiritual activity, a freemium monetization model powered by Paystack and M-Pesa, and custom iOS-inspired email templates.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: nod0,
        alt: "NOD App",
        caption: "A Christian Daily Companion",
      },
    },
    {
      type: "text",
      props: {
        title: "Dynamic Activity Feedback",
        text: "Implemented a procedural flame animation system that changes intensity and color based on the user's prayer and study streaks, encouraging consistent spiritual practice.",
      },
    },
  ],
} as const satisfies ProjectContent;
