import type { Metric } from "@/types";

export const metrics: Metric[] = [
  { target: 99, suffix: "%", label: "Guaranteed Platform Uptime" },
  { target: 50, suffix: "%", label: "Faster Checkout Operations" },
  { target: 0, suffix: "%", label: "Manual Ledger Reconciliation Needed" },
];
