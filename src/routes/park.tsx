import { createFileRoute } from "@tanstack/react-router";
import ParkPage from "@/components/pages/ParkPage";

export const Route = createFileRoute("/park")({
  head: () => ({
    meta: [
      { title: "Kids Amusement Park — Embakasi Benedicta Academy" },
      { name: "description", content: "The first school-based kids amusement park in Embakasi. Birthday packages, weekend fun and safe play zones." },
      { property: "og:title", content: "Kids Amusement Park in Embakasi" },
      { property: "og:description", content: "Bouncing castles, slides, rides and birthday packages — where fun meets learning." },
    ],
  }),
  component: ParkPage,
});
