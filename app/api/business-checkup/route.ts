import { NextRequest, NextResponse } from "next/server";
import { runCheckup, type CheckupAnswers } from "@/lib/business-checkup/scoring";
import { buildDiagnosis, buildRecommendationReason, buildPriorities } from "@/lib/business-checkup/narrative";
import {
  EMPLOYEE_COUNT_OPTIONS,
  CHALLENGE_OPTIONS,
  SOFTWARE_OPTIONS,
} from "@/lib/business-checkup/questions";
import { waLink } from "@/lib/whatsapp";

const LEAD_API_BASE = process.env.NEXT_PUBLIC_LEAD_API_URL ?? "";

const EMPLOYEE_VALUES: string[] = EMPLOYEE_COUNT_OPTIONS.map((o) => o.value);
const CHALLENGE_VALUES: string[] = CHALLENGE_OPTIONS.map((o) => o.value);
const SOFTWARE_VALUES: string[] = SOFTWARE_OPTIONS.map((o) => o.value);

function parseAnswers(body: unknown): CheckupAnswers | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  if (
    typeof b.employeeCount !== "string" ||
    !Array.isArray(b.biggestChallenges) ||
    b.biggestChallenges.length === 0 ||
    !b.biggestChallenges.every((c) => typeof c === "string" && CHALLENGE_VALUES.includes(c)) ||
    typeof b.currentSoftware !== "string" ||
    !EMPLOYEE_VALUES.includes(b.employeeCount) ||
    !SOFTWARE_VALUES.includes(b.currentSoftware)
  ) {
    return null;
  }
  return {
    employeeCount: b.employeeCount as CheckupAnswers["employeeCount"],
    biggestChallenges: b.biggestChallenges as CheckupAnswers["biggestChallenges"],
    currentSoftware: b.currentSoftware as CheckupAnswers["currentSoftware"],
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const answers = parseAnswers(body);
  if (!answers) {
    return NextResponse.json({ error: "Jawaban assessment tidak lengkap" }, { status: 400 });
  }

  const result = runCheckup(answers);
  const diagnosis = buildDiagnosis(answers);
  const recommendationReason = buildRecommendationReason(answers, result);
  const priorities = buildPriorities(answers);

  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const businessName = typeof b.businessName === "string" ? b.businessName.trim() : "";
  const whatsapp = typeof b.whatsapp === "string" ? b.whatsapp.trim() : "";
  const hasContact = Boolean(name && businessName && whatsapp);

  let leadSaved = false;
  let fallbackWaLink: string | null = null;

  if (hasContact && LEAD_API_BASE) {
    try {
      const res = await fetch(`${LEAD_API_BASE}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          businessName,
          venueType: "Business Checkup",
          whatsapp,
          source: "business_checkup",
          utmCampaign: typeof b.utmCampaign === "string" ? b.utmCampaign : undefined,
          utmContent: typeof b.utmContent === "string" ? b.utmContent : undefined,
          employeeCount: answers.employeeCount,
          // Platform's MarketingLead.biggestChallenge tetap satu kolom string -- gabung
          // pakai ", " daripada migrasi Platform ke array, cukup untuk kebutuhan Sales baca.
          biggestChallenge: answers.biggestChallenges.join(", "),
          currentSoftware: answers.currentSoftware,
          businessHealthScore: result.businessHealthScore,
          businessStage: result.businessStage,
          recommendedPackage: result.recommendedPackage,
        }),
      });
      leadSaved = res.ok;
    } catch {
      leadSaved = false;
    }
  } else if (hasContact) {
    fallbackWaLink = waLink(
      `Halo, saya ${name} dari ${businessName}. Saya baru selesai Business Checkup, hasilnya paket ${result.recommendedPackage}. Saya ingin konsultasi lebih lanjut.`
    );
  }

  return NextResponse.json({
    ok: true,
    leadSaved,
    fallbackWaLink,
    result: { ...result, diagnosis, recommendationReason, priorities },
  });
}
