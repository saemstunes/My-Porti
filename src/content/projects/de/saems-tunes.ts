import saems0 from "../../../assets/images/projects/saems-tunes/0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Saem's Tunes",
  theme: "dark",
  tags: ["mobile", "supabase", "firebase", "music-education"],
  videoBorder: false,
  description:
    "Saem's Tunes is a music school brand and mobile syllabus serving students across Nairobi and globally.<br/><br/>The Android application delivers structured singing fundamentals, breath support training, and performance techniques to parents and students through an integrated digital curriculum.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: saems0,
        alt: "Saem's Tunes App",
        caption: "Music School & Brand - Nairobi",
      },
    },
    {
      type: "text",
      props: {
        title: "Vocal Pedagogy",
        text: "Built a comprehensive music syllabus focusing on singing fundamentals, vocal technique, and stage performance, delivered via a custom-built mobile interface.",
      },
    },
  ],
} as const satisfies ProjectContent;
