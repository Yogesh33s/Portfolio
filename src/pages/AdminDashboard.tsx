import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Plus, Save, Trash2 } from "lucide-react";

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { usePortfolioContent } from "@/contexts/PortfolioContentContext";
import { useToast } from "@/hooks/use-toast";
import type { ContentSectionKey, HomeSocialLink, HomeStat, PortfolioContent, ProjectItem } from "@/types/portfolio";

const cardClass = "rounded-3xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md";
const uid = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
const splitLines = (value: string) => value.split("\n").map((item) => item.trim()).filter(Boolean);
const splitComma = (value: string) => value.split(",").map((item) => item.trim()).filter(Boolean);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { content, setSectionContent, resetContent } = usePortfolioContent();
  const { logout, changePassword } = useAdminAuth();
  const [draft, setDraft] = useState<PortfolioContent>(content);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    setDraft(content);
  }, [content]);

  const saveSection = (section: ContentSectionKey) => {
    setSectionContent(section, draft[section] as never);
    toast({ title: "Saved", description: `${section} updated successfully.` });
  };

  const handlePasswordChange = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      changePassword(currentPassword, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      toast({ title: "Password updated", description: "Your hidden admin password has been changed." });
    } catch (error) {
      toast({ title: "Update failed", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    }
  };

  return (
    <div className="theme-page min-h-screen bg-[linear-gradient(160deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] text-white">
      <Navigation />
      <div className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl space-y-8">
          <section className="rounded-[2rem] border border-cyan-400/15 bg-white/5 p-8 backdrop-blur-md">
            <h1 className="text-4xl font-black">Hidden Portfolio Admin</h1>
            <p className="mt-3 max-w-3xl text-slate-300">
              Add, remove, and update your Home, About, Skills, Projects, Certificates, Coding, and Learning content from here.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button onClick={() => { logout(); navigate("/"); }} variant="outline" className="border-white/10 bg-white/5 text-white">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
              <Button onClick={() => { resetContent(); setDraft(content); toast({ title: "Content reset", description: "Portfolio content restored to defaults." }); }} variant="outline" className="border-white/10 bg-white/5 text-white">
                Reset Content
              </Button>
            </div>
          </section>

          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="flex h-auto flex-wrap justify-start gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-2">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="coding">Coding</TabsTrigger>
              <TabsTrigger value="education">Learning</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="space-y-4">
              <div className={cardClass}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Badge" value={draft.home.badge} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, badge: value } }))} />
                  <Field label="Intro" value={draft.home.intro} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, intro: value } }))} />
                  <Field label="Name" value={draft.home.name} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, name: value } }))} />
                  <Field label="Roles (comma separated)" value={draft.home.roles.join(", ")} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, roles: splitComma(value) } }))} />
                  <Field label="Primary Button Label" value={draft.home.primaryCtaLabel} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, primaryCtaLabel: value } }))} />
                  <Field label="Primary Button URL" value={draft.home.primaryCtaUrl} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, primaryCtaUrl: value } }))} />
                  <Field label="Resume Button Label" value={draft.home.resumeLabel} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, resumeLabel: value } }))} />
                  <Field label="Resume URL" value={draft.home.resumeUrl} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, resumeUrl: value } }))} />
                  <Field label="Availability Text" value={draft.home.availabilityText} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, availabilityText: value } }))} />
                  <Field label="Location" value={draft.home.location} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, location: value } }))} />
                  <Field label="Profile Image URL" value={draft.home.imageUrl} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, imageUrl: value } }))} />
                  <Field label="Profile Image Alt" value={draft.home.imageAlt} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, imageAlt: value } }))} />
                </div>
                <div className="mt-4 grid gap-4">
                  <FieldArea label="Summary" value={draft.home.summary} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, summary: value } }))} />
                  <FieldArea label="Profile Card Text" value={draft.home.imageCardText} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, imageCardText: value } }))} />
                  <Field label="Connect Badge" value={draft.home.connectBadge} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, connectBadge: value } }))} />
                  <Field label="Connect Title" value={draft.home.connectTitle} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, connectTitle: value } }))} />
                  <FieldArea label="Connect Description" value={draft.home.connectDescription} onChange={(value) => setDraft((current) => ({ ...current, home: { ...current.home, connectDescription: value } }))} />
                </div>
              </div>

              <div className={cardClass}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Hero Social Links</h3>
                  <Button onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, socialLinks: [...current.home.socialLinks, emptyHomeLink("social")] } }))} variant="outline" className="border-white/10 bg-white/5 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Link
                  </Button>
                </div>
                <div className="space-y-3">
                  {draft.home.socialLinks.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="font-medium">{item.label}</h4>
                        <DeleteButton onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, socialLinks: current.home.socialLinks.filter((link) => link.id !== item.id) } }))} />
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <Field label="Label" value={item.label} onChange={(value) => updateHomeSocialLink(item.id, { label: value })} />
                        <Field label="URL" value={item.url} onChange={(value) => updateHomeSocialLink(item.id, { url: value })} />
                        <Field label="Display Text" value={item.displayText || ""} onChange={(value) => updateHomeSocialLink(item.id, { displayText: value })} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cardClass}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Home Stats</h3>
                  <Button onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, stats: [...current.home.stats, emptyHomeStat()] } }))} variant="outline" className="border-white/10 bg-white/5 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Stat
                  </Button>
                </div>
                <div className="space-y-3">
                  {draft.home.stats.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="font-medium">{item.label}</h4>
                        <DeleteButton onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, stats: current.home.stats.filter((stat) => stat.id !== item.id) } }))} />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <Field label="Value" value={item.value} onChange={(value) => updateHomeStat(item.id, { value })} />
                        <Field label="Label" value={item.label} onChange={(value) => updateHomeStat(item.id, { label: value })} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={cardClass}>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Connect Links</h3>
                  <Button onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, connectLinks: [...current.home.connectLinks, emptyHomeLink("connect")] } }))} variant="outline" className="border-white/10 bg-white/5 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Connect Link
                  </Button>
                </div>
                <div className="space-y-3">
                  {draft.home.connectLinks.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="font-medium">{item.label}</h4>
                        <DeleteButton onClick={() => setDraft((current) => ({ ...current, home: { ...current.home, connectLinks: current.home.connectLinks.filter((link) => link.id !== item.id) } }))} />
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        <Field label="Label" value={item.label} onChange={(value) => updateHomeConnectLink(item.id, { label: value })} />
                        <Field label="URL" value={item.url} onChange={(value) => updateHomeConnectLink(item.id, { url: value })} />
                        <Field label="Display Text" value={item.displayText || ""} onChange={(value) => updateHomeConnectLink(item.id, { displayText: value })} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => saveSection("home")} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400">
                  <Save className="mr-2 h-4 w-4" />
                  Save Home
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-4">
              <div className={cardClass}>
                <Field label="Badge" value={draft.about.badge} onChange={(value) => setDraft((current) => ({ ...current, about: { ...current.about, badge: value } }))} />
                <div className="mt-4">
                  <FieldArea label="Quote" value={draft.about.quote} onChange={(value) => setDraft((current) => ({ ...current, about: { ...current.about, quote: value } }))} />
                </div>
              </div>
              {draft.about.cards.map((card) => (
                <EditorCard key={card.id} title={card.title} onDelete={() => setDraft((current) => ({ ...current, about: { ...current.about, cards: current.about.cards.filter((item) => item.id !== card.id) } }))}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Title" value={card.title} onChange={(value) => updateAboutCard(card.id, { title: value })} />
                    <Field label="Icon Key" value={card.iconKey} onChange={(value) => updateAboutCard(card.id, { iconKey: value })} />
                  </div>
                  <div className="mt-4">
                    <FieldArea label="Body" value={card.body} onChange={(value) => updateAboutCard(card.id, { body: value })} />
                  </div>
                </EditorCard>
              ))}
              <Toolbar addLabel="Add Card" onAdd={() => setDraft((current) => ({ ...current, about: { ...current.about, cards: [...current.about.cards, { id: uid("about"), title: "New Card", body: "Write here", iconKey: "Sparkles" }] } }))} saveLabel="Save About" onSave={() => saveSection("about")} />
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <div className={cardClass}>
                <FieldArea label="Subtitle" value={draft.skills.subtitle} onChange={(value) => setDraft((current) => ({ ...current, skills: { ...current.skills, subtitle: value } }))} />
              </div>
              {draft.skills.sections.map((section) => (
                <EditorCard key={section.id} title={section.title} onDelete={() => setDraft((current) => ({ ...current, skills: { ...current.skills, sections: current.skills.sections.filter((item) => item.id !== section.id) } }))}>
                  <Field label="Section Title" value={section.title} onChange={(value) => updateSkillSection(section.id, { title: value })} />
                  <div className="mt-4 space-y-3">
                    {section.items.map((item) => (
                      <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h4 className="font-medium">{item.name}</h4>
                          <DeleteButton onClick={() => updateSkillSection(section.id, { items: section.items.filter((skill) => skill.id !== item.id) })} />
                        </div>
                        <div className="grid gap-4 md:grid-cols-3">
                          <Field label="Name" value={item.name} onChange={(value) => updateSkillItem(section.id, item.id, { name: value })} />
                          <Field label="Icon Key" value={item.iconKey} onChange={(value) => updateSkillItem(section.id, item.id, { iconKey: value })} />
                          <Field label="Description" value={item.description || ""} onChange={(value) => updateSkillItem(section.id, item.id, { description: value })} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => updateSkillSection(section.id, { items: [...section.items, { id: uid("skill"), name: "New Skill", iconKey: "Sparkles", description: "" }] })} variant="outline" className="mt-4 border-white/10 bg-white/5 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill
                  </Button>
                </EditorCard>
              ))}
              <Toolbar addLabel="Add Skill Section" onAdd={() => setDraft((current) => ({ ...current, skills: { ...current.skills, sections: [...current.skills.sections, { id: uid("section"), title: "New Section", items: [] }] } }))} saveLabel="Save Skills" onSave={() => saveSection("skills")} />
            </TabsContent>

            <TabsContent value="projects" className="space-y-4">
              <div className={cardClass}>
                <FieldArea label="Subtitle" value={draft.projects.subtitle} onChange={(value) => setDraft((current) => ({ ...current, projects: { ...current.projects, subtitle: value } }))} />
              </div>
              {draft.projects.items.map((project) => (
                <EditorCard key={project.id} title={project.title} onDelete={() => setDraft((current) => ({ ...current, projects: { ...current.projects, items: current.projects.items.filter((item) => item.id !== project.id) } }))}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field label="Title" value={project.title} onChange={(value) => updateProject(project.id, { title: value })} />
                    <Field label="Category" value={project.category} onChange={(value) => updateProject(project.id, { category: value })} />
                    <Field label="Status" value={project.status} onChange={(value) => updateProject(project.id, { status: value })} />
                    <Field label="Icon Key" value={project.iconKey} onChange={(value) => updateProject(project.id, { iconKey: value })} />
                    <Field label="Preview Key" value={project.previewKey} onChange={(value) => updateProject(project.id, { previewKey: value })} />
                    <Field label="Image URL" value={project.imageUrl || ""} onChange={(value) => updateProject(project.id, { imageUrl: value })} />
                    <Field label="GitHub URL" value={project.githubUrl} onChange={(value) => updateProject(project.id, { githubUrl: value })} />
                    <Field label="Live URL" value={project.liveUrl || ""} onChange={(value) => updateProject(project.id, { liveUrl: value })} />
                    <Field label="LinkedIn URL" value={project.linkedinUrl || ""} onChange={(value) => updateProject(project.id, { linkedinUrl: value })} />
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <FieldArea label="Description" value={project.description} onChange={(value) => updateProject(project.id, { description: value })} />
                    <FieldArea label="Highlights (one per line)" value={project.highlights.join("\n")} onChange={(value) => updateProject(project.id, { highlights: splitLines(value) })} />
                    <Field label="Tech (comma separated)" value={project.tech.join(", ")} onChange={(value) => updateProject(project.id, { tech: splitComma(value) })} />
                    <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
                      <input type="checkbox" checked={project.featured} onChange={(event) => updateProject(project.id, { featured: event.target.checked })} />
                      Featured Project
                    </label>
                  </div>
                </EditorCard>
              ))}
              <Toolbar addLabel="Add Project" onAdd={() => setDraft((current) => ({ ...current, projects: { ...current.projects, items: [...current.projects.items, emptyProject()] } }))} saveLabel="Save Projects" onSave={() => saveSection("projects")} />
            </TabsContent>

            <TabsContent value="certificates" className="space-y-4">
              <div className={cardClass}>
                <FieldArea label="Subtitle" value={draft.certificates.subtitle} onChange={(value) => setDraft((current) => ({ ...current, certificates: { ...current.certificates, subtitle: value } }))} />
              </div>
              {draft.certificates.items.map((certificate) => (
                <EditorCard key={certificate.id} title={certificate.title} onDelete={() => setDraft((current) => ({ ...current, certificates: { ...current.certificates, items: current.certificates.items.filter((item) => item.id !== certificate.id) } }))}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Title" value={certificate.title} onChange={(value) => updateCertificate(certificate.id, { title: value })} />
                    <Field label="Issuer" value={certificate.issuer} onChange={(value) => updateCertificate(certificate.id, { issuer: value })} />
                    <Field label="Image" value={certificate.image} onChange={(value) => updateCertificate(certificate.id, { image: value })} />
                    <FieldArea label="Summary" value={certificate.summary} onChange={(value) => updateCertificate(certificate.id, { summary: value })} />
                  </div>
                </EditorCard>
              ))}
              <Toolbar addLabel="Add Certificate" onAdd={() => setDraft((current) => ({ ...current, certificates: { ...current.certificates, items: [...current.certificates.items, { id: uid("cert"), title: "New Certificate", issuer: "Issuer", image: "/placeholder.svg", summary: "Summary" }] } }))} saveLabel="Save Certificates" onSave={() => saveSection("certificates")} />
            </TabsContent>

            <TabsContent value="coding" className="space-y-4">
              <div className={cardClass}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Page Title" value={draft.coding.heroTitle} onChange={(value) => setDraft((current) => ({ ...current, coding: { ...current.coding, heroTitle: value } }))} />
                  <FieldArea label="Intro" value={draft.coding.heroSubtitle} onChange={(value) => setDraft((current) => ({ ...current, coding: { ...current.coding, heroSubtitle: value } }))} />
                </div>
              </div>
              {draft.coding.profiles.map((profile) => (
                <EditorCard key={profile.id} title={profile.name} onDelete={() => setDraft((current) => ({ ...current, coding: { ...current.coding, profiles: current.coding.profiles.filter((item) => item.id !== profile.id) } }))}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field label="Name" value={profile.name} onChange={(value) => updateCodingProfile(profile.id, { name: value })} />
                    <Field label="Handle" value={profile.handle} onChange={(value) => updateCodingProfile(profile.id, { handle: value })} />
                    <Field label="Profile URL" value={profile.url} onChange={(value) => updateCodingProfile(profile.id, { url: value })} />
                    <Field label="Icon Key" value={profile.iconKey} onChange={(value) => updateCodingProfile(profile.id, { iconKey: value })} />
                    <Field label="Badge" value={profile.badge} onChange={(value) => updateCodingProfile(profile.id, { badge: value })} />
                    <Field label="Accent Classes" value={profile.accent} onChange={(value) => updateCodingProfile(profile.id, { accent: value })} />
                  </div>
                  <div className="mt-4">
                    <FieldArea label="Description" value={profile.description} onChange={(value) => updateCodingProfile(profile.id, { description: value })} />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-medium">Badge Ratings</h4>
                      <Button onClick={() => updateCodingProfile(profile.id, { badgeRatings: [...profile.badgeRatings, { id: uid("coding-badge"), title: "New Badge", stars: 3 }] })} variant="outline" className="border-white/10 bg-white/5 text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Badge
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {profile.badgeRatings.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <h5 className="font-medium">{item.title}</h5>
                            <DeleteButton onClick={() => updateCodingProfile(profile.id, { badgeRatings: profile.badgeRatings.filter((badge) => badge.id !== item.id) })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <Field label="Title" value={item.title} onChange={(value) => updateCodingBadge(profile.id, item.id, { title: value })} />
                            <Field label="Stars (0-5)" value={String(item.stars)} onChange={(value) => updateCodingBadge(profile.id, item.id, { stars: clampStars(value) })} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-medium">Stats</h4>
                      <Button onClick={() => updateCodingProfile(profile.id, { stats: [...profile.stats, { id: uid("coding-stat"), label: "New Stat", value: "0", tone: "text-white" }] })} variant="outline" className="border-white/10 bg-white/5 text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Stat
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {profile.stats.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <h5 className="font-medium">{item.label}</h5>
                            <DeleteButton onClick={() => updateCodingProfile(profile.id, { stats: profile.stats.filter((stat) => stat.id !== item.id) })} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-3">
                            <Field label="Label" value={item.label} onChange={(value) => updateCodingStat(profile.id, item.id, { label: value })} />
                            <Field label="Value" value={item.value} onChange={(value) => updateCodingStat(profile.id, item.id, { value: value })} />
                            <Field label="Tone Class" value={item.tone} onChange={(value) => updateCodingStat(profile.id, item.id, { tone: value })} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </EditorCard>
              ))}
              <Toolbar addLabel="Add Coding Profile" onAdd={() => setDraft((current) => ({ ...current, coding: { ...current.coding, profiles: [...current.coding.profiles, emptyCodingProfile()] } }))} saveLabel="Save Coding" onSave={() => saveSection("coding")} />
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <div className={cardClass}>
                <Field label="Page Title" value={draft.education.heroTitle} onChange={(value) => setDraft((current) => ({ ...current, education: { ...current.education, heroTitle: value } }))} />
              </div>
              {draft.education.educationEntries.map((entry) => (
                <EditorCard key={entry.id} title={entry.title} onDelete={() => setDraft((current) => ({ ...current, education: { ...current.education, educationEntries: current.education.educationEntries.filter((item) => item.id !== entry.id) } }))}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field label="Label" value={entry.label} onChange={(value) => updateEducationEntry(entry.id, { label: value })} />
                    <Field label="Title" value={entry.title} onChange={(value) => updateEducationEntry(entry.id, { title: value })} />
                    <Field label="Period" value={entry.period} onChange={(value) => updateEducationEntry(entry.id, { period: value })} />
                    <Field label="Location" value={entry.location || ""} onChange={(value) => updateEducationEntry(entry.id, { location: value })} />
                    <Field label="Metric" value={entry.metric || ""} onChange={(value) => updateEducationEntry(entry.id, { metric: value })} />
                    <Field label="Stream" value={entry.stream || ""} onChange={(value) => updateEducationEntry(entry.id, { stream: value })} />
                    <Field label="Icon Key" value={entry.iconKey} onChange={(value) => updateEducationEntry(entry.id, { iconKey: value })} />
                  </div>
                  <div className="mt-4">
                    <FieldArea label="Description" value={entry.description} onChange={(value) => updateEducationEntry(entry.id, { description: value })} />
                  </div>
                </EditorCard>
              ))}
              <Toolbar addLabel="Save Learning" onAdd={() => setDraft((current) => ({ ...current, education: { ...current.education, educationEntries: [...current.education.educationEntries, { id: uid("edu"), label: "New Education", title: "Title", period: "Year", location: "", metric: "", stream: "", description: "Description", iconKey: "School" }] } }))} saveLabel="Save Learning" onSave={() => saveSection("education")} />
            </TabsContent>

            <TabsContent value="security" className="space-y-4">
              <div className={cardClass}>
                <h3 className="text-xl font-semibold">Change Admin Password</h3>
                <form onSubmit={handlePasswordChange} className="mt-6 grid gap-4 md:grid-cols-2">
                  <Field label="Current Password" type="password" value={currentPassword} onChange={setCurrentPassword} />
                  <Field label="New Password" type="password" value={newPassword} onChange={setNewPassword} />
                  <div className="md:col-span-2">
                    <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400">
                      Update Password
                    </Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );

  function updateAboutCard(id: string, patch: { title?: string; body?: string; iconKey?: string }) {
    setDraft((current) => ({
      ...current,
      about: { ...current.about, cards: current.about.cards.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateSkillSection(id: string, patch: { title?: string; items?: PortfolioContent["skills"]["sections"][number]["items"] }) {
    setDraft((current) => ({
      ...current,
      skills: { ...current.skills, sections: current.skills.sections.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateSkillItem(sectionId: string, itemId: string, patch: { name?: string; description?: string; iconKey?: string }) {
    setDraft((current) => ({
      ...current,
      skills: {
        ...current.skills,
        sections: current.skills.sections.map((section) =>
          section.id === sectionId
            ? { ...section, items: section.items.map((item) => (item.id === itemId ? { ...item, ...patch } : item)) }
            : section
        ),
      },
    }));
  }

  function updateProject(id: string, patch: Partial<ProjectItem>) {
    setDraft((current) => ({
      ...current,
      projects: { ...current.projects, items: current.projects.items.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateCertificate(id: string, patch: { title?: string; issuer?: string; image?: string; summary?: string }) {
    setDraft((current) => ({
      ...current,
      certificates: { ...current.certificates, items: current.certificates.items.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateEducationEntry(id: string, patch: Partial<PortfolioContent["education"]["educationEntries"][number]>) {
    setDraft((current) => ({
      ...current,
      education: { ...current.education, educationEntries: current.education.educationEntries.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateCodingProfile(id: string, patch: Partial<PortfolioContent["coding"]["profiles"][number]>) {
    setDraft((current) => ({
      ...current,
      coding: { ...current.coding, profiles: current.coding.profiles.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateCodingBadge(profileId: string, badgeId: string, patch: Partial<PortfolioContent["coding"]["profiles"][number]["badgeRatings"][number]>) {
    setDraft((current) => ({
      ...current,
      coding: {
        ...current.coding,
        profiles: current.coding.profiles.map((profile) =>
          profile.id === profileId
            ? { ...profile, badgeRatings: profile.badgeRatings.map((item) => (item.id === badgeId ? { ...item, ...patch } : item)) }
            : profile
        ),
      },
    }));
  }

  function updateCodingStat(profileId: string, statId: string, patch: Partial<PortfolioContent["coding"]["profiles"][number]["stats"][number]>) {
    setDraft((current) => ({
      ...current,
      coding: {
        ...current.coding,
        profiles: current.coding.profiles.map((profile) =>
          profile.id === profileId
            ? { ...profile, stats: profile.stats.map((item) => (item.id === statId ? { ...item, ...patch } : item)) }
            : profile
        ),
      },
    }));
  }

  function updateHomeStat(id: string, patch: Partial<HomeStat>) {
    setDraft((current) => ({
      ...current,
      home: { ...current.home, stats: current.home.stats.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateHomeSocialLink(id: string, patch: Partial<HomeSocialLink>) {
    setDraft((current) => ({
      ...current,
      home: { ...current.home, socialLinks: current.home.socialLinks.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }

  function updateHomeConnectLink(id: string, patch: Partial<HomeSocialLink>) {
    setDraft((current) => ({
      ...current,
      home: { ...current.home, connectLinks: current.home.connectLinks.map((item) => (item.id === id ? { ...item, ...patch } : item)) },
    }));
  }
};

const emptyProject = (): ProjectItem => ({
  id: uid("project"),
  title: "New Project",
  category: "Category",
  status: "In Progress",
  featured: false,
  description: "Describe the project.",
  highlights: ["Add highlight"],
  tech: ["React"],
  iconKey: "Code",
  previewKey: "dashboard",
  imageUrl: "",
  githubUrl: "https://github.com/",
  liveUrl: "",
  linkedinUrl: "",
});

const emptyCodingProfile = (): PortfolioContent["coding"]["profiles"][number] => ({
  id: uid("coding"),
  name: "New Profile",
  handle: "@username",
  url: "https://",
  iconKey: "Trophy",
  accent: "border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(255,255,255,0.05))] hover:shadow-cyan-500/20",
  badge: "Coding",
  description: "Describe this coding profile.",
  badgeRatings: [],
  stats: [],
});

const emptyHomeStat = (): HomeStat => ({
  id: uid("home-stat"),
  value: "0+",
  label: "New Stat",
});

const emptyHomeLink = (prefix: string): HomeSocialLink => ({
  id: uid(`home-${prefix}`),
  label: "New Link",
  url: "https://",
  displayText: "",
});

const clampStars = (value: string) => {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(5, parsed));
};

const Field = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (value: string) => void; type?: string }) => (
  <label className="space-y-2 text-sm text-slate-300">
    <span>{label}</span>
    <Input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="border-white/10 bg-slate-950/80 text-white" />
  </label>
);

const FieldArea = ({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) => (
  <label className="space-y-2 text-sm text-slate-300">
    <span>{label}</span>
    <Textarea value={value} onChange={(event) => onChange(event.target.value)} className="min-h-[120px] border-white/10 bg-slate-950/80 text-white" />
  </label>
);

const Toolbar = ({ addLabel, onAdd, saveLabel, onSave }: { addLabel: string; onAdd: () => void; saveLabel: string; onSave: () => void }) => (
  <div className="flex flex-wrap gap-3">
    <Button onClick={onAdd} variant="outline" className="border-white/10 bg-white/5 text-white">
      <Plus className="mr-2 h-4 w-4" />
      {addLabel}
    </Button>
    <Button onClick={onSave} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:from-cyan-400 hover:to-blue-400">
      <Save className="mr-2 h-4 w-4" />
      {saveLabel}
    </Button>
  </div>
);

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-red-400/40 hover:text-red-300">
    <Trash2 className="h-4 w-4" />
  </button>
);

const EditorCard = ({ title, onDelete, children }: { title: string; onDelete: () => void; children: React.ReactNode }) => (
  <div className={cardClass}>
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-semibold">{title}</h3>
      <DeleteButton onClick={onDelete} />
    </div>
    {children}
  </div>
);

export default AdminDashboard;
