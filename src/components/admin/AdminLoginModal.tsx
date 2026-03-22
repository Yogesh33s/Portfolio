import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { useToast } from "@/hooks/use-toast";

export const ADMIN_ROUTE = "/hidden-admin";

const AdminLoginModal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { loginModalOpen, closeLoginModal, login } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      setPassword("");
      toast({ title: "Admin access granted", description: "Opening the hidden editor." });
      navigate(ADMIN_ROUTE);
    } catch (error) {
      toast({
        title: "Access denied",
        description: error instanceof Error ? error.message : "Invalid credentials.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={loginModalOpen} onOpenChange={(open) => (!open ? closeLoginModal() : undefined)}>
      <DialogContent className="border-white/10 bg-slate-950 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-300" />
            Hidden Admin Login
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Sign in to edit your portfolio content.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <Input value={email} onChange={(event) => setEmail(event.target.value)} className="border-white/10 bg-slate-900 text-white" />
          </label>
          <label className="block space-y-2 text-sm text-slate-300">
            <span>Password</span>
            <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="border-white/10 bg-slate-900 text-white" />
          </label>

          <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400">
            Open Admin Panel
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginModal;
