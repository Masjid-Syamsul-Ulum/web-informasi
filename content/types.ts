export type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

export type ContactLink = {
  type: "instagram" | "whatsapp";
  label: string;
  href: string;
};

export type SiteInfo = {
  name: string;
  description: string;
  tagline: { title: string; titleLight: string };
  address: string;
  contacts: ContactLink[];
};

export type AppLink = {
  name: string;
  description: string;
  url: string;
};
