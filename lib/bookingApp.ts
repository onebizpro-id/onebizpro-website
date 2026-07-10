export const BOOKING_APP_URL =
  process.env.NODE_ENV === "production"
    ? "https://app.onebizpro.id"
    : process.env.NEXT_PUBLIC_BOOKING_APP_URL || "http://localhost:3000";
