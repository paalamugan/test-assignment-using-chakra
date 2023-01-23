const appConfig = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000",
  siteName: "Assignment Project",
  title: "Assignment Project",
  description: "Assignment project using chakra ui",
  locale: "en",
  assignmentApiBaseEndpoint: process.env.ASSIGNMENT_API_BASE_ENDPOINT || "https://assignment-1-fc7lwmf3uq-el.a.run.app",
  logo: "/logo.png",
  user: {
    name: "John Doe",
  }
} as const;

export default appConfig;
