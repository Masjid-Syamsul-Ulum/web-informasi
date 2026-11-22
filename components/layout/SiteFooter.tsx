import { AtSign, MapPin, MessageCircle } from "lucide-react";
import type { SiteInfo } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { InfoRow } from "@/components/ui/InfoRow";

const contactIcons = {
  instagram: AtSign,
  whatsapp: MessageCircle,
};

export function SiteFooter({ site }: { site: SiteInfo }) {
  return (
    <footer className="bg-surface py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg font-extrabold text-brand-900">{site.name}</p>
            <div className="mt-4">
              <InfoRow icon={MapPin}>{site.address}</InfoRow>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            {site.contacts.map((contact) => (
              <li key={contact.href}>
                <InfoRow icon={contactIcons[contact.type]}>
                  <a href={contact.href} className="hover:text-brand-700">
                    {contact.label}
                  </a>
                </InfoRow>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
