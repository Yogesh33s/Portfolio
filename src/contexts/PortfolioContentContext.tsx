import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { defaultPortfolioContent } from "@/lib/defaultPortfolioContent";
import type { ContentSectionKey, PortfolioContent } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-content-v1";

const mergeById = <T extends { id: string }>(defaults: T[], saved: T[] = []) => {
  const savedMap = new Map(saved.map((item) => [item.id, item]));
  const mergedDefaults = defaults.map((item) => savedMap.get(item.id) || item);
  const extraSaved = saved.filter((item) => !defaults.some((defaultItem) => defaultItem.id === item.id));
  return [...mergedDefaults, ...extraSaved];
};

const mergeWithDefaults = (saved: Partial<PortfolioContent>): PortfolioContent => ({
  about: {
    ...defaultPortfolioContent.about,
    ...saved.about,
    cards: mergeById(defaultPortfolioContent.about.cards, saved.about?.cards),
  },
  skills: {
    ...defaultPortfolioContent.skills,
    ...saved.skills,
    sections: mergeById(defaultPortfolioContent.skills.sections, saved.skills?.sections).map((section) => {
      const defaultSection = defaultPortfolioContent.skills.sections.find((item) => item.id === section.id);
      return defaultSection
        ? {
            ...defaultSection,
            ...section,
            items: mergeById(defaultSection.items, section.items),
          }
        : section;
    }),
  },
  projects: {
    ...defaultPortfolioContent.projects,
    ...saved.projects,
    items: mergeById(defaultPortfolioContent.projects.items, saved.projects?.items),
  },
  certificates: {
    ...defaultPortfolioContent.certificates,
    ...saved.certificates,
    items: mergeById(defaultPortfolioContent.certificates.items, saved.certificates?.items),
  },
  education: {
    ...defaultPortfolioContent.education,
    ...saved.education,
    educationEntries: mergeById(defaultPortfolioContent.education.educationEntries, saved.education?.educationEntries),
    trainingEntries: mergeById(defaultPortfolioContent.education.trainingEntries, saved.education?.trainingEntries),
    experienceEntries: mergeById(defaultPortfolioContent.education.experienceEntries, saved.education?.experienceEntries),
  },
});

type PortfolioContentContextValue = {
  content: PortfolioContent;
  setSectionContent: <K extends ContentSectionKey>(section: K, value: PortfolioContent[K]) => void;
  resetContent: () => void;
};

const PortfolioContentContext = createContext<PortfolioContentContextValue | undefined>(undefined);

export const PortfolioContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<PortfolioContent>(defaultPortfolioContent);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<PortfolioContent>;
        const merged = mergeWithDefaults(parsed);
        setContent(merged);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const value = useMemo(
    () => ({
      content,
      setSectionContent: (section, value) => {
        setContent((current) => {
          const next = { ...current, [section]: value };
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          return next;
        });
      },
      resetContent: () => {
        window.localStorage.removeItem(STORAGE_KEY);
        setContent(defaultPortfolioContent);
      },
    }),
    [content]
  );

  return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
};

export const usePortfolioContent = () => {
  const context = useContext(PortfolioContentContext);
  if (!context) throw new Error("usePortfolioContent must be used inside PortfolioContentProvider.");
  return context;
};
