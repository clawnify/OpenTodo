import { AppNav, embedded, reportLocation } from "@clawnify/app/client";
import { CircleCheck, ListTodo, FolderKanban } from "lucide-preact";
import { useApp } from "../context";
import type { View } from "../types";

const NAV_ITEMS: { view: View; label: string; icon: typeof ListTodo }[] = [
  { view: "issues", label: "My Issues", icon: ListTodo },
  { view: "projects", label: "Projects", icon: FolderKanban },
];

export function Sidebar() {
  const { view, setView, stats, selectedIssue, selectIssue } = useApp();

  const counts: Record<View, number> = {
    issues: stats.issues,
    projects: stats.projects,
  };

  const handleNav = (v: View) => {
    if (selectedIssue) selectIssue(null);
    setView(v);
    const url = new URL(window.location.href);
    url.searchParams.set("view", v);
    window.history.pushState(null, "", url.pathname + url.search);
    reportLocation(url.pathname + url.search);
  };

  if (embedded) return <AppNav title="Todo" icon="list-checks" active={view}
    groups={[{ items: NAV_ITEMS.map(item => ({ id: item.view, label: item.label,
      href: `/?view=${item.view}`, icon: item.view === "issues" ? "list-checks" : "folder",
      count: counts[item.view], home: item.view === "issues" })) }]}
    onNavigate={item => handleNav(item.id as View)} />;

  return (
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-icon">
          <CircleCheck size={16} />
        </div>
        Issues
      </div>
      <nav class="sidebar-nav">
        <div class="sidebar-section-title">Workspace</div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.view}
            class={`sidebar-item ${view === item.view && !selectedIssue ? "active" : ""}`}
            onClick={() => handleNav(item.view)}
            aria-label={`View ${item.label}`}
          >
            <item.icon size={16} />
            {item.label}
            <span class="sidebar-badge">{counts[item.view]}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
