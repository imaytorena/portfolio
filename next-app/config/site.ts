export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "jmaytorena",
  description:
    "Personal portfolio made by Javier Maytorena",
  mainNav: [
    {
      title: "Resume",
      href: "/resume",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    gitlab: "https://gitlab.com/mythonx",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
