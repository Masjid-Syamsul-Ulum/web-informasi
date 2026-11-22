import Image from "next/image";
import { IconInstagram, IconLocation, IconWhatsapp } from "@/components/icons";
import type { AppLink, NavItem, SiteInfo } from "@/content/types";
import { BuildingLine } from "@/components/ui/BuildingLine";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InfoRow } from "@/components/ui/InfoRow";
import { Pattern } from "@/components/ui/Pattern";
import { TextLink } from "@/components/ui/TextLink";
import { WindowRow } from "@/components/ui/WindowRow";

type SiteFooterProps = {
  site: SiteInfo;
  navigation: NavItem[];
  apps: AppLink[];
};

const contactIcons = {
  instagram: IconInstagram,
  whatsapp: IconWhatsapp,
};

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gold-400">{title}</p>
      <ul className="mt-5 flex flex-col gap-3 text-white/85">{children}</ul>
    </div>
  );
}

export function SiteFooter({ site, navigation, apps }: SiteFooterProps) {
  const whatsapp = site.contacts.find((contact) => contact.type === "whatsapp");

  return (
    <footer data-tone="green" className="text-white">
      <WindowRow className="text-brand-900" />
      <div className="relative overflow-hidden bg-brand-900">
        <Pattern variant="roster" fade="right" className="text-white/[0.06]" />
        <div className="relative">
          <Container>
            <div className="flex flex-col gap-10 border-b border-white/10 py-16 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-2xl text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-balance sm:text-5xl">
                {site.tagline.title}
                <span className="block font-light text-gold-400">{site.tagline.titleLight}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/infak" variant="gold">
                  Infak sekarang
                </Button>
                {whatsapp && (
                  <Button href={whatsapp.href} variant="light">
                    Hubungi admin
                  </Button>
                )}
              </div>
            </div>

            <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
              <div className="max-w-xs">
                <Image src="/images/logo-syamsul-ulum.png" alt={site.name} width={445} height={272} className="h-14 w-auto brightness-0 invert" />
                <div className="mt-6 text-sm text-white/75">
                  <InfoRow icon={IconLocation}>{site.address}</InfoRow>
                </div>
              </div>
              <Column title="Jelajahi">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <TextLink href={item.href}>{item.label}</TextLink>
                  </li>
                ))}
              </Column>
              <Column title="Layanan">
                {apps.map((app) => (
                  <li key={app.url}>
                    <TextLink href={app.url}>{app.name}</TextLink>
                  </li>
                ))}
              </Column>
              <Column title="Kontak">
                {site.contacts.map((contact) => {
                  const Icon = contactIcons[contact.type];
                  return (
                    <li key={contact.href}>
                      <a href={contact.href} className="group/contact flex items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover/contact:bg-gold-400 group-hover/contact:text-brand-950">
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="text-sm">{contact.label}</span>
                      </a>
                    </li>
                  );
                })}
              </Column>
            </div>
          </Container>
          <div className="mx-auto max-w-4xl px-5">
            <BuildingLine className="text-gold-400/20" />
          </div>
          <div className="border-t border-white/10 py-6 text-sm text-white/55">
            <Container>DKM Syamsul Ulum Telkom University</Container>
          </div>
        </div>
      </div>
    </footer>
  );
}
