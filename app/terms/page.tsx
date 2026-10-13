import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalContact, type LegalSectionData } from "@/components/landing/legal-page";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — OneBizPro",
  description:
    "The terms that govern your use of the OneBizPro website and platform, including planned TikTok account integration, AI-generated analysis, and third-party services.",
  alternates: { canonical: `${LEGAL.siteUrl}/terms` },
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    body: (
      <>
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the OneBizPro website at{" "}
          <a href={LEGAL.siteUrl}>onebizpro.id</a>, the OneBizPro platform at{" "}
          <a href={LEGAL.platformUrl}>app.onebizpro.id</a>, and related features and communications
          (together, the “Services”). The Services are operated by {LEGAL.companyName} (“OneBizPro”,
          “we”, “us”).
        </p>
        <p>
          By accessing or using the Services, you agree to these Terms and to our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you use the Services on behalf of a business
          or organisation, you confirm that you are authorised to bind it to these Terms. If you do not
          agree, please do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "Description of OneBizPro Services",
    body: (
      <>
        <p>
          OneBizPro is an AI-powered business platform that helps businesses and organisations run
          their operations and understand how they are performing. Depending on the modules and plan
          you use, this may include accounting, customer and sales management, booking, project
          management, team management, point-of-sale, and an AI business assistant. The website also
          offers a free “Business Checkup” that suggests a suitable package based on a few answers you
          provide.
        </p>
        <p>
          <strong>Planned social media features.</strong> We are developing features that allow you to
          connect social media accounts, starting with TikTok, to analyse content and video
          performance and to help optimise affiliate marketing activity. These features are under
          development and are not guaranteed to be available to every user. What is actually offered
          depends on our implementation, your consent, and the permissions granted by the platform
          provider. Descriptions of planned features are not a promise of availability or timing.
        </p>
        <p>
          Features may change over time. Pricing, plan scope, and any free or special programme
          (including eligibility, which we determine in our discretion) are communicated and agreed
          separately and may be subject to additional written terms.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "User Accounts and Responsibilities",
    body: (
      <>
        <p>Some features require an account on the OneBizPro platform. If you have an account, you agree to:</p>
        <ul>
          <li>provide accurate and current information and keep it up to date;</li>
          <li>keep your login credentials confidential and be responsible for all activity under your account;</li>
          <li>notify us promptly if you suspect unauthorised use of your account;</li>
          <li>
            use only accounts, data, and third-party profiles (for example a TikTok account) that you
            own or are authorised to manage.
          </li>
        </ul>
        <p>
          You are responsible for the data and content you submit or connect to the Services, and for
          having the right, consent, or other lawful basis to do so. This includes personal data of
          your own customers, staff, or audiences that you enter into the platform: for that data you
          are responsible as the party deciding how it is used, and we process it on your behalf to
          provide the Services. You are also responsible for complying with the laws that apply to
          your business.
        </p>
        <p>
          Information you give us through the Business Checkup or contact forms (such as your name,
          business name, and WhatsApp number) must be accurate, and you confirm you are entitled to
          provide it. By submitting it, you agree that our team may contact you about your enquiry.
        </p>
        <p>You must be able to enter into a binding contract under the law that applies to you.</p>
      </>
    ),
  },
  {
    id: "tiktok",
    title: "TikTok Integration and Third-Party Services",
    body: (
      <>
        <p>
          Where available, you may choose to connect a TikTok account to OneBizPro using TikTok’s
          official authorisation (OAuth) flow. Connecting is voluntary. We will only access the
          categories of data covered by the permissions you grant and that TikTok has approved for our
          application. See our <Link href="/privacy">Privacy Policy</Link> for details on the data
          involved and how to disconnect.
        </p>
        <ul>
          <li>
            <strong>TikTok’s own terms apply.</strong> Your use of TikTok remains subject to TikTok’s
            terms of service, community guidelines, and privacy policy. OneBizPro is an independent
            company and is not affiliated with, endorsed by, or sponsored by TikTok. TikTok and
            related names and marks belong to their respective owners.
          </li>
          <li>
            <strong>Platform changes.</strong> TikTok may change, limit, or withdraw API access,
            permissions, or data availability at any time. Features that depend on TikTok may change or
            stop working as a result, and we are not responsible for decisions made by TikTok.
          </li>
          <li>
            <strong>Your compliance.</strong> You are responsible for making sure your content,
            affiliate activity, and promotions comply with TikTok’s rules and applicable law,
            including any required disclosure of sponsored or affiliate content.
          </li>
          <li>
            <strong>You stay in control.</strong> You may revoke OneBizPro’s access at any time, as
            described in our Privacy Policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI-Generated Analysis and Recommendations",
    body: (
      <>
        <p>
          The Services use artificial intelligence and automated processing to generate analysis,
          summaries, insights, scores, and recommendations from data you provide or connect. These
          outputs are produced automatically and may be inaccurate, incomplete, out of date, or not
          suitable for your situation.
        </p>
        <ul>
          <li>
            Outputs are provided for general information only and are not financial, legal, tax,
            accounting, or other professional advice.
          </li>
          <li>You are responsible for your decisions and should review and verify outputs before relying on them.</li>
          <li>
            We do not guarantee any result, such as views, engagement, follower growth, sales, or
            affiliate earnings. Results on third-party platforms depend on factors outside our control,
            including those platforms’ algorithms and policies.
          </li>
          <li>
            The package suggested by the Business Checkup is indicative only and is based on the
            limited answers you give.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the Services in violation of any law or the rights of others;</li>
          <li>
            use data from a connected platform (including TikTok) in a way that breaches that
            platform’s terms or policies, or try to circumvent its restrictions;
          </li>
          <li>submit or process personal data of others without a lawful basis or the required consent;</li>
          <li>attempt to gain unauthorised access to, probe, disrupt, or overload the Services or related systems;</li>
          <li>upload malicious code, or use the Services to send spam or to deceive or defraud others;</li>
          <li>
            use the Services or AI features to create unlawful, misleading, or harmful content, or to
            artificially inflate engagement or other metrics;
          </li>
          <li>
            scrape or access the Services by automated means beyond what we expressly permit, or
            reverse engineer the Services except where the law allows it;
          </li>
          <li>resell or make the Services available to third parties without our written agreement.</li>
        </ul>
        <p>
          We may suspend or terminate access to the Services, or disconnect an integration, if we
          reasonably believe these Terms have been breached or that your use creates risk for us, other
          users, or third parties. You may stop using the Services at any time.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          The Services, including software, design, text, graphics, and trademarks, are owned by{" "}
          {LEGAL.companyName} or its licensors and are protected by applicable intellectual property
          laws. Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
          revocable right to use the Services for your own business or organisation.
        </p>
        <p>
          You keep ownership of the content and data you submit or connect. You grant us a limited
          licence to host, process, and analyse that content and data (including through AI and
          automated workflows) solely to provide and improve the Services and as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you give us feedback or suggestions, we may
          use them without obligation to you. Third-party names and marks, such as TikTok, WhatsApp,
          and Meta, belong to their respective owners.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services and External Links",
    body: (
      <p>
        The Services may rely on, integrate with, or link to services operated by others, such as
        TikTok, WhatsApp, Meta, and hosting and infrastructure providers. We do not control these
        services and are not responsible for their content, availability, or practices. Your use of
        them is subject to their own terms and policies.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Service Availability and Disclaimer",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, the Services are provided “as is” and “as
          available”. We do not warrant that the Services will be uninterrupted, error-free, or secure,
          or that any output or integration will be accurate, complete, or fit for a particular
          purpose.
        </p>
        <p>
          The Services may be unavailable from time to time because of maintenance, technical issues,
          or third-party outages or changes (for example to a platform’s API). Features that are new,
          planned, or in development may change or be discontinued. Nothing in these Terms excludes
          rights that cannot be excluded under mandatory law.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, {LEGAL.companyName} will not be liable for any
          indirect, incidental, special, or consequential loss, or for loss of profits, revenue, data,
          or goodwill, arising from or related to your use of, or inability to use, the Services. This
          includes loss arising from AI-generated outputs or from actions or changes made by
          third-party platforms.
        </p>
        <p>
          To the maximum extent permitted by law, our total liability for any claim relating to the
          Services will not exceed the amount you paid us for the relevant Services in the twelve (12)
          months before the event giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Disputes",
    body: (
      <p>
        These Terms are governed by the laws of the Republic of Indonesia. If a dispute arises, we
        encourage you to contact us first so that we can try to resolve it amicably.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. The current version is always available on this
        page, and we will take reasonable steps to let you know about material changes. If you keep
        using the Services after an update takes effect, you accept the updated Terms. If you do not
        agree, please stop using the Services.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    body: (
      <>
        <p>If you have questions about these Terms, you can reach us here:</p>
        <LegalContact waMessage="Hello, I have a question about the OneBizPro Terms of Service." />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <p>
          Please read these Terms carefully. They explain the rules for using OneBizPro, including
          what to expect from AI-generated analysis and from third-party integrations such as TikTok.
        </p>
      }
      sections={SECTIONS}
      otherDoc={{ href: "/privacy", label: "Privacy Policy" }}
    />
  );
}
