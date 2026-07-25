import { redirect } from "next/navigation";

// Digantikan Business Checkup (Control/instruksi_claude_code_website_pivot.md) --
// redirect dipertahankan supaya link lama (mis. bio Instagram) tidak 404.
export default function CobaGratisPage() {
  redirect("/business-checkup");
}
