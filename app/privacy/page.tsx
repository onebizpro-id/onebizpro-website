import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalContact, type LegalSectionData } from "@/components/landing/legal-page";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — OneBizPro",
  description:
    "How OneBizPro collects, uses, and protects personal information, including TikTok account authorization, AI processing, data retention, and how to request data deletion.",
  alternates: { canonical: `${LEGAL.siteUrl}/privacy` },
};

const SECTIONS: LegalSectionData[] = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Business Checkup and contact forms:</strong> your name, business or organisation
            name, WhatsApp number, type of business, and your answers (for example team size range,
            main challenges, and software currently used).
          </li>
          <li>
            <strong>Messages:</strong> what you send us, for example over WhatsApp.
          </li>
          <li>
            <strong>Platform account and business data:</strong> if you use the OneBizPro platform,
            the account and contact details you register with, and the business data you choose to
            enter or import (which depends on the modules you use).
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>
          When you visit our website we and our service providers may receive technical information
          such as your IP address, browser and device type, pages visited, the page that referred you,
          and campaign (UTM) parameters if you arrive from one of our ads.
        </p>
        <h3>Information from TikTok</h3>
        <p>
          If you choose to connect a TikTok account, we receive the TikTok data described in the
          sections below, limited to the permissions you grant.
        </p>
        <h3>Our role</h3>
        <p>
          For information about you that we collect for our own purposes (for example enquiries and
          website visits), {LEGAL.companyName} is the party responsible for that data. For personal
          data about your own customers, staff, or audiences that you enter into the platform, you
          decide how it is used and we process it on your behalf to provide the Services.
        </p>
      </>
    ),
  },
  {
    id: "tiktok-authorization",
    title: "TikTok Account Authorization",
    body: (
      <>
        <p>
          The TikTok integration is currently being developed and may not be available to all users.
          It will use TikTok’s official authorisation (OAuth) flow. Access to data from your TikTok
          account only happens after you complete that flow.
        </p>
        <ul>
          <li>
            You are redirected to TikTok’s own screen and sign in with TikTok directly. OneBizPro
            does not receive or store your TikTok password.
          </li>
          <li>The screen shows the permissions requested, and you decide whether to grant them.</li>
          <li>
            If you approve, TikTok gives us access tokens that let us request the permitted data on
            your behalf. We use these tokens only to retrieve the data described in this policy, and
            treat them as sensitive credentials.
          </li>
          <li>
            You can withdraw access at any time (see “Account Disconnection and Data Deletion”).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tiktok-data",
    title: "TikTok Data We Access",
    body: (
      <>
        <p>
          The data we can access is determined by the permissions TikTok approves for our application
          and that you grant. For the purpose of analysing content performance and supporting
          affiliate marketing optimisation, we expect to request the following categories, and only to
          the extent the corresponding permissions are approved and granted:
        </p>
        <ul>
          <li>
            <strong>Basic profile information:</strong> such as your TikTok display name, profile
            picture, and account identifier.
          </li>
          <li>
            <strong>Account statistics:</strong> such as follower, following, like, and video counts.
          </li>
          <li>
            <strong>Video information and performance:</strong> details of your videos (such as title
            or description, cover image, publish time, and link) and their engagement metrics (such as
            views, likes, comments, and shares).
          </li>
        </ul>
        <p>
          We will request only what is needed for the features described here. If we later need
          additional categories of data, we will update this policy first, and TikTok will show you
          the additional permissions for your approval.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>provide, operate, and maintain the Services and respond to your enquiries;</li>
          <li>
            contact you, including through WhatsApp, about your Business Checkup result, demos, and
            suitable packages;
          </li>
          <li>generate analysis, insights, and recommendations you request (see “AI Processing and Automated Analysis”);</li>
          <li>improve, secure, and troubleshoot the Services and prevent misuse;</li>
          <li>measure and optimise the performance of our advertising campaigns;</li>
          <li>comply with legal obligations and enforce our terms.</li>
        </ul>
        <p>
          <strong>TikTok data</strong> is used only to provide the features you ask for, such as
          showing analysis of your own content and video performance and generating recommendations
          for your account. We will not use it for purposes you have not been informed of.
        </p>
        <p>
          Where Indonesian personal data protection law applies, we rely on lawful bases such as your
          consent, performance of a contract or steps you request before entering into one, our
          legitimate interests, and compliance with legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "ai-processing",
    title: "AI Processing and Automated Analysis",
    body: (
      <>
        <p>
          We use AI models and automated workflows (including workflow automation tools such as n8n)
          to analyse data and generate insights. To do this, the data needed for a given analysis (for
          example video metrics or business data you provide) may be processed by AI and automation
          service providers acting on our behalf.
        </p>
        <ul>
          <li>AI outputs are generated automatically and may contain errors; see our <Link href="/terms">Terms of Service</Link>.</li>
          <li>
            The Business Checkup applies automated scoring to your answers to suggest a package. The
            resulting score, stage, and recommendation are saved with your enquiry for our internal
            use, and our team may review them when following up with you.
          </li>
          <li>Access by our personnel is limited to what is needed to operate and support the Services.</li>
        </ul>
        <p>The specific providers we use may change over time as we improve the Services.</p>
      </>
    ),
  },
  {
    id: "storage-security",
    title: "Data Storage and Security",
    body: (
      <>
        <p>
          Our website is hosted using Vercel. Information you submit through our forms is sent to our
          platform systems so that our team can follow up. Platform data is stored on infrastructure
          operated by us or by our cloud providers.
        </p>
        <p>
          We take reasonable technical and organisational measures intended to protect personal
          information, including the use of encrypted (HTTPS) connections for our website. No method
          of transmission or storage is completely secure, so we cannot guarantee absolute security.
          If a personal data breach occurs, we will notify affected individuals and the relevant
          authorities as required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing and Third-Party Processors",
    body: (
      <>
        <p>We share personal information only in the situations below.</p>
        <ul>
          <li>
            <strong>Service providers and processors</strong> that help us run the Services, such as
            hosting and infrastructure (for example Vercel), workflow automation, AI and model
            providers, and messaging (for example WhatsApp, operated by Meta). They may process data
            only to provide their services to us.
          </li>
          <li>
            <strong>Advertising and analytics:</strong> Meta receives information through the Meta
            Pixel on our website (see “Cookies and Website Analytics”). Meta’s own privacy policy
            applies to its use of that information.
          </li>
          <li>
            <strong>Legal and safety:</strong> when required by law, regulation, legal process, or a
            lawful request from authorities, or to protect the rights, safety, and security of
            OneBizPro, our users, or others.
          </li>
          <li>
            <strong>Business changes:</strong> in connection with a merger, acquisition, or sale of
            assets, subject to appropriate protections.
          </li>
          <li>
            <strong>With your consent or at your direction,</strong> and with other authorised users
            within your own business account.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <>
        <p>
          We keep personal information for as long as needed for the purposes in this policy, to
          comply with legal, accounting, and reporting requirements, and to resolve disputes and
          enforce our agreements. After that, we delete or anonymise it.
        </p>
        <ul>
          <li>
            <strong>Enquiry and lead information</strong> is kept while we are following up with you
            or maintaining a business relationship, and for as long as needed afterwards for the
            reasons above.
          </li>
          <li>
            <strong>TikTok data and access tokens</strong> are kept while your TikTok account remains
            connected and the data is needed to provide the features. When you disconnect, revoke
            access, or ask us to delete your data, we stop accessing your TikTok account and delete
            or anonymise the TikTok data and tokens we hold, except where we must keep information to
            meet a legal obligation or handle a dispute.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "disconnection-deletion",
    title: "Account Disconnection and Data Deletion",
    body: (
      <>
        <h3>Disconnecting your TikTok account</h3>
        <ul>
          <li>
            Revoke OneBizPro’s access at any time from the connected apps or authorisation settings
            in your TikTok account.
          </li>
          <li>Where the platform provides a disconnect option for the integration, you can also use it.</li>
          <li>Or contact us using the details in “Contact Information” and we will help you disconnect.</li>
        </ul>
        <p>
          After access is revoked we can no longer retrieve new data from your TikTok account. Data
          we already retrieved remains until it is deleted under this policy or at your request.
        </p>
        <h3>Requesting deletion of your data</h3>
        <ol>
          <li>
            <strong>Send a request</strong> through any contact method below, titled “Data Deletion
            Request”. Include your name, your business or organisation, the contact details you used
            with us, your TikTok username if the request concerns TikTok data, and whether you want
            only your TikTok data deleted or all of your data (including your platform account).
          </li>
          <li>
            <strong>We verify it is you.</strong> To protect against unauthorised requests, we may ask
            you to confirm your identity, for example by replying from the WhatsApp number or email
            you used with us.
          </li>
          <li>
            <strong>We delete or anonymise</strong> the personal data we hold about you and instruct
            our processors to do the same, then confirm back to you. We may keep limited information
            where the law requires it or where it is needed to handle a dispute.
          </li>
        </ol>
        <LegalContact waMessage="Data Deletion Request: I would like to request deletion of my data from OneBizPro." />
      </>
    ),
  },
  {
    id: "rights",
    title: "User Rights and Choices",
    body: (
      <>
        <p>
          Under Indonesian Law No. 27 of 2022 on Personal Data Protection and other applicable laws,
          you may have rights to:
        </p>
        <ul>
          <li>access personal data we hold about you and obtain a copy;</li>
          <li>have inaccurate or incomplete data corrected;</li>
          <li>have your data deleted or ask us to stop processing it, in the cases the law provides;</li>
          <li>withdraw consent you have given (this does not affect processing that happened before you withdrew it);</li>
          <li>object to certain processing, including automated decision-making in the cases the law provides;</li>
          <li>obtain your data in a commonly used format, where applicable.</li>
        </ul>
        <p>
          To exercise a right, contact us using the details in “Contact Information”. We may need to
          verify your identity first. You can also ask us to stop contacting you for marketing, and you
          can revoke TikTok access yourself at any time.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Website Analytics",
    body: (
      <>
        <p>
          At the time of writing, the advertising and analytics tool on our website is the{" "}
          <strong>Meta Pixel</strong>. It uses cookies and similar technologies to record, for
          example, page views and when a form is submitted (a “Lead” event), together with technical
          information such as page URLs, device and browser details, IP address, and cookie
          identifiers. We use this to measure and optimise our advertising. Our website may also use
          cookies or similar technologies that are strictly necessary for it to work.
        </p>
        <p>
          You can block or delete cookies in your browser settings, and manage ad preferences in your
          Meta account settings. Blocking cookies may affect how parts of the website work. If we add
          other analytics or advertising tools, we will update this policy.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    body: (
      <p>
        Some of our service providers (and TikTok and Meta themselves) may process information in
        countries other than Indonesia, where data protection laws may differ. Where required by
        applicable law, we take reasonable steps to make sure personal information that is
        transferred abroad remains appropriately protected.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    body: (
      <p>
        The Services are intended for businesses and organisations and are not directed to anyone
        under 18. We do not knowingly collect personal information from children. If you believe a
        child has given us personal information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this policy from time to time. The current version is always available on this
        page, and we will take reasonable steps to let you know about material changes. If we add new
        categories of TikTok data, we will update this policy before requesting them, and TikTok will
        ask for your approval through its own authorisation screen. See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    body: (
      <>
        <p>
          For privacy questions, to exercise your rights, or to request data deletion, contact:
        </p>
        <LegalContact waMessage="Hello, I have a privacy question about OneBizPro." />
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains how {LEGAL.companyName} (“OneBizPro”, “we”, “us”) collects, uses, and
          protects personal information when you visit our website, use the OneBizPro platform, or
          connect a TikTok account.
        </p>
      }
      notice={
        <p>
          <strong>About the TikTok integration:</strong> it is currently being developed and is
          subject to TikTok’s review and approval of our application. Where this policy describes
          TikTok data, it describes what we intend to access once the integration is available and
          you authorise it.
        </p>
      }
      sections={SECTIONS}
      otherDoc={{ href: "/terms", label: "Terms of Service" }}
    />
  );
}
