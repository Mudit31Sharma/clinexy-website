import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.clinexy.com";
  const lastmod = "2026-06-20";

  const coreRoutes = [
    "",
    "/about",
    "/appointment-booking-patient-reminders-for-solo-doctors",
    "/blog",
    "/case-studies",
    "/cliniko-alternative",
    "/compare",
    "/compliance",
    "/compliance/abdm",
    "/contact",
    "/doctor-branding-clinic-growth-software",
    "/doctor-branding-growth",
    "/features",
    "/guides",
    "/id",
    "/in",
    "/jane-alternative",
    "/my",
    "/online-presence",
    "/patient-growth",
    "/patient-management-system-for-solo-doctors-2",
    "/personal-website-for-doctors",
    "/ph",
    "/practice-management-software",
    "/practice-management-software-for-dentists",
    "/practice-management-software-for-doctors",
    "/practice-management-software-for-therapists",
    "/practo-alternative",
    "/pricing",
    "/pricing/solo-doctors",
    "/pricing/solo-doctors/global",
    "/pricing/solo-doctors/india",
    "/privacy",
    "/product",
    "/reports",
    "/security",
    "/sg",
    "/simplepractice-alternative",
    "/software-for-solo-doctors-to-manage-grow-their-clinic",
    "/solutions",
    "/teleconsultation-digital-prescriptions-for-doctors",
    "/templates",
    "/terms",
    "/why-clinexy",
    "/your-digital-clinic-identity",
  ];

  const blogSlugs = [
    "how-to-find-the-best-dentist-near-you",
    "solo-doctors-why-your-personal-brand-matters-more-than-your-degree",
    "the-complete-growth-guide-for-solo-doctors",
    "the-growth-engine-for-solo-doctors",
    "why-30-of-patients-dont-show-up",
    "your-digital-clinic-growth-assistant",
  ];

  const caseStudySlugs = [
    "dr-emma-wilson-london-gp",
    "dr-priya-pune-dentist",
    "solo-doctors",
  ];

  const comparisonSlugs = [
    "clinexy-vs-cliniko",
    "clinexy-vs-healthie",
    "clinexy-vs-jane",
    "clinexy-vs-mocdoc",
    "clinexy-vs-practo",
    "clinexy-vs-simplepractice",
  ];

  const featureSlugs = [
    "ai-appointment-assistant",
    "ai-patient-engagement",
    "appointments-reminders",
    "billing",
    "client-portal",
    "clinic-website-builder",
    "doctor-branding-growth",
    "doctor-seo-tools",
    "doctor-website",
    "google-business-profile",
    "google-review-automation",
    "local-seo",
    "online-booking",
    "patient-followup-system",
    "patient-management",
    "reviews-reputation",
    "teleconsultation-prescriptions",
    "telehealth",
    "website-builder",
    "whatsapp-reminders",
  ];

  const guideSlugs = [
    "getting-google-reviews",
    "launching-private-practice",
    "local-seo-for-doctors",
    "no-show-reduction",
    "personal-branding-for-doctors",
  ];

  const onlinePresenceSlugs = [
    "google-business-profile",
    "local-seo",
    "personal-branding",
    "reviews-reputation",
    "social-media",
  ];

  const patientGrowthSlugs = [
    "get-more-patients",
    "patient-retention",
    "recall-strategies",
    "reduce-no-shows",
  ];

  const reportSlugs = [
    "no-show-research-2026",
    "patient-acquisition-benchmarks",
  ];

  const templateSlugs = [
    "google-review-request",
    "intake-forms",
    "patient-recall-message",
    "treatment-plan",
  ];

  const solutionSlugs = [
    "aesthetic-clinics",
    "alternative-therapy",
    "ayurveda-doctors",
    "cardiologists",
    "chiropractors",
    "cosmetic-clinics",
    "dentists",
    "dermatologists",
    "ent-specialists",
    "fitness-trainers",
    "general-physicians",
    "gynecologists",
    "homeopathy-doctors",
    "ivf-clinics",
    "nutritionists",
    "ophthalmologists",
    "orthopedics",
    "pediatricians",
    "personal-coaches",
    "physiotherapists",
    "psychiatrists",
    "psychologists",
    "solo-doctors",
    "therapists",
    "yoga-instructors",
  ];

  const entries = [
    ...coreRoutes.map((route) => {
      let priority = 0.8;
      if (route === "") {
        priority = 1.0;
      } else if (
        [
          "/compliance/abdm",
          "/pricing/solo-doctors",
          "/pricing/solo-doctors/global",
          "/pricing/solo-doctors/india",
        ].includes(route)
      ) {
        priority = 0.7;
      }
      return {
        url: `${baseUrl}${route}`,
        lastModified: lastmod,
        changeFrequency: "weekly" as const,
        priority,
      };
    }),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...comparisonSlugs.map((slug) => ({
      url: `${baseUrl}/compare/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...featureSlugs.map((slug) => ({
      url: `${baseUrl}/features/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...guideSlugs.map((slug) => ({
      url: `${baseUrl}/guides/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...onlinePresenceSlugs.map((slug) => ({
      url: `${baseUrl}/online-presence/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...patientGrowthSlugs.map((slug) => ({
      url: `${baseUrl}/patient-growth/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...reportSlugs.map((slug) => ({
      url: `${baseUrl}/reports/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...templateSlugs.map((slug) => ({
      url: `${baseUrl}/templates/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: lastmod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return entries;
}
