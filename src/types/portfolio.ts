export type AboutCard = {
  id: string;
  title: string;
  body: string;
  iconKey: string;
};

export type HomeStat = {
  id: string;
  value: string;
  label: string;
};

export type HomeSocialLink = {
  id: string;
  label: string;
  url: string;
  displayText?: string;
};

export type HomeContent = {
  badge: string;
  intro: string;
  name: string;
  roles: string[];
  summary: string;
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  resumeLabel: string;
  resumeUrl: string;
  socialLinks: HomeSocialLink[];
  availabilityText: string;
  imageUrl: string;
  imageAlt: string;
  location: string;
  imageCardText: string;
  stats: HomeStat[];
  connectBadge: string;
  connectTitle: string;
  connectDescription: string;
  connectLinks: HomeSocialLink[];
};

export type AboutSection = {
  badge: string;
  quote: string;
  cards: AboutCard[];
};

export type SkillItem = {
  id: string;
  name: string;
  description?: string;
  iconKey: string;
};

export type SkillSection = {
  id: string;
  title: string;
  items: SkillItem[];
};

export type SkillsContent = {
  subtitle: string;
  sections: SkillSection[];
};

export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  status: string;
  featured: boolean;
  description: string;
  highlights: string[];
  tech: string[];
  iconKey: string;
  previewKey: string;
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  linkedinUrl?: string;
};

export type ProjectsContent = {
  subtitle: string;
  items: ProjectItem[];
};

export type CertificateItem = {
  id: string;
  title: string;
  issuer: string;
  image: string;
  summary: string;
  externalUrl?: string;
};

export type CertificatesContent = {
  subtitle: string;
  items: CertificateItem[];
};

export type CodingStat = {
  id: string;
  label: string;
  value: string;
  tone: string;
};

export type CodingBadgeRating = {
  id: string;
  title: string;
  stars: number;
};

export type CodingProfile = {
  id: string;
  name: string;
  handle: string;
  url: string;
  iconKey: string;
  accent: string;
  badge: string;
  description: string;
  badgeRatings: CodingBadgeRating[];
  stats: CodingStat[];
};

export type CodingContent = {
  heroTitle: string;
  heroSubtitle: string;
  profiles: CodingProfile[];
};

export type EducationEntry = {
  id: string;
  label: string;
  title: string;
  period: string;
  location?: string;
  metric?: string;
  stream?: string;
  description: string;
  iconKey: string;
};

export type TrainingEntry = {
  id: string;
  label: string;
  title: string;
  period: string;
  bullets: string[];
  summary?: string;
  certificateTitle?: string;
  certificateIssuer?: string;
  certificateImage?: string;
  iconKey: string;
};

export type ExperienceEntry = {
  id: string;
  label: string;
  title: string;
  period: string;
  bullets: string[];
  iconKey: string;
};

export type EducationContent = {
  heroTitle: string;
  educationEntries: EducationEntry[];
  trainingEntries: TrainingEntry[];
  experienceEntries: ExperienceEntry[];
};

export type PortfolioContent = {
  home: HomeContent;
  about: AboutSection;
  skills: SkillsContent;
  projects: ProjectsContent;
  certificates: CertificatesContent;
  coding: CodingContent;
  education: EducationContent;
};

export type ContentSectionKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "certificates"
  | "coding"
  | "education";
