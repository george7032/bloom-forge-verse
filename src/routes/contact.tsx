import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Embakasi Benedicta Academy" },
      { name: "description", content: "Get in touch with Embakasi Benedicta Academy. Call +254 110 380 560 or email us today." },
      { property: "og:title", content: "Contact Embakasi Benedicta Academy" },
      { property: "og:description", content: "Located in Utawala, Nairobi. Open Mon–Fri, 7 AM – 5 PM." },
    ],
  }),
  component: ContactPage,
});
