"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentType } from "react";
import {
  BriefcaseBusiness,
  ExternalLink,
  FolderKanban,
  Home,
  Mail,
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
  iconSrc: string;
  iconAlt: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/tools", label: "Tools", icon: Wrench },
];

const CONNECT_ITEMS: ConnectItem[] = [
  {
    href: "https://github.com/christian-egg",
    label: "GitHub",
    iconSrc: "/icons/social/icons8-github-50.png",
    iconAlt: "GitHub",
  },
  {
    href: "https://x.com/Christian_C_Egg",
    label: "Twitter (X)",
    iconSrc: "/icons/social/icons8-twitter-50.png",
    iconAlt: "X",
  },
  {
    href: "https://www.linkedin.com/in/christian-classen/",
    label: "LinkedIn",
    iconSrc: "/icons/social/icons8-linkedin-50.png",
    iconAlt: "LinkedIn",
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
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border border-sidebar-border bg-muted">
                <Image
                  src="/images/christian_pfp.jpg"
                  alt="Christian Classen"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <p className="text-lg font-semibold text-foreground">Christian Classen</p>
              <p className="mt-2 max-w-[16rem] text-sm text-muted-foreground">
                M.S. Computer Science, UW–Madison · AI safety & ML research.
              </p>
            </div>
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
            {CONNECT_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt}
                      width={20}
                      height={20}
                      className="h-4 w-4 shrink-0 object-contain"
                    />
                    {item.label}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
