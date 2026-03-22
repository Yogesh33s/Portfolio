import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { defaultPortfolioContent } from "@/lib/defaultPortfolioContent";
import type { ContentSectionKey, PortfolioContent } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-content-v1";

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
        setContent(JSON.parse(saved));
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
