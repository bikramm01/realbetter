import type { Metadata } from "next";
import SubscriptionClient from "./SubscriptionClient";

export const metadata: Metadata = {
  title: "RealBetter Pro – ₹3,000/Month Subscription for Real Estate Agents",
  description:
    "Subscribe to RealBetter Pro for ₹3,000/month. Access verified inventory, builder floors, resale, premium deals, and tools built exclusively for real estate agents.",
};

export default function SubscriptionPage() {
  return <SubscriptionClient />;
}
