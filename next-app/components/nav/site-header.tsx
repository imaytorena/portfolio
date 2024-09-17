import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/nav/main-nav"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { SheetDemo } from '@/components/nav/left-nav';
import { LangSwitcher } from '@/components/intl/lang-switcher';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-400 bg-background">
        <MainNav />
      </header>
  )
}
