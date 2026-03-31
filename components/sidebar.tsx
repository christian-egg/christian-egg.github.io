"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  ExternalLink,
  FolderKanban,
  Github,
  Home,
  Linkedin,
  Mail,
  PenSquare,
  UserRound,
  Wrench,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

type ConnectItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/blogs", label: "Blogs", icon: PenSquare },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/tools", label: "Tools", icon: Wrench },
];

const CONNECT_ITEMS: ConnectItem[] = [
  { href: "https://github.com/christian-egg", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/christian-egg/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-sidebar-border bg-sidebar md:sticky md:top-0 md:h-screen md:w-72 md:border-b-0 md:border-r">
      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <div className="mb-8 border-b border-sidebar-border pb-6">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              CE
            </div>
            <p className="text-lg font-semibold text-foreground">Christian Egg</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Software developer and builder.
            </p>
          </div>

          <nav aria-label="Primary navigation">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                        active
                          ? "bg-nav-active text-nav-active-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-sidebar-border pt-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Connect
          </p>
          <ul className="space-y-2">
            {CONNECT_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
