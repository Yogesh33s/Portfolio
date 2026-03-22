import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

const SESSION_KEY = "portfolio-admin-session";
const PASSWORD_KEY = "portfolio-admin-password";
const DEFAULT_EMAIL = "yogeshranwa33@gmail.com";
const DEFAULT_PASSWORD = "333@Sonu";

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  changePassword: (currentPassword: string, nextPassword: string) => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && window.sessionStorage.getItem(SESSION_KEY) === "true"
  );
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      isAuthenticated,
      loginModalOpen,
      openLoginModal: () => setLoginModalOpen(true),
      closeLoginModal: () => setLoginModalOpen(false),
      login: async (email: string, password: string) => {
        const savedPassword = window.localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
        if (email.trim().toLowerCase() !== DEFAULT_EMAIL || password !== savedPassword) {
          throw new Error("Invalid email or password.");
        }
        window.sessionStorage.setItem(SESSION_KEY, "true");
        setIsAuthenticated(true);
        setLoginModalOpen(false);
      },
      logout: () => {
        window.sessionStorage.removeItem(SESSION_KEY);
        setIsAuthenticated(false);
      },
      changePassword: (currentPassword: string, nextPassword: string) => {
        const savedPassword = window.localStorage.getItem(PASSWORD_KEY) || DEFAULT_PASSWORD;
        if (currentPassword !== savedPassword) {
          throw new Error("Current password is incorrect.");
        }
        if (nextPassword.trim().length < 6) {
          throw new Error("New password must be at least 6 characters.");
        }
        window.localStorage.setItem(PASSWORD_KEY, nextPassword);
      },
    }),
    [isAuthenticated, loginModalOpen]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) throw new Error("useAdminAuth must be used inside AdminAuthProvider.");
  return context;
};
